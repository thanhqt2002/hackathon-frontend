import Task from './Task'
import Input from './Input'

import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

import {Row, Col} from 'react-bootstrap'

const Body = ({tasks , onSubmit}) => {
    return (
        <Tab.Container className="bg-info" id="left-tabs" defaultActiveKey="tab0">
      <Row>
        <Col sm={2}>
          <Nav justify fill variant="pills" className="flex-column">
            {tasks.map((task)=>(
              <Nav.Item key={task.id}>
                <Nav.Link eventKey={"tab"+task.id}> {task.title}  </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            {tasks.map((task)=>(
              <Tab.Pane key={tasks.id} eventKey={"tab"+task.id}>
                  <Task  onSubmit={onSubmit} task={task}/>
                  <Col sm={1}/>
                  <Input taskid={task.id} subtaskCnt={task.subtasks} onSubmit={onSubmit}/>
                </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    )
}

export default Body
