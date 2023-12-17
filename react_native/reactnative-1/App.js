import React, { useState } from "react";
import styled from "styled-components/native";

export default function App() {
  
  const [displayValue,setDisplayvalue] = useState("0");
  const [operator,setOperator] = useState(null);
  const [firstValue,setFirstValue] = useState("");

  // string 끼리 붙임
  const handleNumberInput = (num) =>{

    if(displayValue == "0"){
      // string 으로 바꿔줌 
      setDisplayvalue(num.toString());
    } 

    else{
      setDisplayvalue(displayValue+num);
    }
  };

  const handleClear = () => {
    setDisplayvalue("0");
    setOperator(null);
    setFirstValue("");
  };
  
  const handleOperatorInput = (operator) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayvalue("0");
  };

  const handleEqual = () =>{
    // data type 변경 : (string)->float
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if(operator == "+"){
      setDisplayvalue((num1 + num2).toString());
    }
    else if (operator == "-"){
      setDisplayvalue((num1 - num2).toString());
    }
    else if(operator == "*"){
      setDisplayvalue((num1 * num2).toString());
    }
    else{
      setDisplayvalue((num1 / num2).toString());
    }
    setOperator(null);
    setFirstValue("");
  };

  return (
    <Container>
      <DisplayContainer>
        <DisplayText>{displayValue}</DisplayText> 
      </DisplayContainer>

      <ButtonContainer>
        <RowContainer>
          <ButtonBase onPress={() => handleNumberInput(1)}>
            <ButtonText>1</ButtonText>
          </ButtonBase>
          <ButtonBase onPress={() => handleNumberInput(2)}>
            <ButtonText>2</ButtonText>
          </ButtonBase>
          <ButtonBase onPress={() => handleNumberInput(3)}>
            <ButtonText>3</ButtonText>
          </ButtonBase>
          <OperatorButtonBase onPress={() => handleOperatorInput("/")}>
            <OperatorButtonText>÷</OperatorButtonText>
          </OperatorButtonBase>
        </RowContainer>
        <RowContainer>
          <ButtonBase onPress={() => handleNumberInput(4)}>
            <ButtonText>4</ButtonText>
          </ButtonBase>
          <ButtonBase onPress={() => handleNumberInput(5)}>
            <ButtonText>5</ButtonText>
          </ButtonBase>
          <ButtonBase onPress={() => handleNumberInput(6)}>
            <ButtonText>6</ButtonText>
          </ButtonBase>
          <OperatorButtonBase onPress={() => handleOperatorInput("*")}>
            <OperatorButtonText>×</OperatorButtonText>
          </OperatorButtonBase>
        </RowContainer>
        <RowContainer>
          <ButtonBase onPress={() => handleNumberInput(7)}>
            <ButtonText>7</ButtonText>
          </ButtonBase>
          <ButtonBase onPress={() => handleNumberInput(8)}>
            <ButtonText>8</ButtonText>
          </ButtonBase>
          <ButtonBase onPress={() => handleNumberInput(9)}>
            <ButtonText>9</ButtonText>
          </ButtonBase>
          <OperatorButtonBase onPress={() => handleOperatorInput("-")}>
            <OperatorButtonText>−</OperatorButtonText>
          </OperatorButtonBase>
        </RowContainer>
        <RowContainer>
          <ButtonBase onPress={() => handleNumberInput(0)}>
            <ButtonText>0</ButtonText>
          </ButtonBase>
          <OperatorButtonBase onPress={() => handleOperatorInput("+")}>
            <OperatorButtonText>+</OperatorButtonText>
          </OperatorButtonBase>
          <OperatorButtonBase onPress={() => handleEqual()}>
            <OperatorButtonText>=</OperatorButtonText>
          </OperatorButtonBase>
          <ButtonBase onPress={() => handleClear()}>
            <ButtonText>C</ButtonText>
          </ButtonBase>
        </RowContainer>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: center;
`;
const DisplayContainer = styled.View`
  flex: 2;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 20px;
`;
const ButtonContainer = styled.View`
  flex: 3;
  width: 80%;
  margin-bottom: 32px;
`;

const DisplayText = styled.Text`
  font-size: 48px;
  color: #333;
`;
const RowContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const ButtonBase = styled.TouchableOpacity`
  flex: 1;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  elevation: 3;
  margin: 2px;
  padding: 15px;
`;
const OperatorButtonBase = styled.TouchableOpacity`
  flex: 1;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  elevation: 3;
  margin: 2px;
  padding: 15px;
`;
const ButtonText = styled.Text`
  font-size: 34px;
  color: #333;
`;
const OperatorButtonText = styled.Text`
  font-size: 34px;
  color: #ff9500;
`;
