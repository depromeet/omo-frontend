import type { NextPage } from "next";
import Display from "src/components/Display";
import Input from "src/components/Input";
import styled from "styled-components";

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
