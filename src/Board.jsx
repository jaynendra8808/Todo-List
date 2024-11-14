export const Board = ({task, index, taskList, setTaskList}) => {
    const DeleteButton = () => {
        let removeIndex = taskList.indexOf(task)
        taskList.splice(removeIndex, 1)
        setTaskList(((currentTask) => currentTask.filter(Todo => index === removeIndex)))
    }
    return (
        <>
        <div className="bg-blue-400 max-w-md rounded-xl flex flex-col items-center justify-center border text-center text-lg pt-2 pb-4 px-4 ">
            <p>{task} </p>
            <button
            onClick={DeleteButton}
            className="bg-red-700 text-white rounded-xl px-2 pb-1 pt-0.5 mt-4">Delete</button>
        </div>
        </>
    )
}