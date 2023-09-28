
// Before version 16.8, react used CLASS COMPONENTS. There were no hooks.

// 1)import React 
// 2)define class name
// 3) give it constructor and render methods
// 4) return statement inside render method
// 5) YOU MUST CALL SUPER inside constructor : super();
// 6) this.state = {} ---> where you define your attributes
// 7) has built in life cycle methods 
// EX : componentDidMount() method : Fires only once
// EX : componentDidUpdate() method 
// EX : componentWillUnmount() method : clears interval - deletes local storage
// 8) to call your attributes --> {this.state.attr_name}
// 9) states are immutable .. to change them -->
this.setState({});
// 10)

import React, { useState } from 'react';

class Home extends React.Component {

    constructor(){
        super();
        this.state = {
            name: "Mariam",
            age: 23

        }
    }

    componentDidMount() {
        // only once
        // api calls
        console.log('Home component mounted');
    }

    componentDidUpdate() {
      
        console.log('Home component updated');
    }

    componentWillUnmount() {
    //    clear interval
    // delete local storage
        console.log('Home component will unmount');
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <h2>Welcome {this.state.name}</h2>
            </div>
        );
        }
}

export default Home;