import styled from 'styled-components';

export const RankingBarWrapper = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: 64px;
  background-color: #f7f7f7;
  border-radius: 16px;
  padding: 0 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;

  .rank {
    width: 20%;
    ${({ theme }) => theme.fonts.contentsBold};
    font-size: 18px;
  }

  .nickname {
    width: 60%;
    margin-top: 4px;
  }

  .amount {
    width: 11%;
    margin-top: 4px;
  }
`;
