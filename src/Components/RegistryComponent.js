import { Button } from 'bootstrap';
import React from 'react'
import {Form, Button, Col, Row} from "react-bootstrap";
export default function RegistryComponent() {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Entity Type</Form.Label>
                <Form.Control as="select">
                    <option>Empresa</option>
                    <option>Independiente</option>
                </Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Correo Electronico</Form.Label>
                 <Form.Control type="text"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>

            <Form.Group as={Row}>
                <Col>
                <Button variant= "" block>Registrar </Button>
                </Col>
            </Form.Group>
            
        </Form>
    )
}
