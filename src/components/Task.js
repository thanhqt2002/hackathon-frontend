import Button from 'react-bootstrap/Button'
import Input from './Input'

const Task = ({task})=>{
    return (
        <>
        <div id={"P" + (task.id + 1)} className="container">
            <div className="row">
            <p className="lead fw-bold">{task.title}{ }</p>
            <p className="mb-4">{task.content}</p>
            </div>
            <Input subtaskCnt={task.subtasks}/>
        </div>
        <br/>
        
        </>
    )
}

export default Task