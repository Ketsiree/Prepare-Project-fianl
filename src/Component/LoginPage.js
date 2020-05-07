import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import './LoginPage.css';

// Initialize Firebase

class LoginPage extends Component {


  state = {
    isSignedIn: false // sign in 
  };

  // Configure FirebaseUI.
  uiConfig = {
    signInFlow: 'popup',  //popup 
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div className="container1">
          <p>Welcome</p>
          <h1>เว็บไซต์สำหรับการวางแผนการกายภาพผู้ป่วยติดเตียง</h1>
          <h5>Please sign-in:</h5>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (
      <div className="container1">
        <h1>"Welcome"</h1>
        <h1>เว็บไซต์สำหรับการวางแผนการกายภาพผู้ป่วยติดเตียง</h1>
        <p>Hello{firebase.auth().currentUser.displayName}! You are now signed-in!</p>
        <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
      </div>
    );

  }
}
export default LoginPage;






















// import React, { useState } from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
// // import './LoginForm.css'
// import fire from '../Config/fire'


// const LoginPage = () => {

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     const login = e => {

//         e.preventDefault();
//         fire.auth().signInWithEmailAndPassword(email, password).then((u) => {
//             console.log(u)
//         }).catch((err) => {
//             console.log(err)
//         })
//     }


//     const signup = e => {

//         e.preventDefault()
//         fire.auth().createUserWithEmailAndPassword(email, password).then((u) => {
//             console.log(u)
//         }).catch((err) => {
//             console.log(err)
//         })
//     }


//     return (
//         <div >
//             <MDBContainer>
//                 <MDBRow className="LoginForm">
//                     <MDBCol md="9">
//                         <form>
//                             <p className="h5 text-center mb-4">Sign up</p>
//                             <div className="grey-text">
//                                 <MDBInput label="Your email" group type="email" validate error="wrong"
//                                     success="right" name="email" onChange={(e) => setEmail(e.target.value)} />
//                                 <MDBInput label="Your password" group type="password" name="password" validate onChange={(e) => setPassword(e.target.value)} />
//                             </div>
//                             <div className="text-center">
//                                 <MDBBtn color="primary" onClick={login}>LOGIN</MDBBtn>
//                                 <MDBBtn color="primary" onClick={signup}>Register</MDBBtn>
//                             </div>
//                         </form>
//                     </MDBCol>
//                 </MDBRow>
//             </MDBContainer>
//         </div>
//     )
// }

// export default LoginPage;