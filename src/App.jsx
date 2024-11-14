import { useState } from "react"
import { Input } from "./Input"
import { Board } from "./Board"


function App() {
  const [taskList, setTaskList] = useState([])
  return (
    <>
    <Input taskList={taskList} setTaskList={setTaskList} />
    <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12 mx-2">
      {taskList.map((task, index) => (
        <Board
        key = {index}
        index = {index}
        task = {task}
        taskList = {taskList}
        setTaskList = {setTaskList}
        />
      ))}
    </div>
    </>
  )
}
export default App


