import styled from 'styled-components';

export const NoData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  .guide-message-wrapper {
    margin-top: 66px;
    ${({ theme }) => theme.fonts.contents2};
    color: ${({ theme }) => theme.colors.black500};
    line-height: 20px;
    text-align: center;

    &.mt-30 {
      margin-top: 30px;
      margin-bottom: 12px;
    }
  }

  .hashtag-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 55px;
  }
`;

export const Divider = styled.div`
  margin: 0 -20px;
  width: calc(100% + 40px);
  height: 8px;
  background-color: ${({ theme }) => theme.colors.black100};
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
`;

export const NoDataMessage = styled.p`
  color: ${({ theme }) => theme.colors.black400};
  ${({ theme }) => theme.fonts.subTitle1};
  margin-top: 18px;
`;
