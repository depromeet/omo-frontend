import styled from 'styled-components';

export const RankingCardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  background-color: #000;
  border-radius: 10px;
`;

export const ProfileArea = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  border-radius: 50%;
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
  display: flex;
  flex-direction: column;
  align-items: space-between;
  top: 50%;
  right: 106px;
  width: 129px;
  height: 49px;
  transform: translateY(-50%);
`;

export const Nickname = styled.p`
  ${({ theme }) => theme.fonts.subTitle2};
  line-height: 22.4px;
  color: #1b1b1d;
`;

export const StampCount = styled.p`
  ${({ theme }) => theme.fonts.contents2};
  line-height: 32px;
  color: #707077;
`;
