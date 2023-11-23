import React, { useState } from 'react';
import styled from 'styled-components';

// hook. usestate 이용해서 로그인 버튼 구현

const LoginControl = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [message, setMessage] = useState('로그인 해주세요!');
    
    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
        setMessage(isLoggedIn ? '로그인 해주세요!' : '환영합니다!');
    }


    const LoginButton = () => {
        return (
            <StyledButton onClick={toggleLogin}>
                로그인
            </StyledButton>
        );
    }

    const LogoutButton = () => {
        return (
            <StyledButton onClick={toggleLogin}>
                로그아웃
            </StyledButton>
        );
    }

    return (
        <LoginLayout>
            {isLoggedIn ? <LogoutButton /> : <LoginButton />}
            <LoginMessageLayout>
                <div> {message} </div>
            </LoginMessageLayout>
        </LoginLayout>
    );
}



export default LoginControl;

const LoginLayout = styled.div`
  display: flex;
  flex-direction: row;
  color:white;
  align-items: center;
  justify-content: flex-start;
  margin:20px;
`;

const LoginMessageLayout = styled.div`
    display: flex;
    margin:10px;
    font-size:13px;
`;

const StyledButton = styled.button`
    border-radius:10px;
    border:none;
    width: 60px;
    font-size: 13px;
`;




