import styled from 'styled-components';

import { RANKING_CARD_BG_COLOR, RANKING_CARD_THUMBNAIL_COLOR } from '@constants/shared';

export const RankingCardWrapper = styled.div<{ rank: number }>`
  position: relative;
  width: 100%;
  border-radius: 10px;
  height: ${({ rank }) => ([1, 2, 3].includes(rank) ? '100px' : '66px')};
  background-color: ${({ rank }) => RANKING_CARD_BG_COLOR[rank] ?? '#F8F8FC'};

  & + & {
    margin-top: 10px;
  }
`;

export const ProfileArea = styled.div<{ rank: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 60px;
  height: 60px;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: ${({ rank }) => RANKING_CARD_THUMBNAIL_COLOR[rank]};
`;

export const RankIndicator = styled.div`
  width: 52px;
  height: 32px;
  background-color: #aaacbe;
  border-radius: 24px;
  color: #fff;
  text-align: center;
  ${({ theme }) => theme.fonts.subTitle3};
  line-height: 32px;
`;

export const ProfileBubble = styled.div`
  position: absolute;
  right: -10px;
  top: -8px;
  z-index: 1;

  span {
    position: absolute;
    left: 11px;
    top: 3px;
    ${({ theme }) => theme.fonts.subTitle3};
    color: #fff;
  }
`;

export const RightButton = styled.button`
  all: unset;
  position: absolute;
  height: 24px;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
`;

export const InfoArea = styled.div`
  position: absolute;
  top: 50%;
  left: 106px;
  width: 129px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

export const Nickname = styled.p`
  ${({ theme }) => theme.fonts.subTitle2};
  line-height: 22.4px;
  color: #1b1b1d;

  span {
    margin-left: 3px;
    font-size: 14px;
    ${({ theme }) => theme.fonts.contents2};
    color: ${({ theme }) => theme.colors.black400};
  }
`;

export const StampAmount = styled.p`
  ${({ theme }) => theme.fonts.contents2};
  line-height: 27px;
  color: #707077;
`;
