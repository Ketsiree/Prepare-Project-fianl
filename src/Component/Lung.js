import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card,CardImg,CardTitle, CardText,CardImgOverlay} from 'reactstrap';
import './Lung.css';

const Lung = () => {
    return (
        <div>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
            </style>
            <div className="myStyleS">
                <br />
            <h1>Pulmonary Rehabilitation</h1>
            <br />
            <br />
            </div>
            <br />
            <br />
            <br />

            <div className="myVi">
            <br />

            <h1>ท่ากายภาพบริหารปอด</h1>
            <br />
            <h2>การกายภาพปอด</h2>
            <br />
            </div>

            <div className="myVi7">
            <br />
            <iframe width="650" height="450" src="https://www.youtube.com/embed/2qiKUvfGcEU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <br />
            <br />
            <div className="myVi">
            <span align="center" class="border border-danger"><h5>ข้อห้ามในการเข้าโปรแกรมฟื้นฟูสมรรถภาพปอด</h5> <br />	
            <h5>1.ผู้ป่วยมีโรคข้อที่รุนแรงจนเป็นอุปสรรคในการออกกำลังกาย</h5>	<br />	
            <h5>2.ผู้ป่วยที่มีโรคหัวใจร่วมด้วยและอาการยังไม่คงที่(unstable cardiac diseases)</h5>  <br />	
            <h5>3.ผู้ป่วยโรคหลอดเลือดใหญ่โป่งพอง (abdominal Aortic Aneurysm) ที่มีขนาดใหญ่กว่า 5.5 cm ที่ไม่สามารถผ่าตัดได้</h5><br />		
            <h5>4.ผู้ป่วยที่ on home O2 therapy สามารถให้ supplement O2 ขณะออกกำลังกายได้ </h5> <br />	
            </span>

            <br />
            </div>

            <br />
            <br />

            <div>
            <Card className="li7">
            <CardImg style={{ width:1900,height:270}} src="https://i.pinimg.com/originals/90/58/9c/90589c53510ce2c39e3f37625445f2be.jpg" />
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

export default Lung;