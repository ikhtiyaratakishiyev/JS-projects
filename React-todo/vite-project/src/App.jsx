import React,{useState} from 'react'



import './style.scss'


export default function App() {

  const [input,setInput] = useState("")
  const [tasks,setTasks]=useState([
    {
      name: "Task1",
      id: '1'
    },
    {
      name: "Task2",
      id:'2'
    },
    {
      name: "Task3",
      id:'3'
    }
  ]);

  const AddInput=()=> {

if(input ===''){
  alert( 'Please enter someshing in input');
  return;
};

const newTask={
  name: input,
};
const newTasks=[...tasks,newTask]
 setTasks(newTasks);
 setInput('')
  


    
  }
  return (
    <div>
      <>
      <ul>
            {
              tasks.map(task=>{
                <li>{task.name}</li>
              })
            }
          </ul>
      
      </>
  
          
 <div className='container'>
      
      <div className='todo-left'>

         <div className='inpt'>
        
         <input value={input} onChange=
         {(e)=>setInput(e.target.value)} className='input' type="text" placeholder='Task to be done...'/> 
         <button onClick={AddInput}>Add</button> 
             </div>

            <div className='todos'>
            <ul>
              {/* <li>Prepare the manthly report <button>x</button> </li> */}
            </ul>
           </div>

          
      </div>

      <div className='todo-right'>
            <h1>TO DO LIST </h1>
           </div>


    </div>
    </div>
   
  )
}

