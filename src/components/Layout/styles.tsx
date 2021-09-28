import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  overflow: hidden;
`;

export const Main = styled.main`
  flex: 1;
  overflow: auto;
`;

export const Button = styled.button`
  margin: 1rem;
  padding: 15px;
  background-color: #c9c9c9;
  outline: none;
  border: none;
  border-radius: 8px;
  color: #4b4b4b;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
`;
