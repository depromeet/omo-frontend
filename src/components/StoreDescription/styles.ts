import styled from 'styled-components';

export const StoreDescription = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  transform: translateY(-14px);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  margin-bottom: -14px;
`;

export const DescriptionHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;

  .title {
    ${({ theme }) => theme.fonts.header3};
    margin-bottom: 8px;
  }
  .desc {
    ${({ theme }) => theme.fonts.contents2};
    color: ${({ theme }) => theme.colors.black800};
  }
  .hashtag-wrapper {
    margin-top: 12px;
    display: flex;
  }
`;

export const HashTag = styled.span`
  border-radius: 20px;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.black100};
  ${({ theme }) => theme.fonts.contents2};
  display: flex;
  margin-right: 10px;
  margin-bottom: 10px;

  span.close {
    display: flex;
    align-items: center;
    margin-left: 4px;
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.pointYellow};
    color: #ffffff;
  }
`;

export const DescriptionMain = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  margin-bottom: 76px;
  background-color: #fafafa;
  padding: 16px 20px;
  border-radius: 10px;

  .contents-wrapper {
    flex: 1;
    margin-right: 10px;
  }
`;

export const DescriptionList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.black800};
  padding-bottom: 16px;

  .sub-title {
    ${({ theme }) => theme.fonts.subTitle3};
  }
  .contents {
    ${({ theme }) => theme.fonts.contents2};
  }

  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors.black200};
    padding-top: 16px;
  }
`;

export const ScrollArea = styled.div`
  overflow: auto;
  flex: 1;
`;
