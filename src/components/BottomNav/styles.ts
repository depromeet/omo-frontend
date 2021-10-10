import styled from 'styled-components';

export const BottomNav = styled.nav`
  height: 64px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #ebebeb;

  .nav-link {
    font-size: 12px;
    font-weight: 400;
    font-family: 'Noto Sans KR', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #000;

    svg {
      opacity: 0.5;
    }

    span {
      color: ${({ theme }) => theme.colors.black500};
      ${({ theme }) => theme.fonts.contents3};
      margin-top: 3px;
    }

    &.active {
      span {
        color: ${({ theme }) => theme.colors.mainBlue};
      }
      svg {
        opacity: 1;
        &.svg-path path {
          stroke: ${({ theme }) => theme.colors.mainBlue};
        }
        &.svg-paths path {
          fill: ${({ theme }) => theme.colors.mainBlue};
        }
        &.svg-complicated {
          path,
          rect {
            fill: ${({ theme }) => theme.colors.mainBlue};
          }
          circle {
            stroke: ${({ theme }) => theme.colors.mainBlue};
          }
        }
      }
    }
  }
`;
