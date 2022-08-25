addPressent(present) {
    this.setState((preState) => {
        //copy the presents of the old state
        const newPresents = [...preState.presents];
        // Add presents to newPresents
        newPresents.pusg(present);
        // Create new State
        const newState = { ...preState, presents: newPresents };
        return newState
    })
}

addWord(word) {
    this.setState({
        //...this.state,
        // in this case we can the the double copy with explicit doing cos the system do the fisrt copy for us, so we can omit (...this.state,)
        favoriteWords: [...this.state.favoriteWords].concat([word])
    });
}