import { useState } from "react";
import styled from "styled-components";
import backgroundImage from "./ba.png";

export default function SignUp() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(null);
  const [nickname, setNickname] = useState("");
  const [nicknameError, setNicknameError] = useState(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [confirm, setConfirm] = useState("");
  const [confirmError, setConfirmError] = useState(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onChangePasswordHandler = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      setPassword(value);
      passwordCheckHandler(value, confirm);
    } else {
      setConfirm(value);
      passwordCheckHandler(password, value);
    }
  };

  const onChangeNameHandler = (e) => {
    const nameValue = e.target.value;
    setName(nameValue);
    nameCheckHandler(nameValue);
  };

  const onChangeNicknameHandler = (e) => {
    const nameValue = e.target.value;
    setNickname(nameValue);
    nicknameCheckHandler(nameValue);
  };

  const nameCheckHandler = async (name) => {
    if (name == "") {
      setNameError("필수 입력 항목입니다!");
    } else {
      setNameError("");
    }
  };
  const onChangeEmailHandler = (e) => {
    setEmail(e.target.value);
    emailCheckHandler(e.target.value);
  };
  const emailCheckHandler = (value) => {
    const isEmail = value.indexOf("@") != -1 && email.indexOf(".co") != -1;
    if (value === "") {
      setEmailError("필수 입력 항목입니다!");
    } else if (!isEmail) {
      setEmailError("이메일은 ~~~@~~.com 형식을 갖추어야합니다.");
    } else {
      setEmailError("");
    }
  };
  const nicknameCheckHandler = (value) => {
    console.log(value);
    if (value === "") {
      setNicknameError("필수 입력 항목입니다!");
    } else if (value.length < 2 || value.length > 5) {
      setNicknameError("닉네임은 2-5자사이로 만들어야합니다.");
    } else {
      setNicknameError("");
    }
  };

  const passwordCheckHandler = (password, confirm) => {
    const passwordRegex = /^[a-z\d!@*&-_]/;
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    } else if (!passwordRegex.test(password)) {
      setPasswordError("비밀번호는 영소문자, 숫자, !@*&-_만 입력 가능합니다.");
    } else if (confirm !== password) {
      setPasswordError("");
      setConfirmError("비밀번호가 일치하지 않습니다.");
    } else {
      console.log("hello");
      setPasswordError("");
      setConfirmError("");
    }
  };
  const isAvailable =
    nameError == "" &&
    emailError == "" &&
    nicknameError == "" &&
    passwordError == "" &&
    confirmError == "";
  return (
    <Background>
      <SignUpWrapper>
        <ContentLayout>
          <h1 className="title">회원 가입</h1>
          <Input
            oncha
            onChange={onChangeNameHandler}
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="이름"
            maxLength={5}
          />
          {nameError && <Status>{nameError}</Status>}
          <Input
            onChange={onChangeNicknameHandler}
            type="text"
            id="nickname"
            name="nickname"
            value={nickname}
            placeholder="닉네임"
          />
          {nicknameError && <Status>{nicknameError}</Status>}
          <Input
            onChange={onChangeEmailHandler}
            type="text"
            id="email"
            name="email"
            value={email}
            placeholder="이메일"
          />
          {emailError && <Status>{emailError}</Status>}
          <Input
            onChange={onChangePasswordHandler}
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="비밀번호"
          />
          {passwordError && <Status>{passwordError}</Status>}
          <Input
            onChange={onChangePasswordHandler}
            type="password"
            id="confirm"
            name="confirm"
            value={confirm}
            placeholder="비밀번호 확인"
          />
          {confirmError && <Status>{confirmError}</Status>}
          <Button
            disabled={!isAvailable}
            onClick={() => setModalIsOpen(true)}
            style={{ backgroundColor: isAvailable ? "purple" : "gray" }}
          >
            가입하기
          </Button>
        </ContentLayout>
        <ModalContainer style={{ display: modalIsOpen ? "flex" : "none" }}>
          <Title>가입 성공!</Title>
          <SubText>umc 챌린저 가입을 축하합니다!</SubText>
          <button
            style={{ marginRight: 24, marginTop: 24 }}
            onClick={() => setModalIsOpen(false)}
          >
            닫기
          </button>
        </ModalContainer>
      </SignUpWrapper>
    </Background>
  );
}
const Background = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${backgroundImage});
  align-items: center;
  height: 100vh;
`;
const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 24px;
  width: 400px;
  height: 200px;
  background-color: white;
  justify-content: center;
  align-items: center;
  align-items: end;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  text-align: center;
  width: 100%;
  font-size: 32px;
`;
const SubText = styled.h3`
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  margin-top: 28px;
  text-align: center;
`;
const Input = styled.input`
  color: white;
  width: 100%;

  border-radius: 5px;
  padding: 4px;
  border: 1px solid white;
  background-color: rgba(168, 168, 168, 0.9);
  margin-top: 12px;
`;
const SignUpWrapper = styled.div`
  background-color: rgba(168, 168, 168, 0.9);
  border-radius: 10px;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContentLayout = styled.div`
  width: 200px;
  flex-direction: column;
  display: flex;
  align-items: center;
`;
const Status = styled.small`
  font-size: 2px;
  text-align: start;
  width: 100%;
  color: rgb(245, 87, 87);
  margin-top: 3px;
  margin-left: 4px;
`;
const Button = styled.button`
  width: 170px;
  height: 30px;
  margin-top: 40px;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
`;
