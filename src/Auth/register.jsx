import React from "react";
import { withRouter } from "react-router-dom";
import {initializeApp} from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';
import "./Register.css";

const firebaseConfig = {
    apiKey: "AIzaSyAI6beir8iRscpa0CUeo8tXgx77ouh2RvE",
    authDomain: "my-app-nitn.firebaseapp.com",
    projectId: "my-app-nitn",
    storageBucket: "my-app-nitn.appspot.com",
    messagingSenderId: "203988688799",
    appId: "1:203988688799:web:34dc020b58837726d627aa"
    
  };

const app = initializeApp(firebaseConfig);



class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  navigateTo = (val) => {
    //this.props.history.push(val);
    if(val == "login"){
        this.props.history.push("/login");
    }
    if(val == "register"){
        this.props.history.push("/register");
    }
  }
  handleEmail = (x) => {
    //console.log(x.target.value.length)
    this.setState({ email: x.target.value });
  };
  handlePassword = (x) => {
    //console.log(x.target.value.length)
    this.setState({ password: x.target.value });
  };
  handleSuccessfulRegistration = (x) => {     //x is user credentials
    alert("Account Created")
    //console.log(x.user)
    //let temp = x.user
    //localStorage.setItem("name_of_storage", JSON.stringify(temp));
    //this.props.history.push("/ProfilePage")
  }
  handleRegister = () => {
    let eid = this.state.email
    var psd = this.state.password

    if(eid.length<5 || psd.length<8){
      alert("Invalid Email ID / Password")
    }
    else{
      const auth = getAuth(app)
      createUserWithEmailAndPassword(auth, eid, psd)
        .then((x) => this.handleSuccessfulRegistration(x))
        .catch((error) => {
          console.log("Error IS ====>", error);
        })
    }
  }
  handleGoogleRegister = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((x) => this.handleSuccessfulRegistration(x))
      .catch((error) => {
        console.log("Error IS ====>", error);
      })
  }
  render() {
  
    return (
    <div className = "register-container">
      <center>
        <h1 className = "register-title">Register</h1>
        
        <input 
          type="text"
          value={this.state.email}
          onChange={(x)=>this.handleEmail(x)}
          placeholder="Email ID"
          className = "input-field"
        />
        <br/>
        <input 
          type="password"
          value={this.state.password}
          onChange={(x)=>this.handlePassword(x)}
          placeholder="Password"
          className = "input-field"
        />
        <br/>
        <button className = "register-button" onClick={() => this.handleRegister()}>
          <p>Register</p>
        </button>
        <br/>
        <hr/>
        <br/>
        <button className="google-register-button" onClick={() => this.handleGoogleRegister()}>
          <p>Sign Up with Google</p>
        </button>
      </center>
    </div>
    
    );
  }
}
export default withRouter(Register)

