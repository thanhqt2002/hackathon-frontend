import Task from './Task'
import Input from './Input'

import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

import {Row, Col,Jumbotron} from 'react-bootstrap'

import userService from './userService'
import { useState , useEffect} from 'react'
const Body = () => {
    const [loading,setLoading] = useState(true)
    const [tasks,settasks] = useState()
    useEffect(()=> {
        if(loading === true){
            userService.getTasks().then((tasks)=>{
            settasks(tasks)
            setLoading(false)
            console.log(tasks)
          })
      }
    });
    if(loading === true)return <div/>
    return (
        <Tab.Container className="bg-info" id="left-tabs" defaultActiveKey={tasks.length > 0 ? ('tab' + tasks[0].id) : ''}>
          <Row>
            <Col md='auto'>
            <Jumbotron className="bg-light  ">
              <Nav justify fill variant="pills" className="flex-column">
                {tasks.map((task)=>(
                  <Nav.Item key={task.id}>
                  <Nav.Link key={task.id} eventKey={"tab"+task.id}> {task.shortname}  </Nav.Link>
                </Nav.Item>))}
              </Nav>
              </Jumbotron>
            </Col>
            <Col md={11}>
              <Tab.Content>
                {tasks.map((task)=>(
                  <Tab.Pane key={task.id} eventKey={"tab"+task.id}>
                      <Task task={task}/>
                      <Col sm={1}/>
                      <Input key={task.id} taskid={task.id} taskname={task.shortname} subtaskCnt={task.subtasks}/>
                    </Tab.Pane>
                ))}
              </Tab.Content>
              
            </Col>
          </Row>
      </Tab.Container>
    )
}

export default Body
