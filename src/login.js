import { useEffect, useState } from "react";

function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  
  const validate = (event) => {
    event.preventDefault();
    if (event.target[0].value === "Ramani" && event.target[1].value === "Ramani") {
      props.login()
      event.target[0].value = ""
      event.target[1].value = ""
    } else {
      alert("Invalid Username or password")
    }
    
  }

  const emailHandler = (event) => {
    setEmail(event.target.value)
  }
  const passwordHandler = (event) => {
    setPassword(event.target.value)
  }


  const logout = () => {
    props.logout()
  }

  useEffect(()=>{
  localStorage.setItem('email',email)
  localStorage.setItem('password',password)
  },[email] )
     
 useEffect(()=>{
  return console.log('Form Unmounted');
 })
  return (
    <div className="Container">
      {
        !localStorage.getItem('isLoggedIn') ? <form onSubmit={validate}>
          <input type="text" placeholder="'Enter E-mailID" onChange={emailHandler} value={email} />
          <input type="password" placeholder="'Enter Password" onChange={passwordHandler} value={password} />
          <input type="Submit" value="Login" />
        </form> : <button onClick={logout}>Logout</button>
      }
    </div>

  )

}

export default Login;