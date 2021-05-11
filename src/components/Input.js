import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import { Container, Row, Col, FormControl } from 'react-bootstrap'

const Input = ({subtaskCnt}) => {
    return (
        <>
        <Form>
            <Form.Row>

                <Col xs="auto">
                <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                    <InputGroup.Text>1</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control id="inlineFormInputGroup" placeholder="" />
                </InputGroup>
                </Col>
                
                <Col xs="auto">
                <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                    <InputGroup.Text>2</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control id="inlineFormInputGroup" placeholder="" />
                </InputGroup>
                </Col>

                <Col xs="auto">
                <Button className="mb-2" variant="outline-primary"> 
                    Submit
                </Button>
                </Col>
            </Form.Row>
        </Form>
        </>
    )
}

export default Input
