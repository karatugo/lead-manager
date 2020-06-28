import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
    Box,
    Card,
    Image,
    Heading,
    Text,
    Flex
} from 'rebass'



class App extends Component {
    render() {
        return (
            <div>
                <Heading
                    fontSize={[5, 6, 7]}
                    color='primary'>
                    Hello
                    </Heading>
                <Flex>
                    <Box
                        p={3}
                        width={1 / 2}
                        color='white'
                        bg='primary'>
                        Flex
            </Box>
                    <Box
                        p={3}
                        width={1 / 2}
                        color='white'
                        bg='secondary'>
                        Box
            </Box>
                </Flex></div>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))


