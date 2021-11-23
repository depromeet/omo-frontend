import React from 'react';

import * as S from './styles';
import { LoadingSpinner } from '.';

const PageLoading = () => {
  return (
    <S.PageLoading>
      <LoadingSpinner />
    </S.PageLoading>
  );
};

export default PageLoading;
