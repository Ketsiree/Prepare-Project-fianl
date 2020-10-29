// import React, { useState, useEffect } from 'react'
// import Show from './Show';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form,Card } from 'react-bootstrap';
// import { Button} from 'react-bootstrap';
// import 'firebase/auth';
// import 'firebase/database';
// import "firebase/firestore";
// import { firestore } from '../index'

// function App() {
// const [task1, setTask1] = useState([
//     {
//         id: 1,
//         name: "Peempos",
//         lastname: "Sinla",
//         date: "19-10-1996",
//         note: "hello"
//     },
//     {
//         id: 2,
//         name: "Ketsiree",
//         lastname: "Tantiwit",
//         date: "24-04-1996",
//         note: "Hi"
//     }
// ]);

// const [name, setName] = useState('');
// const [lastname, setLastname] = useState('');
// const [date, setDate] = useState('');
// const [note, setNote] = useState('');


// useEffect(() => {
//     retriverData()
// }, [])

// const retriverData = () => {
//     firestore.collection("task").onSnapshot(snapshot => {
//         console.log(snapshot.docs)
//         let mytask = snapshot.docs.map(d => {
//             const { id, name, lastname, date, note} = d.data()
//             return { id, name, lastname, date, note}
//         })
//         setTask1(mytask)
//     })
// }

// const addTask = () => {
//     let id = (task1.length === 0) ? 1 : task1[task1.length - 1].id + 1
//     firestore.collection("task").doc(id + ' ').set({ id, name, lastname, date, note})
// }


// const renderTask = () => {
//     if (task1 && task1.length) {
//         return task1.map((text, index) => {
//             return (
//                 <Show key={index} task={text} deleteTask={deleteTask} editTask={editTask} />
//                     )
//             }
//         )

//     }
//     else
//         return (<ll>No task</ll>)
//  }

// const editTask = (id) => {
//     firestore.collection("task").doc(id + ' ').set({ id, name, lastname, date,note})
// }
// const deleteTask = (id) => {
//     firestore.collection("task").doc(id + ' ').delete()
// }

// return (
//     <div>
//         <style>
//         @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
//         </style>
//     <div className="Book">
//     <br />
//     <div align="center"><h1>Profile</h1></div>

//     <br />
//     <br />
//     </div>
//         <div className="li1">
//         <Card style={{width: '30rem' }}>
//             <Card.Body>
//                 <Card.Title>Pofile</Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
//         <Form>
//             <Form.Group controlId="name">
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control  placeholder="Enter Name" input type="text" onChange={(e) => setName(e.target.value)} />
//             </Form.Group>

//             <Form.Group controlId="lastname">
//                 <Form.Label>Lastname</Form.Label>
//                 <Form.Control  placeholder="Enter Lastname" input type="text" onChange={(e) => setLastname(e.target.value)}/>
//             </Form.Group>

//             <Form.Group controlId="date">
//                 <Form.Label>Date of Birth</Form.Label>
//                 <Form.Control placeholder="19-10-1996" input type="text" onChange={(e) => setDate(e.target.value)} />
//             </Form.Group>

//             <Form.Group controlId="exampleForm.ControlTextarea1">
//             <Form.Label>Take note</Form.Label>
//             <Form.Control  as="note" rows="3" placeholder="Today,I feel so good" input type="text" onChange={(e) => setNote(e.target.value)} />
//             </Form.Group>
//             {/* <Form.Group controlId="note">
//                 <Form.Label>Note</Form.Label>
//                 <Form.Control placeholder="Today,I feel so good" input type="text" onChange={(e) => setNote(e.target.value)}/>
//             </Form.Group> */}

//                     <Button variant="primary" type="Note" onClick={addTask}  >
//                     Enter
//                     </Button>
//             </Form>
//             </Card.Body>
//         </Card>
//     </div>
//         <br />
//         <br />
//         <div className="d-flex justify-content-center">
//             {
//                 renderTask()
//             }
//         </div>
    
//     </div>

//     );
// }
// export default App;