import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { firestore } from '../index'


export default props => {

    const { armForms } = props
    const { id, date,phy, comment, values } = armForms


    //กำหนดรูปแบบการแสดงผล
    return (
        <li>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>วันที่ทำกายภาพ</th>
                            <th>ท่ากายภาพ</th>
                            <th>ผลการประเมินการทำกายภาพ</th>
                            <th>ความคิดเห็นเพิ่มเติม</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{date}</td>
                            <td>{phy}</td>
                            <td>{values}</td>
                            <td>{comment}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </li>
    )
    


}
