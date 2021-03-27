import React from 'react';





function DoneImg(props) {

    if (props.done) {
        return (<img alt="done" src="./assets/done.png"></img>)
    } else {
        return (<img alt="in-progress" src="./assets/loading.png"></img>)
    }

}





function List(props) {

    return (
        <ul>
            {props.items.map(item => <li className={item.done ? "done" : ""} key={item.id}>
                {item.text}
                <button onClick={() => { props.onDone(item) }}>
                    <DoneImg done={item.done}></DoneImg>
                </button>
                <button onClick={() => { props.onItemDeleted(item) }}>
                    <img alt="apagar" src="./public/assets/lixeira.png"></img>
                </button>
            </li>)}
        </ul>
    );
}


export default List;