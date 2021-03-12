import React, { useEffect, useContext, useState } from 'react';
/* import './Login.css' */
import { signInWithGoogle } from './services/firebase';
import { UserContext } from './providers/UserProvider';
import { Redirect } from 'react-router-dom';
import google from './img/google.png';
import bgImg from './img/login.jfif';
import Logo from "./img/kyh-logo.png";
export default function Login() {
  const user = useContext(UserContext)
  const [redirect, setredirect] = useState(null)

  useEffect(() => {
    if (user) {
      setredirect('/hem')
    }
  }, [user])
  if (redirect) {
    return <Redirect to={redirect} />

  }
  return (
    <div className="login-buttons" style={{
      backgroundImage: `url(${bgImg})`,
      backgroundSize: "cover",
      height: "100vh",
      color: "#f5f5f5"
    }}>
      <img src={Logo} alt="KYH Logo" className="LogoClass" />

      <button className="login-provider-button" onClick={signInWithGoogle}>
        <img src={google} alt="google icon" />
        <span> Fortsätt med Google</span>
      </button>
    </div>
  );
}

/*https://img.icons8.com/ios-filled/50/000000/google-logo.png  */