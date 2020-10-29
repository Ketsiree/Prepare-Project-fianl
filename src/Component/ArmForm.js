import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { firestore } from '../index'
// import Dropdown from 'react-bootstrap/Dropdown'
// import DropdownButton from 'react-bootstrap/DropdownButton'

const ArmForm = props => {

    const [armForms, setArmForm] = useState([{}])
    const [id, setId] = useState(0)
    const [date, setDate] = useState('')
    const [phy, setPhy] = useState('')
    const [comment, setComment] = useState('')
    const [values, setValues] = useState('')

    useEffect(() => {
        retriveData()
    }, [])


    const retriveData = () => {

        firestore.collection("armForms").onSnapshot(snapshot => {

            console.log(snapshot);

            let myArmForm = snapshot.docs.map(d => {
                const { id, date,phy, comment, values } = d.data()
                console.log(id, date,phy, comment, values)
                return { id, date,phy, comment, values }
            })
            setArmForm(myArmForm)
        })
    }


    const addarmForm = () => {

        let id = (armForms.length === 0) ? 1 : armForms[armForms.length - 1].id + 1
        firestore.collection("armForms").doc(id + '').set({ id, date,phy, comment, values })
        alert("ประเมินเสร็จสิ้น")
    }
    return (
        <div>
            
            <Form className="myVi">
                <Form.Group as={Row} controlId="date">
                    <Form.Label column sm={5}>
                        วันที่ :</Form.Label>
                    <Col sm={7}>
                        <Form.Control type="text" name="date" placeholder="ใส่วันที่ทำกายภาพ" onChange={(e) => setDate(e.target.value)} id="date" />
                    </Col>
                </Form.Group>
                {/* <DropdownButton id="dropdown-basic-button" title="ท่ากายภาพ">
                <Dropdown.Item href="#/action-1">ท่าที่ 1 ยกแขนขึ้นลง</Dropdown.Item>
                <Dropdown.Item href="#/action-2">ท่าที่ 2 กางหุบแขน</Dropdown.Item>
                <Dropdown.Item href="#/action-3">ท่าที่ 3 หมุนข้อไหล่เข้า-ออก</Dropdown.Item>
                <Dropdown.Item href="#/action-3">ท่าที่ 4 งอเหยียดข้อศอก</Dropdown.Item>
                <Dropdown.Item href="#/action-3">ท่าที่ 5 กระดกข้อมือขึ้นลง/ซ้ายขวา</Dropdown.Item>
                <Dropdown.Item href="#/action-3">ท่าที่ 6 งอข้อนิ้วมือ</Dropdown.Item>
                <Dropdown.Item href="#/action-3">ท่าที่ 7 กางนิ้วมือ</Dropdown.Item>
                </DropdownButton> */}

                <fieldset>
                    <Form.Group as={Row} className="text-center">
                        <Form.Label as="legend" column sm={5}>
                            ท่ากายภาพ : </Form.Label>
                        <Col sm={7}>
                            <Form.Control type="text" name="phy" placeholder="ใส่ชื่อท่ากายภาพ" onChange={(e) => setPhy(e.target.value)} id="phy" />
                        </Col>
                    </Form.Group>
                </fieldset>
                <fieldset>
                    <Form.Group as={Row} className="text-center">
                        <Form.Label as="legend" column sm={5}>
                            ประเมินการกายภาพ : </Form.Label>
                        <Col sm={7}>
                            <Form.Control type="text" name="values" placeholder="ผลการประเมิน" onChange={(e) => setValues(e.target.value)} id="values" />
                        </Col>
                    </Form.Group>
                </fieldset>
                <Form.Group as={Row} controlId="text">
                    <Form.Label column sm={5}>
                            ความคิดเห็นเพิ่มเติม : </Form.Label>
                    <Col sm={7}>
                        <Form.Control type="text" name="comment" placeholder="ความคิดเห็นเพิ่มเติม" onChange={(e) => setComment(e.target.value)} id="comment" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col>
                        <Button type="submit" onClick={addarmForm}>ส่งแบบประเมิน</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div >
    )
}
export default ArmForm