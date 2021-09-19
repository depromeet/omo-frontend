import type { NextPage } from 'next';
import styled from 'styled-components';

import Display from '@components/Display';
import Input from '@components/Input';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Home: NextPage = () => {
  return (
    <div>
      <Title>OMO FRONT END</Title>
      <Input />
      <Display />
    </div>
  );
};

export default Home;
