import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Card} from 'react-bootstrap';
import './Task.css';
import Alert from 'react-bootstrap/Alert';

export default props => {
    const { task, editTask, deleteTask  } = props
    const { id,
        name,
        lastname,
        date,
        age,} = task
    return (
        <div className="li">
            <Card style={{width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Profile</Card.Title>
                    <Alert variant="success">
                        <Alert.Heading>Hey! Nice to see you</Alert.Heading>
                        <Card.Text>
                            Welcome {name}
                        </Card.Text>
                    <Button variant="outline-danger" onClick={() => deleteTask(id)}>Delete</Button>
                    <Button variant="outline-success" onClick={() => editTask(id)}>Update</Button>
                    </Alert>
                </Card.Body>
            </Card>
        </div>
    )
}





