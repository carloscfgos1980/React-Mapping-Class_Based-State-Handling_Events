import React from "react"

// https://scrimba.com/p/p4Mrt9/cQnMDHD

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: "Yes"
        }
    }
    // A boolean variable is true by default so we don't need this:
    //if (this.state.isLoggedIn === true) just declare the variable like this:
    // if (this.state.isLoggedIn) {
    render() {
        let wordDisplay
        if (this.state.isLoggedIn) {
            wordDisplay = "in"
        } else {
            wordDisplay = "out"
        }
        return (
            <div>
                <h1>You are currently logged {wordDisplay}</h1>
            </div>
        )
    }
}

export default App