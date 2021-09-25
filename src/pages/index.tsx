import type { NextPage } from 'next';
import Link from 'next/link';
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
      <Link href="/home">GO TO APP</Link>
    </div>
  );
};

export default Home;
