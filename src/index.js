import React from "react";
import ReactDOM from 'react-dom';
import './App.css';

const App = () => {
    return(
        <div>
            <h1>Hello World!</h1>
            <label><h2>Select a class</h2></label><br></br>
                <div className={"dropdown"}>
                    <button className={"dropbtn"}>Dropdown</button>
                    <div className={"dropdown-content"}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>

        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)