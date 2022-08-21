import React from "react"

function handleClick() {
    console.log("I was clicked")
}

// https://reactjs.org/docs/events.html#supported-events


// addEventHandler is just like in JavaScript, using Camel notation. Ex: onClick, onMouseOve
// We dont need to grab the element to add the event. Just put ir next to the element we need to change, like inline styling.
function App() {
    return (
        <div>
            <img onMouseOver={() => console.log("Hovered!")} src="https://www.fillmurray.com/200/100" />
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default App
