import styled from 'styled-components';

export const StoreDisplay = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  a {
    text-decoration: none;
    color: #444;
  }
`;

export const StoreImageWrapper = styled.div`
  position: relative;
  height: 180px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #f6f6f6;
`;

export const SubTitles = styled.div`
  position: absolute;
  display: flex;
  ${({ theme }) => theme.fonts.contents3};
  z-index: 10;
  top: 9px;
  left: 9px;

  span {
    padding: 4px 13px;
    border-radius: 11.3px;
    background-color: rgba(0, 0, 0, 0.4);
    color: #ffffff;
    margin-right: 6.44px;
  }
`;

export const StoreDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .store-title {
    ${({ theme }) => theme.fonts.subTitle3};
    line-height: 140%;
    margin-top: 13px;
    margin-bottom: 4px;
  }
  .store-desc {
    ${({ theme }) => theme.fonts.contents3};
    line-height: 140%;
  }
`;
