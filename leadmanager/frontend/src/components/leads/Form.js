import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addLead } from '../../actions/leads'
import {
    Box,
    Flex,
    Text,
    Button,
    Card,
    Heading
} from 'rebass'
import {
    Label,
    Input,
    Select,
    Textarea,
    Radio,
    Checkbox,
} from '@rebass/forms'

export class Form extends Component {
    state = {
        name: '',
        email: '',
        message: '',
    }

    static propTypes = {
        addLead: PropTypes.func.isRequired
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()
        const { name, email, message } = this.state
        const lead = {
            name, email, message
        }
        this.props.addLead(lead)
    }

    render() {
        const { name, email, message } = this.state
        return (
            <Box
                p={10}>
                <Heading m={10} p={10}>Add Lead</Heading>
                <Box
                    as='form'
                    onSubmit={this.onSubmit}>
                    <Flex mx={4} mb={3}>
                        <Box
                            mr={2}
                            width={1 / 2}>
                            <Label htmlFor='name'>Name</Label>
                            <Input
                                id='name'
                                name='name'
                                onChange={this.onChange}
                                value={name}
                            />
                        </Box>
                        <Box
                            ml={2}
                            width={1 / 2}>
                            <Label htmlFor='email'>Email</Label>
                            <Input
                                id='email'
                                name='email'
                                onChange={this.onChange}
                                value={email}
                            />
                        </Box>
                    </Flex>
                    <Flex mx={4} mb={3}>
                        <Box width={3 / 4} pr={5}>
                            <Label htmlFor='message'>Message</Label>
                            <Input
                                id='message'
                                name='message'
                                onChange={this.onChange}
                                value={message}
                            />
                        </Box>
                        <Box width={1 / 5} mt={18}>
                            <Button color='grey' bg='black'>
                                Submit
                        </Button>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        )
    }
}

export default connect(null, { addLead })(Form)
