import styled from 'styled-components';

import Mascot from '@assets/mascot.svg';
import LoginLayout from '@components/Layout/LoginLayout';

const index = () => {
  return (
    <LoginLayout>
      <Content>
        <Mascot />
        <div>어서오세요!</div>
      </Content>
      <NextPageButton>다음</NextPageButton>
    </LoginLayout>
  );
};

export default index;

const Content = styled.section`
  width: 100%;
  height: 310px;
  margin-top: 6rem;
  padding: 0 20px;

  background-color: blue;
`;

const NextPageButton = styled.button`
  border: none;
  position: absolute;
  left: 20px;
  bottom: 3rem;
  width: calc(100% - 40px);
  height: 48px;

  margin: 0 auto;
  border-radius: 8px;

  background-color: #d7d8dd;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
`;
