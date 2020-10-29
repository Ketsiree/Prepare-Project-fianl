import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card,CardImg, CardTitle, CardText,CardImgOverlay } from 'reactstrap';
import './Hip.css';
import ArmForm from './ArmForm';

const Hip = () => {
    return (
        <div>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
            </style>
            <div className="myStyleThurs">
                <br />
            <h1>Hip Workout</h1>
            <br />
            <br />
            </div>
            <br />
            <br />
            <br />

            <div className="myVi">
            <br />

            <h1>ท่ากายภาพสะโพก</h1>
            <br />
            <h2>ท่าที่ 1 งอ-เหยียดข้อสะโพก</h2>
            <br />
            </div>

            <div className="myVi4">
            <br />
            <iframe width="650" height="450" src="https://www.youtube.com/embed/ZVxif3DHOWI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <br />
            <br />
            <div className="myVi">
            <span align="center" class="border border-warning"><h5>ยกขาขึ้นเเล้ววางตั้งไขว้กับขาอีกข้าง</h5>
            <h5>ค่อยๆกดน้ำหนักลงจนตึง จึงคลายออก ทำด้านละ 10 ครั้ง</h5>
            </span>
            <br />
            </div>

            <br />
            <br />
            <div className="myVi">
            <h1>------------------------------------------------------------</h1>
            <br />
            <br />
            <h2>ท่าที่ 2 งอ-เหยียดข้อสะโพก</h2>
            <br />
            </div>

            <div className="myVi4">
            <br />
            <iframe width="650" height="450" src="https://www.youtube.com/embed/l24LaAFFYtg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <br />
            <br />
            <div className="myVi">
            <span align="center" class="border border-warning"><h5>จับบริเวณข้อเท้า และ ข้อเข่าด้านล่าง เเล้วยกขาขึ้นเป็นมุมฉาก ทำข้างละ 10 ครั้ง</h5>
            </span>
            <br />
            </div>

            <br />
            <br />
            <div className="myVi">
            <h1>------------------------------------------------------------</h1>
            <br />
            <br />
            <h2>ท่าที่ 3 กาง-หุบข้อสะโพก</h2>
            <br />
            </div>

            <div className="myVi5">
            <br />
            <iframe width="650" height="450" src="https://www.youtube.com/embed/OeMy1CaJU3Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <br />
            <br />
            <div className="myVi">
            <span align="center" class="border border-primary"><h5>จับบริเวณข้อเท้า และข้อเข่า ยกขาขึ้นเล็กน้อย เเล้วกางออกด้านข้าง 45 องศาเเล้วหุบเข้า ข้างละ 10 ครั้ง</h5>
            </span>
            <br />
            </div>
            <br />
            <br />

            <div className="myVi">
            <h1>------------------------------------------------------------</h1>
            <br />
            <br />
            <h2>ประเมินการกายภาพ</h2>
            <br />
            </div>

            <div>
                <ArmForm />
            </div>

            <div>
            <Card className="li4">
            <CardImg style={{ width:1900,height:270}} src="https://www.solidbackgrounds.com/images/2560x1440/2560x1440-orange-web-solid-color-background.jpg" alt="Card image" />
                <CardImgOverlay>
                <CardTitle><h1>**ทำ 3 เซต เซตละ 10 ครั้ง**</h1></CardTitle>
                    <CardText>
                        <h2>หรือทำจนกว่าจะเหนื่อย</h2>
                    </CardText>
                    <CardText>
                        <h2>Keep Practicing</h2>
                    </CardText>
                </CardImgOverlay>
            </Card>

            </div>
        </div>
    );
}

export default Hip;
