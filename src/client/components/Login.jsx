import React, { useState } from 'react'
import Modal from './Modal'
const Login = (props) => {
  //USING REACT HOOKS TO MAINTAIN STATE FOR USERNAME AND PASSWORD
  //decalaring a constant, destructuring an array, generated by invoking useState hook.
  //the first constant will be the username state itself
  //The second constant will be the setter method
  //assiging it the value of useState invoked with a default empty string
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  console.log(username)
  console.log(password)
  return (
    <Modal>
      <div className="login">
        <label>
          Username
          <input
            value={username}
            onChange={(event) => {
              setUsername(event.target.value)
            }}
            type="text"
          />
        </label>
        <label>
          Password
          <input
            value={password}
            onChange={(event) => {
              setPassword(event.target.value)
            }}
            type="password"
          />
        </label>
        <button>Log In</button>
        <div className="divider" />
        <button className="create-user">Click here to Sign Up</button>
      </div>
    </Modal>
  )
}

export default Login
