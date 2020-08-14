import React, {useState, useContext} from "react";
import logoImg from "../img/Logo.jpg";
import { Card, Logo, Form, Input, Button } from '../components/AuthForms';
import  {signup, login} from '../utils/API'
import {AuthContext} from "../context/auth";
import {Redirect} from "react-router-dom";
import Clock from "../components/Clock";

function Signup() {
  const [isLogin, setIsLogin] = useState(true);
  const [input, setInput] = useState({
    username: "",
    password: "",
    passwordConf: ""
  })
  const {user, setUser} = useContext(AuthContext)

  const handleInputChange = ({target:{name,value}}) =>{
    setInput({...input, [name]:value});
    console.log(input)
  }
  const loginSwitch = () => {
     setIsLogin(!isLogin);
     setInput({
      username: "",
      password: "",
      passwordConf: ""
     })
  }

  const handleLoginSignup = () => {
      if(isLogin){
        console.log("LOGGIN YOU IN!", input.password)
        login({username:input.username, password:input.password}).then(({data})=>{
          console.log(data);
          localStorage.setItem("currentUser", JSON.stringify(data))
          setUser(data);
          window.location.replace("/home")
        })
      }else{
        signup({username:input.username, password:input.password}).then(({data})=>{
          console.log(data);
        })
        window.location.replace("/home")
      }
  }
 
  return (
    <>
    {user ? <Redirect to="/home"/> : ""}
    <Card>
      <Clock></Clock>
      <Form>email
        <Input onChange={handleInputChange} name="username" type="email" placeholder="email" />
        <Input onChange={handleInputChange} name="password" type="password" placeholder="password" />
        {isLogin ? "" : <Input onChange={handleInputChange} name="passwordConf" type="password" placeholder="password again" />}
        <Button onClick={handleLoginSignup}>{isLogin ? "Login" : "Sign Up"}</Button>
      </Form>
      <p onClick={loginSwitch} style={{cursor:"pointer", color:"white"}}>{isLogin ? "Sign Up New Account" : "Already have an account?"}</p>
    </Card>
    </>
  );
}

export default Signup;

