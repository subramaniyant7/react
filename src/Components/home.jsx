import { useState } from "react";


const Home = () => {

    const [text,setText] = useState('');
    const [list,setList] = useState([]);

    const addList = () => {
        setList([...list,{'todo':text}]);
        setText('');
    }


    return (
        <div>
            Add Todo 
            <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
            <button type="button" onClick={() => addList() } >Click</button>
            <hr/>
            <div>

                Todo list

                <ul>
                    {
                        list.length > 0 ?
                            list.map((todo,index) => <li key={index}>{todo.todo}</li> ) 
                            : 'No todo list'
                    }
                </ul>
            </div>
        </div>
    );
}

export default Home;