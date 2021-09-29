import styled from 'styled-components';

export const NoData = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  .guide-message-wrapper {
    font-size: 14px;
    font-family: 'Noto Sans KR', sans-serif;
    line-height: 140%;
    font-weight: 400;
    text-align: center;
    margin: 1rem 0;
  }

  .hashtag-wrapper {
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 4rem;
  }
`;
