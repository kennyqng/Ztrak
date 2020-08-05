import React, {useState} from "react";
import logoImg from "../img/Logo.jpg";
import { Card, Logo, Form, Input, Button } from '../components/AuthForms';
import  {signup, login} from '../utils/API'

function Signup() {
  const [isLogin, setIsLogin] = useState(true);
  const [input, setInput] = useState({
    username: "",
    password: "",
    passwordConf: ""
  })

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
        login({username:input.username, password:input.password}).then(({data})=>{
          console.log(data)
        })
      }else{
        signup(input).then(({data})=>{
          console.log(data)
        })
      }
  }
 
  return (
    <Card>
      <Logo src={logoImg} />
      <Form>email
        <Input onChange={handleInputChange} name="username" type="email" placeholder="email" />
        <Input onChange={handleInputChange} name="password" type="password" placeholder="password" />
        {isLogin ? "" : <Input onChange={handleInputChange} name="passwordConf" type="password" placeholder="password again" />}
        <Button onClick={handleLoginSignup}>Sign Up</Button>
      </Form>
      <p onClick={loginSwitch} style={{cursor:"pointer", color:"white"}}>{isLogin ? "Sign Up New Account" : "Already have an account?"}</p>
    </Card>
  );
}

export default Signup;

