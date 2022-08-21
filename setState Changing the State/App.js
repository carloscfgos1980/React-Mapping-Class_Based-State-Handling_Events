import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    // We need to bind the handleClick function, so we do something like above:
    // this.handleClick = this.handleClick.bind(this)
    
    
    // prevState is a conventional parameter to identify the previos value
    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 3
            }
        })
    }
    // When we add eventlistner in a class, we need to type this, like this:
    // onClick={this.handleClick
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
            </div>
        )
    }
}

export default App
