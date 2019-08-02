import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return React.createElement(
            'div',
            {className: "App"},
            React.createElement(
                'p',
                {className: "description"},
                'Миру-мир, студентам - beer.'
            )
        )
    }
}