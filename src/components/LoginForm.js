import React, { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import styled from 'styled-components';
import { navigate} from 'gatsby';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #ddd;
  border-radius: 4px;
  padding: 4px;
  margin-bottom: 8px;
  width: 100%;
`;

const Input = styled.input`
  border: none;
  flex: 1;
  margin-left: 8px;
`;

const Button = styled.button`
  background-color: #0C8B77;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
`;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <FiMail size={24} />
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </InputContainer>
        <InputContainer>
          <FiLock size={24} />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </InputContainer>
        <Button type="submit" onClick={()=>{navigate("/")}}>
            aaaa
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
