import { useRouter } from 'next/router';
import { useState } from 'react';

import Prev from '@assets/prev.svg';

import * as S from './styles';

interface HeaderInputProps {
  placeholder: string;
  searchHandler: (text: string) => void;
}

const InputHeader = ({ placeholder, searchHandler }: HeaderInputProps) => {
  const router = useRouter();
  const [text, setText] = useState('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
  };

  const handleOnSubmit = () => {
    if (!text) {
      alert('검색어를 입력해주세요!');
      return;
    }
    searchHandler(text);
  };

  return (
    <S.Header borderBottom className="container">
      <S.PrevButton onClick={() => router.back()}>
        <Prev />
      </S.PrevButton>
      <S.Input
        type="text"
        value={text}
        onChange={(e) => handleOnChange(e)}
        placeholder={placeholder}
      />
      <S.SearchButton onClick={handleOnSubmit}>검색</S.SearchButton>
    </S.Header>
  );
};

export default InputHeader;
