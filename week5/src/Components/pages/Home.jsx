import { useState } from 'react';
import styled from 'styled-components';

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <ContentLayout>
      {isVisible && <img src="/Untitled.svg" alt="Test" />}
      <button
        style={{ width: 80, height: 64, margin: 12 }}
        onClick={() => setIsVisible(!isVisible)}
      >
        광고
      </button>
    </ContentLayout>
  );
};

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  background-color: #464b8d;
`;
