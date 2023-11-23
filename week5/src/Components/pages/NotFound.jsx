import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotFound = () => {
  return (
    <ContentLayout>

      <h2>해당 페이지를 찾지 못했습니다.</h2>

      <Content>
        <h4>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</h4>
      </Content>

      <ContentLink>
        <Link to="/">
          메인 페이지로 이동
        </Link>
      </ContentLink>

    </ContentLayout>
  )
}

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 50px;
  color: black;
  background-color: white;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0px 30px 0px;
  color: black;
`;

const ContentLink = styled.div`
  color : red;
  font-size: 14px;
`;
