import React from "react";
import { Navigate } from "react-router-dom";
import "./LoginPage.css";

import Logo from "../../assets/logo.png";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userType: "", navigate: false };
  }

  setUserType = (userType) => {
    this.setState({ userType, navigate: true });
  };

  render() {
    if (this.state.navigate) {
      return <Navigate to={`/Login${this.state.userType}`} />;
    }

    return (
      <div className="login-page">
        <div className="login-box">
          <div id="idLoginBoxLogoTxt">
            <img src={Logo} alt="" />
          </div>
          <button onClick={() => this.setUserType("Professor")}>
            Professor(a) / Academia
          </button>
          <button onClick={() => this.setUserType("Aluno")}>Aluno(a)</button>
        </div>
      </div>
    );
  }
}
export default LoginPage;
