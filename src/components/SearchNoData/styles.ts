import styled from 'styled-components';

export const NoData = styled.div`
  display: flex;
  flex-direction: column;
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
