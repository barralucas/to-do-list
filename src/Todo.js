import React from 'react';
import './Todo.css'

function Todo() {

    return (
        <div className="container">
            <h1>To do</h1>
            <form>
                <input type="text"></input>
                <button>add</button>
            </form>

            <ul>
                <li>item 1</li>
            </ul>
        </div>
    );


}


export default Todo;