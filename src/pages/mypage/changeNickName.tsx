// 닉네임 변경 페이지
import { useState } from 'react';
import styled from 'styled-components';

import ModalLayout from '@components/Layout/ModalLayout';

const ChangeNickName = () => {
  const [text, setText] = useState('');

  const onClick = () => {
    alert(`변경된 닉네임 : ${text}`);
    setText('');
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`변경된 닉네임 : ${text}`);
    setText('');
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
  };
  return (
    <ModalLayout title="닉네임변경" buttonContent="확인" clickHandler={onClick}>
      <ChangeNickNamePage>
        <Title>변경할 닉네임을 정해주세요. (최대 8자)</Title>
        <form onSubmit={onSubmit}>
          <Input type="text" value={text} onChange={onChange} />
        </form>
      </ChangeNickNamePage>
    </ModalLayout>
  );
};

export default ChangeNickName;

const ChangeNickNamePage = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1rem;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.subTitle1};
  margin-top: 30px;
`;

const Input = styled.input`
  height: 40px;
  width: 90%;
  font-size: 18px;
  outline: none;
  border: none;
  border-bottom: 1.4px solid rgb(152, 152, 152);
`;
