import React from "react"
import { FiDribbble } from "react-icons/fi"
import styled from "styled-components"
import LoginForm from "../components/LoginForm"
import Register from "../components/Register"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const RegisterPage = () => {
  return (
    <>
      
      <div>
        <Container>
          <Register />
        </Container>
      </div>
    </>
  )
}

export default RegisterPage
