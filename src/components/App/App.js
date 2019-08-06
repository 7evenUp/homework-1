import React from 'react'

const App = () => {
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

export default App