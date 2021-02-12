import React from 'react'
import {Form, Button} from "react-bootstrap";

export default function PostulateComponent() {
    return (
        <Form>
            <Form.Gruop>
                <Form.Label>Email</Form.Label>
                <Form.Control type="text"/>
            </Form.Gruop>
            <Form.Gruop>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text"/>
            </Form.Gruop>
            <Form.Gruop>
                <Form.Label>why do you deserve the job?</Form.Label>
                <Form.Control as="textarea" rows={3}/>
            </Form.Gruop>
        </Form>
    )
}
