import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export default function Login() {
    const [data, setDate] = useState({
        email: '',
        password: ''
    })

    const handleLogin = event => {
        event.preventDefault()
        console.log(data)
    }

    return ( 
        <Form onSubmit={handleLogin}>
            <Form.Group className='mb-3'>
                <Form.Label>
                    Email address
                </Form.Label>
                <Form.Control
                    onChange={(event) => {setDate({...data, email: event.target.value})}}
                    />

            </Form.Group>
        </Form>
    )
}