import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLeads, deleteLead } from '../../actions/leads'
import Table from '../layout/Table'

var _ = require('lodash');

export class Leads extends Component {

    static propTypes = {
        leads: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getLeads()
    }

    render() {
        return (
            <Fragment>
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

            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    leads: state.leads.leads
})

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads)
