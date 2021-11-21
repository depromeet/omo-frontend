import axios from 'axios';
import React, { useState } from 'react';

import CloseIcon from '@assets/close.svg';
import SearchIcon from '@assets/search.svg';
import { StoreDisplayList } from '@components/StoreDisplay';
import PreventLinkAction from '@lib/preventLinkAction';
import { DetailPageProps } from '@pages/search/[id]';

import * as S from './styles';

const BottomActionSheet = () => {
  return <S.SearchBottomActionSheet>{}</S.SearchBottomActionSheet>;
};

export default BottomActionSheet;
