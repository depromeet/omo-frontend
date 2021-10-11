import styled from 'styled-components';

export const NoData = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  .guide-message-wrapper {
    ${({ theme }) => theme.fonts.contents1};
    color: ${({ theme }) => theme.colors.black500};
    line-height: 25.6px;
    text-align: center;

    &.small-text {
      ${({ theme }) => theme.fonts.contents3};
      color: ${({ theme }) => theme.colors.black900};
      line-height: 17.66px;
      margin-bottom: 12px;
    }
  }

  .hashtag-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 88px;
  }
`;
