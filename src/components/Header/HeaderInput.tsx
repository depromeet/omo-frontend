import { useRouter } from 'next/router';
import { useState } from 'react';

import Prev from '@assets/prev.svg';

import * as S from './styles';

interface HeaderInputProps {
  placeholder: string;
  serachHandler: (text: string) => void;
}

const InputHeader = ({ placeholder, serachHandler }: HeaderInputProps) => {
  const router = useRouter();
  const [text, setText] = useState('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
  };

  const clearText = () => {
    setText('');
  };

  const handleOnSubmit = () => {
    serachHandler(text);
  };

  return (
    <S.Header className="container">
      <S.PrevButton onClick={() => router.back()}>
        <Prev />
      </S.PrevButton>
      <S.Input
        type="text"
        value={text}
        onChange={(e) => handleOnChange(e)}
        placeholder={placeholder}
      />
      {text ? (
        <S.SearchButton onClick={handleOnSubmit}>검색</S.SearchButton>
      ) : (
        <S.SearchButton onClick={clearText}>검색어 초기화</S.SearchButton>
      )}
    </S.Header>
  );
};

export default InputHeader;
