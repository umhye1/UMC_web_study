import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

function LoginControl(){

    const 
}

function LoginMessage(props){
    return<p>환영합니다!</p>;
}

function LogoutMessage(props){
    return <p>로그인 해주세요!</p>;
}

function LoginButton(props){
    return (
        <StyledButton onClick={props.onClick}>
          로그인
        </StyledButton>
      );
}

function LogoutButton(props){
    return (
        <StyledButton onClick={props.onClick}>
          로그아웃
        </StyledButton>
      );
}

function Message(props){
    const isLoggedIn=props.isLoggedIn;
    if(isLoggedIn){ //false
        return <LoginMessage />;
    }
    else{
        return <LogoutMessage />;
    }
}

// class LoginControl extends React.Component{
//     constructor(props){
//     super(props) // this 사용하기 위해서는 constructor에 super 호출해야함
//     this.state={
//         isLoggedIn:false,
//     }
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick=this.handleLogoutClick.bind(this);
//     }

//     handleLoginClick(){
//         this.setState({
//             isLoggedIn : true,
//         });
//     }
//     handleLogoutClick(){
//         this.setState({
//             isLoggedIn: false,
//         });
//     }

//     render(){
//         const isLoggedIn = this.state.isLoggedIn;
//         let button;
//         if(isLoggedIn){ // false
//             button = <LogoutButton onClick ={this.handleLogoutClick} />;
//         }
//         else{
//             button = <LoginButton onClick ={this.handleLoginClick} />;
//         }
        
//         return (
//          <LoginLayout>
//             {isLoggedIn
//                 ? <LogoutButton onClick={this.handleLogoutClick} />
//                 : <LoginButton onClick={this.handleLoginClick} />
//             }
//             <LoginMessageLayout>
//                 <Message isLoggedIn={isLoggedIn} />
//             </LoginMessageLayout>
//          </LoginLayout>
//         );
//       }
// }

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<LoginControl />);

export default LoginControl;

const LoginLayout = styled.div`
  display: flex;
  flex-direction: row;
  color:white;
  align-items: center;
  justify-content: flex-start;
  margin:20px;
`;

const LoginMessageLayout =styled.div`
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




