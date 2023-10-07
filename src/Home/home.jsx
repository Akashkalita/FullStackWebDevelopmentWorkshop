import React from "react";
import { withRouter } from "react-router-dom";
import "./Home.css"; // Import your CSS file

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  navigateTo = (val) => {
    this.props.history.push(val);
  }

  render() {
    return (
      <div className="home-container"> {/* Apply a CSS class */}
        <center>
          <h3 className="home-title">HOME</h3> {/* Apply a CSS class */}
          <button className="home-button" onClick={() => this.navigateTo("login")}>
            <p>Send Mail</p>
          </button>
          <button className="home-button" onClick={() => this.navigateTo("register")}>
            <p>Register</p>
          </button>
        </center>
      </div>
    )
  }
}

export default withRouter(Home);
