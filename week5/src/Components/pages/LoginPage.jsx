import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const LoginPage = () => {

    const[user, setUser] = useState({email : '', password : '',});


    const navigate = useNavigate();
    
    const onLoginHandler = () => {
        if(user.email===''){
        alert("올바른 이메일을 입력하세요");
        return;
      }
    
        if(user.password===''){
        alert("영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.");
        return;
      }

        alert('로그인을 성공했습니다!');
        navigate ('/login');
    };
    

    return (

        <LoginPageLayout> 
            <TitleWrap>
                <h2>이메일과 비밀번호를 <br />
                입력해주세요</h2>
            </TitleWrap>

            <ContentWrap>
                <EmailLayout>
                    <InputTitle>
                        이메일 주소
                    </InputTitle>
            
                    <Input
                        type="text"
                        placeholder="아이디"
                        value={user.id}
                        onChange={(e) => setUser({ ...user, id: e.target.value })}
                        maxLength="20"
                        autoFocus
                    />
                </EmailLayout>

                <PasswordLayout>
                    <InputTitle>
                        비밀번호
                    </InputTitle>

                    <Input
                        type="text"
                        placeholder="아이디"
                        value={user.id}
                        onChange={(e) => setUser({ ...user, id: e.target.value })}
                        maxLength="20"
                        autoFocus
                    />
            

                </PasswordLayout>

                <ButtonLayout onClick={onLoginHandler} type="button">
                    확인
                </ButtonLayout>


            </ContentWrap>
            
        </LoginPageLayout>
    )

}
export default LoginPage;


const LoginPageLayout = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin : 20px;
`;

const TitleWrap = styled.div`
display: flex;
margin : 40px 0px 40px;

`;

const ContentWrap =styled.div`
display: flex;
flex-direction: column;
`;


const EmailLayout = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 15px 0px 15px 0px;
`;


const InputTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    margin:0px 0px 10px 0px;
    font-size : 14px;
`;



const PasswordLayout = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 15px 0px 15px 0px;
`;

const ButtonLayout = styled.button`
    align-items: center;
    border-radius: 50px;
    border: none;
    width: 900px;
    height: 40px; 
    font-size: 13px;
`;

const Input = styled.input`
    display: flex;
    width: 1000px;
    height: 50px;
    border-radius: 10px;
    border-color: lightgray;
`;