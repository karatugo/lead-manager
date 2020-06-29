import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import Header from './layout/Header'
import Dashboard from './leads/Dashboard'

import {
    Box,
    Card,
    Image,
    Heading,
    Text,
    Flex,
    Link
} from 'rebass'



class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Dashboard />
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))


