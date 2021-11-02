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
    width: 93px;
    min-width: 93px;
    height: 93px;

    img {
      transform: translate(-25%, -25%);
    }

    &::after {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const ListDescriptionWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black200};
  padding-bottom: 16px;
`;

export const ListDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  flex: 1;
  min-width: 0;

  ${SubTitles} {
    position: static;
    span {
      color: #9a9a9a;
      padding: 0;
    }
  }

  .store-title {
    margin-top: 10px;
    ${({ theme }) => theme.fonts.subTitle1};
    color: ${({ theme }) => theme.colors.black900};
  }
  .store-location {
    margin-top: 10px;
    overflow: hidden;
    ${({ theme }) => theme.fonts.contents2};
    color: ${({ theme }) => theme.colors.black600};
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
