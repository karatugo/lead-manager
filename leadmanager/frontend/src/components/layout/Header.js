import React, { Component } from 'react'
import {
    Box,
    Flex,
    Text
} from 'rebass'

export class Header extends Component {
    render() {
        return (
            <div>
                <Flex
                    px={2}
                    color='white'
                    bg='black'
                    alignItems='center'>
                    <Text p={2} fontWeight='bold'>Lead Manager</Text>
                    <Box mx='auto' />
                </Flex>
            </div>
        )
    }
}

export default Header
