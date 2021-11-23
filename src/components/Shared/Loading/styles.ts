import styled, { keyframes } from 'styled-components';

const spinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const PageLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  width: 100%;
  height: 100%;
  background-color: rgba(200, 200, 200, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingSpinner = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: relative;
  border-top: 4px solid rgba(100, 100, 100, 0.2);
  border-right: 4px solid rgba(100, 100, 100, 0.2);
  border-bottom: 4px solid rgba(100, 100, 100, 0.2);
  border-left: 4px solid ${({ theme }) => theme.colors.mainBlue};
  transform: translateZ(0);
  animation: ${spinnerAnimation} 1s infinite linear;

  &::after {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
`;
