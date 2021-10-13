import styled from 'styled-components';

export const StoreDisplay = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  a {
    text-decoration: none;
    color: #444;
  }
`;

export const StoreImageWrapper = styled.div`
  position: relative;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.black200};

  &.mode-list {
    width: 79px;
    min-width: 79px;
    height: 79px;

    img {
      transform: translate(-25%, -25%);
    }

    &::after {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.49), rgba(0, 0, 0, 0.49));
      content: '';
    }
  }
`;

export const SubTitles = styled.div`
  position: absolute;
  display: flex;
  ${({ theme }) => theme.fonts.contents3};
  z-index: 10;
  top: 12px;
  left: 12px;

  span {
    padding: 4px 8px;
    border-radius: 12px;
    background-color: rgba(0, 0, 0, 0.4);
    color: #ffffff;
    margin-right: 8px;
  }
`;

export const StoreDescriptionWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 12px;
  box-sizing: border-box;
  color: #ffffff;

  .store-title {
    ${({ theme }) => theme.fonts.subTitle1};
  }
  .store-location {
    ${({ theme }) => theme.fonts.contents2};
  }
`;

export const ListDescriptionWrapper = styled.div`
  display: flex;
`;

export const ListDescription = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;

  ${SubTitles} {
    position: static;
    span {
      background-color: ${({ theme }) => theme.colors.black400};
    }
  }
  ${StoreDescriptionWrapper} {
    position: static;
    background-color: transparent;
    padding: 0;
    justify-content: flex-start;
    height: auto;

    .store-title {
      color: ${({ theme }) => theme.colors.black900};
      margin-bottom: 4px;
    }
    .store-location {
      color: ${({ theme }) => theme.colors.black600};
    }
  }
`;
