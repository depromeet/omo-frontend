import styled from 'styled-components';

export const NavButton = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 8px;
  background-color: #c6c6c6;
  border: none;
  outline: none;
  margin-bottom: 6px;
`;

export const BottomNav = styled.nav`
  height: 60px;
  background-color: #eee;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;

  .nav-link {
    font-size: 12px;
    font-weight: 400;
    font-family: 'Noto Sans KR', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #000;

    &.active {
      ${NavButton} {
        background-color: #999;
      }
    }
  }
`;
