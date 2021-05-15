import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import { Container, Row, Col, FormControl } from 'react-bootstrap'
import {useState} from 'react'

const Input = ({taskid , subtaskCnt,onSubmit}) => {

    const [val1, setval1] = useState("")
    const [val2, setval2] = useState("")
    const [val3, setval3] = useState("")
    const [val4, setval4] = useState("")
    const [val5, setval5] = useState("")
    const [val6, setval6] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(taskid,val1,val2,val3,val4,val5,val6)
        setval1("")
        setval2("")
        setval3("")
        setval4("")
        setval5("")
        setval6("")
        setval6("")
    };

   

    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Row>
                <Col sm="2">
                    <InputGroup className="mb-1">
                        <InputGroup.Prepend>
                        <InputGroup.Text>{1}</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="text"
                            value={val1}
                            onChange={(e)=>setval1(e.target.value)}
                            />
                    </InputGroup>
                </Col>
                {subtaskCnt>=2&&(
                <Col sm="2">
                    <InputGroup className="mb-1">
                        <InputGroup.Prepend>
                        <InputGroup.Text>{2}</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="text"
                            value={val2}
                            onChange={(e)=>setval2(e.target.value)}
                            />
                    </InputGroup>
                </Col>
                )}
                {subtaskCnt>=3&&(
                <Col sm="2">
                    <InputGroup className="mb-1">
                        <InputGroup.Prepend>
                        <InputGroup.Text>{3}</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="text"
                            value={val3}
                            onChange={(e)=>setval3(e.target.value)}
                            />
                    </InputGroup>
                </Col>
                )}
                {subtaskCnt>=4&&(

                <Col sm="2">
                    <InputGroup className="mb-1">
                        <InputGroup.Prepend>
                        <InputGroup.Text>{4}</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="text"
                            value={val4}
                            onChange={(e)=>setval4(e.target.value)}
                            />
                    </InputGroup>
                </Col>
                )}
                {subtaskCnt>=5&&(
                <Col sm="2">
                    <InputGroup className="mb-1">
                        <InputGroup.Prepend>
                        <InputGroup.Text>{5}</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="text"
                            value={val5}
                            onChange={(e)=>setval5(e.target.value)}
                            />
                    </InputGroup>
                </Col>
                )}
                {subtaskCnt>=6&&(
                <Col sm="2">
                    <InputGroup className="mb-1">
                        <InputGroup.Prepend>
                        <InputGroup.Text>{6}</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="text"
                            value={val6}
                            onChange={(e)=>setval6(e.target.value)}
                            />
                    </InputGroup>
                </Col>
                )}
                
                <Col sm={10} >
                
                </Col>
            </Form.Row>
            <Button type="submit" className="mb-2" variant="outline-primary"> 
                    Submit
                </Button>
        </Form>
        </>
    )
}

export default Input
