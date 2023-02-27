import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginPage = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;


