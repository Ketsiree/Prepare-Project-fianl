import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card,CardImg, CardTitle, CardText,CardImgOverlay } from 'reactstrap';
import './Feet.css';
import ArmForm from './ArmForm';

const Feet = () => {
    return (
        <div>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
            </style>
            <div className="myStyleF">
                <br />
            <h1>Feet Workout</h1>
            <br />
            <br />
            </div>
            <br />
            <br />

            <div className="myVi">
            <br />
            <h1>ท่ากายภาพขาและเท้า</h1>
            <br />
            <h2>ท่าที่ 1 กระดกข้อเท้าขึ้น-ลง / ซ้าย-ขวา</h2>
            <br />
            </div>

            <div className="myVi5">
            <br />
            <iframe width="650" height="450" src="https://www.youtube.com/embed/hYWR6d7IwJE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <br />
            <br />
            <div className="myVi">
            <span align="center" class="border border-primary"><h5>ช้อนส้นเท้า และจับบริเวณหน้าแข้ง ยกส้นเท้าขึ้นจนรู้สึกตึงค้างไว้ 10 วินาที เเล้วจึงเอาลง ทำข้างละ 10 ครั้ง</h5>
            <h5>หลังจากนั้นบิดข้อเท้าไปทางซ้าย และขวาสลับกัน 10 ครั้ง</h5>
            </span>

            <br />
            </div>

            <br />
            <br />
            <div className="myVi">
            <h1>------------------------------------------------------------</h1>
            <br />
            <br />
            <h2>ท่าที่ 2 กระดกนิ้วเท้าขึ้น-ลง/กาง-หุบ</h2>
            <br />
            </div>

            <div className="myVi1">
            <br />
            <iframe width="650" height="450" src="https://www.youtube.com/embed/SkyxqArxaq8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <br />
            <br />
            <div className="myVi">
            <span align="center" class="border border-primary"><h5>กดปลายนิ้วเท้าขึ้น-ลง สลับกัน 10 ครั้ง</h5>
            <h5>กางนิ้วเท้าให้รู้สึกตึงเเล้วหุบ ข้างละ 10 ครั้ง</h5>
            </span>

            <br />
            </div>

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
            <Card className="li5">
            <CardImg style={{ width:1900,height:270}} src="https://wallpapercave.com/wp/wp2912335.jpg" alt="Card image" />
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

export default Feet;
