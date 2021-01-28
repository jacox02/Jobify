import React from "react";
import { Form, Button, Navbar, FormControl } from "react-bootstrap";
export default function Jobs(props){
    return(
        
  <Navbar  variant="dark">
    <Form inline>
      <FormControl  type="text" 
                    placeholder="Search" 
                    className="mr-sm-2" />
      <Button 
      variant="outline-primary">Search</Button>
    </Form>
    <Button variant="outline-success">Success</Button>
  </Navbar>

    )
}