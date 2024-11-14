import { useState } from "react"
export const Input = ({taskList, setTaskList}) => {
    const [input, setInput] = useState("")
    const AddTodo = (e) => {
        e.preventDefault()
        setTaskList([...taskList, input])
        setInput("")
    }
    return (
      <>
        <div className="bg-yellow-950 w-[300px] h-[120px] mx-auto mt-[100px] rounded-2xl mb-[40px] ">
          <div className="pl-[80px] font-bold text-[30px] pb-[17px] ">TodList</div>
          <div className="flex justify-between">
            <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-red-900 ml-2 pl-1 w-[220px] rounded-xl " placeholder="Add a TodoList" />
            <button
            onClick={AddTodo}
            className="mr-2 bg-red-900 rounded-xl cursor-pointer px-3 pb-1 pt-0.5">Add</button>
          </div>
  
        </div>
      </>
      
  
    )
}