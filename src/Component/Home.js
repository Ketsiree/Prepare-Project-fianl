import React from 'react';
import './Home.css';
import {Media} from 'react-bootstrap';
import { Card,CardImg, CardBody, CardTitle, CardText,Button } from 'reactstrap';
import Table from './Table';

const Home = () => {
    
    
    return (
        <div>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap');
            </style>
    <div className="h">
    <br />
    <h1>Planning for Physical Therapy </h1>
    <br />
    <h3>อุปกรณ์ช่วยเหลือการกายภาพสำหรับผู้ป่วยติดเดียง</h3>
        </div>
        
        <Media>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');
        </style>
        </Media>

        <div className="S1">
                <Table />
        </div>

        <div className="Book1">
        <div align="center"><h1>Choose your program</h1></div>
        <br />
        <br />
        </div>

        <div className="myS">

        <Card style={{ margin: 20, padding: 20,backgroundColor:"#ffff88" }}>
        <CardImg top width="100%" src="https://us.123rf.com/450wm/gongzstudio/gongzstudio1711/gongzstudio171100215/90000886-man-hand-grabbing-isolated-on-white-background-clipping-path.jpg?ver=6" style={{  width: 405, height: 250}} />
            <CardBody>
                <CardTitle><h4>Arms</h4></CardTitle>
                <CardText>Planning</CardText>
            </CardBody>
            <Button variant="primary" href="/Arms">Start</Button>
        </Card>

        <Card style={{ margin: 20, padding: 20,backgroundColor:"#ffd6da" }}>
        <CardImg top width="100%" src="https://img.wonderhowto.com/img/30/49/63600834492950/0/do-hip-roll-dance-move.1280x600.jpg" style={{  width: 405, height: 250 }} />
            <CardBody>
                <CardTitle><h4>Hip</h4></CardTitle>
                <CardText>Planning</CardText>
            </CardBody>
            <Button variant="primary" href="/Hip">Start</Button>
        </Card>
        </div>
        
        <div className="myS">
    <Card style={{ margin: 20, padding: 20,backgroundColor:"#bcf8cf" }}>
        <CardImg top width="100%" src="https://cdn.newsapi.com.au/image/v1/21fe7805eab7d609e5e43542e6645b71" style={{  width: 405, height: 250}} />
            <CardBody>
                <CardTitle><h4>Feet</h4></CardTitle>
                <CardText>Planning</CardText>
            </CardBody>
            <Button variant="primary" href="/feet">Start</Button>
        </Card>

        <Card style={{ margin: 20, padding: 20,backgroundColor:"#ffb384" }}>
        <CardImg top width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/GR-EO-12.svg/1200px-GR-EO-12.svg.png" style={{  width: 405, height: 250}} />
            <CardBody>
                <CardTitle><h4>12 Standard</h4></CardTitle>
                <CardText>Planning</CardText>
            </CardBody>
            <Button variant="primary" href="/twelve">Start</Button>
        </Card>

        <Card style={{ margin: 20, padding: 20,backgroundColor:"#b6e3e9" }}>
        <CardImg top width="100%" src="https://ak.picdn.net/shutterstock/videos/2757698/thumb/11.jpg" style={{  width: 405, height: 250 }} />
            <CardBody>
                <CardTitle><h4>Cardiac</h4></CardTitle>
                <CardText>Planning</CardText>
            </CardBody>
            <Button variant="primary" href="/Cardiac">Start</Button>
        </Card>
        </div>

        <div className="myS1">
        <Card style={{ margin: 20, padding: 20,backgroundColor:"#cdb9d6" }}>
        <CardImg top width="100%" src="https://static.hellokhunmor.com/wp-content/uploads/2018/11/pulmonary_hypertension.jpg" style={{  width: 405, height: 250}} />
            <CardBody>
                <CardTitle><h4>Pulmonary</h4></CardTitle>
                <CardText>Planning</CardText>
            </CardBody>
            <Button variant="primary" href="/Lung">Start</Button>
        </Card>

        {/* <Card style={{ margin: 20, padding: 20,backgroundColor:"#f7af9f" }}>
        <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-JtaFL6ODxu7MRWWZnZ0EaexJch9atzjF2X8y9A10TvoBHFB-&usqp=CAU" style={{  width: 405, height: 250}} />
            <CardBody>
                <CardTitle><h4>Note</h4></CardTitle>
                <CardText>Planning</CardText>
            </CardBody>
            <Button variant="primary" href="/Note">Start</Button>
        </Card> */}
        </div>
    </div>
            
    );
}
    

export default Home;



