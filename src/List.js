import React from 'react';


function List(props) {






    return (
        <ul>
            {props.items.map(item => <li key={item.id}>
                {item.text}
                <button onClick={() => { props.onItemDeleted(item) }}>
                    <img alt="apagar" src="./public/assets/lixeira.png"></img>
                </button>
            </li>)}
        </ul>
    );
}


export default List;