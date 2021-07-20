import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import {Col} from 'react-bootstrap'
import {useState} from 'react'
import { useHistory } from "react-router-dom";
import AuthService from './AuthService'
const Login = () => {
    const history = useHistory();
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [message, setmessage] = useState("")
    const [loading , setloading] = useState(false)
    
    const handleSubmit = async(event) => {
        event.preventDefault() 
        setloading(true)
        const res = await AuthService.login({username,password})
        setloading(false)
        if(res)history.push('/')
        else setmessage('invalid username/password')
    };
    
    return (
        <div>
        <Form onSubmit={handleSubmit}>
                <Col sm="2">
                    <InputGroup className="mb-1">
                        <InputGroup.Prepend>
                        <InputGroup.Text>{"username"}</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="text"
                            value={username}
                            onChange={(e)=>setusername(e.target.value)}
                            />
                    </InputGroup>
                </Col>
                <Col sm="2">
                    <InputGroup className="mb-1">
                        <InputGroup.Prepend>
                        <InputGroup.Text>{"password"}</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e)=>setpassword(e.target.value)}
                            />
                    </InputGroup>
                </Col>
            <div>{message}</div>

            <Button type="submit" className="mb-2" variant="outline-primary" disabled={loading}> 
                    Submit
                </Button>
        </Form>
        </div>
    )
}

export default Login
