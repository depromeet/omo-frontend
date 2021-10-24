import styled, { keyframes } from 'styled-components';

const DEFAULT_SCREEN_WIDTH = 375; // px
const DEFAULT_SCREEN_HEIGHT = 812; // px
const DEFAULT_PROFILE_IMAGE_PATH = '/images/add-profile.png';

export const ProfileImageWrapper = styled.div`
  position: absolute;
  top: calc(100% * (140 / ${DEFAULT_SCREEN_HEIGHT}));

  height: 440px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 42px;

  input {
    position: absolute;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    opacity: 0;
    z-index: 9999;
  }
`;

export const DefaultImage = styled.img.attrs({
  src: DEFAULT_PROFILE_IMAGE_PATH,
  alt: 'default-profile',
})`
  position: absolute;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  z-index: 9997;
`;

export const ProfileImage = styled.img.attrs({
  src: DEFAULT_PROFILE_IMAGE_PATH,
  alt: 'profile',
})`
  position: absolute;
  width: 103px;
  height: 103px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center center;
  z-index: 9998;
`;

export const ProfileEraseButton = styled.button`
  all: unset;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  top: calc(50% + 75px);
  z-index: 9998;
`;

const aura = keyframes`
  0%{
    transform:scale(1);
  }
  33%{
    transform:scale(1.15);
    opacity:0.2;
  }
  67%{
    transform:scale(1.33);
    opacity:0.1;
  }
  100%{
    transform:scale(1.5);
    opacity:0;
  }
`;

export const Circle = styled.div`
  z-index: 1;
  position: absolute;
  width: calc(100% * (315 / ${DEFAULT_SCREEN_WIDTH}));
  height: 0;
  padding-bottom: calc(100% * (315 / ${DEFAULT_SCREEN_WIDTH}));

  background-color: #ffc737;
  border-radius: 50%;
`;

export const CircleAura = styled(Circle)`
  animation: ${aura} 1.5s infinite;
  animation-timing-function: linear;
`;
