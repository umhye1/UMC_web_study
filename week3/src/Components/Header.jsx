import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
  return (
    <HeaderBase>
      <Link
        exact="true"
        style={{ textDecoration: 'none', color: '#000', marginLeft: 12 }}
        to="/"
      >
        <img
          style={{ width: '154px', height: '20px' }}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
        />
      </Link>
      <ItemList>
        <Link
          exact="true"
          style={{
            textDecoration: 'none',
            color: '#fff',
            marginLeft: 12,
            fontWeight: 600,
          }}
          to="/movies"
        >
          영화
        </Link>
        <Link
          exact="true"
          style={{
            textDecoration: 'none',
            color: '#fff',
            marginLeft: 12,
            fontWeight: 600,
          }}
          to="/tv"
        >
          TV 프로그램
        </Link>
        <Link
          exact="true"
          style={{
            textDecoration: 'none',
            color: '#fff',
            marginLeft: 12,
            fontWeight: 600,
          }}
          to="/celebrity"
        >
          인물
        </Link>
      </ItemList>
    </HeaderBase>
  );
};

const HeaderBase = styled.div`
  height: 48px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #22254b;
  align-items: center;
  justify-content: flex-start;
`;
const ItemList = styled.div`
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-left: px;
`;
