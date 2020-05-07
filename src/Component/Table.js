import React, { useState, useEffect } from 'react'
import Task from './Task';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Card } from 'react-bootstrap';
import { Button} from 'react-bootstrap';
import 'firebase/auth';
import 'firebase/database';
import "firebase/firestore";
import { firestore } from '../index'

function App() {
const [task, setTask] = useState([
    {
        id: 1,
        name: "Peempos",
        lastname: "Sinla",
        date: "19-10-1996",
        age: "24"
    },
    {
        id: 2,
        name: "Ketsiree",
        lastname: "Tantiwit",
        date: "24-04-1996",
        age: "24"
    }
]);

const [name, setName] = useState('');
const [lastname, setLastname] = useState('');
const [date, setDate] = useState('');
const [age, setAge] = useState('');
const [arms, setArms] = useState('');
const [hip, setHip] = useState('');
const [feet, setFeet] = useState('');
const [twelve, setTwelve] = useState('');
const [cardiac, setCardiac] = useState('');
const [lung, setLung] = useState('');

useEffect(() => {
    retriverData()
}, [])

const retriverData = () => {
    firestore.collection("task").onSnapshot(snapshot => {
        console.log(snapshot.docs)
        let mytask = snapshot.docs.map(d => {
            const { id, name, lastname, date, age, arms, hip, feet, twelve, cardiac, lung} = d.data()
            return { id, name, lastname, date, age, arms, hip, feet, twelve, cardiac, lung }
        })
        setTask(mytask)
    })
}

const addTask = () => {
    let id = (task.length === 0) ? 1 : task[task.length - 1].id + 1
    firestore.collection("task").doc(id + ' ').set({ id, name, lastname, date, age})
}


const renderTask = () => {
    if (task && task.length) {
        return task.map((text, index) => {
            return (
                <Task key={index} task={text} deleteTask={deleteTask} editTask={editTask} />
                    )
            }
        )

    }
    else
        return (<ll>No task</ll>)
 }

const editTask = (id) => {
    firestore.collection("task").doc(id + ' ').set({ id, name, lastname, date,age,arms, hip, feet, twelve,cardiac,lung})
}
const deleteTask = (id) => {
    firestore.collection("task").doc(id + ' ').delete()
}

return (
    <div>
         <style>
         @import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap');
        </style>
    <div className="Book">
    <br />
    <div align="center"><h1>Profile</h1></div>

    <br />
    <br />
    </div>
        <div className="li1">
        <Card style={{width: '30rem' }}>
            <Card.Body>
                <Card.Title>Pofile</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Form>
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control  placeholder="Enter Name" input type="text" onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="lastname">
                <Form.Label>Lastname</Form.Label>
                <Form.Control  placeholder="Enter Lastname" input type="text" onChange={(e) => setLastname(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="date">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control placeholder="19-10-1996" input type="text" onChange={(e) => setDate(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control placeholder="24 year" input type="text" onChange={(e) => setAge(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" value="Arms" label="Arms" onClick={(e) => setArms(e.target.value) } />
                <Form.Check type="checkbox" value="Hip" label="Hip" onClick={(e) => setHip(e.target.value)} />
                <Form.Check type="checkbox" value="Feet" label="Feet" onClick={(e) => setFeet(e.target.value)} />
                <Form.Check type="checkbox" value="twelve" label="12 Standard" onClick={(e) => setTwelve(e.target.value)} />
                <Form.Check type="checkbox" value="cardiac" label="Cardiac" onClick={(e) => setCardiac(e.target.value)} />
                <Form.Check type="checkbox" value="lung" label="Pulmonary" onClick={(e) => setLung(e.target.value)} />
            
            </Form.Group>
                    <Button variant="primary" type="enter" onClick={addTask}  >
                    Enter
                    </Button>
            </Form>
            </Card.Body>
        </Card>
    </div>
        <br />
        <br />
        <div className="d-flex justify-content-center">
            {
                renderTask()
            }
        </div>
    
    </div>

    );
}
export default App;