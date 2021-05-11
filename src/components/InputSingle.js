import Form from 'react-bootstrap/Form'

const InputSingle = ({subtaskCnt}) => {
    return (
        <>
        <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
         <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        </>
    )
}

export default InputSingle
