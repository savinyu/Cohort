import { useEffect, useState } from "react"
import { Todos } from './components/Todos'
import './App.css'

function App() {

  // const [todos,setTodos]= useState([]);
  const [Id,setId] = useState(1);
  
  
  return (
    <>
      <button onClick={()=>setId(1)}>1</button>
      <button onClick={()=>setId(2)}>2</button>
      <button onClick={()=>setId(3)}>3</button>
      <button onClick={()=>setId(4)}>4</button>
      <div><TodoId id={Id}/></div>
    </>
  )
}
function TodoId({id}){
  const [todos,setTodos]= useState([]);

  useEffect(()=>{
    fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then( async(res)=>{
        const json = await res.json();
        setTodos(json.todo);
      })
  },[id])
  return (
    <>
      <div>
        <h1>{todos.title}</h1>
        {todos.description}<br/>
        {`todo is completed ${todos.completed}`}
      </div>

    </>
  )
}

export default App
