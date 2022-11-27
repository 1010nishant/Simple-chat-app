import "./Login.css";
import React, { useState } from 'react';
import Form from "./Form";
import image1 from "../image/agora-small-groups.jpg";
import { useSelector } from "react-redux";

const Login = () => {
  const [formInput, setFormInput] = useState<string>("");
  const [formPassword, setFormPassword] = useState<string>("");
  //const states = useSelector((state: any) => state);
  // console.log("Login page",states);  
  return (
    <div>
      <Form
        formInput={formInput}
        setFormInput={setFormInput}
        formPassword={formPassword}
        setFormPassword={setFormPassword}
      ></Form>
      <img src={image1} alt="xyz" />
    </div>
  );
}

export default Login