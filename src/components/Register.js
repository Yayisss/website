import React, { useState, useContext} from "react"
import styled from "styled-components"
import axios from "axios"
import { Link, navigate } from "gatsby"

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const InputField = styled.input`
  margin: 10px;
  padding: 10px;
  width: 100%;
`

const Button = styled.button`
  background-color: #0C8B77;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
`;

const Register = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://your-server-url.com/rexºgister", {
        firstName,
        lastName,
        email,
        password,
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <RegisterForm onSubmit={handleSubmit}>
      <InputField
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={event => setFirstName(event.target.value)}
      />
      <InputField
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={event => setLastName(event.target.value)}
      />
      <InputField
        type="email"
        placeholder="Email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <Button
        type="submit"
        onClick={() => {
          navigate("/")
        }}
      >
        Register
      </Button>

      <Link to="/login"> Log in </Link>
    </RegisterForm>
  )
      }  
export default Register
