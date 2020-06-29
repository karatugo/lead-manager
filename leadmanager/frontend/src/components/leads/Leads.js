import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLeads, deleteLead } from '../../actions/leads'
import Table from '../layout/Table'
import {
    Box
} from 'rebass'

var _ = require('lodash');

export class Leads extends Component {

    static propTypes = {
        leads: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired,
        deleteLead: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getLeads()
    }

    render() {
        return (
            <Box p={10} m={20}>
                <h2>Leads</h2>

                <Table
                    columns={5}
                    data={[
                        "ID",
                        "Name",
                        "Email",
                        "Message",
                        "Delete"].concat(
                            _.flattenDeep(
                                this.props.leads.map(
                                    lead =>
                                        [
                                            lead.id,
                                            lead.name,
                                            lead.email,
                                            lead.message,
                                            <button
                                                onClick={this.props.deleteLead.bind(this, lead.id)}
                                                className='delete-btn'>Delete</button>
                                        ]
                                )
                            )
                        )
                    }
                />
            </Box>
        )
    }
}

const mapStateToProps = state => ({
    leads: state.leads.leads
})

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads)
