import { Jumbotron } from 'react-bootstrap'
import Katexline from './Katexline'

const Task = ({task})=>{
    return (
        <Jumbotron className="bg-light  ">
        <div id={"P" + (task.id + 1)}>
            <div className="fw-bold lead text-center display-5">{task.title} <br/> </div>
            <Katexline taskcontent={task.content}/>
        </div>
        <br/>
        
        </Jumbotron>
    )
}

export default Task