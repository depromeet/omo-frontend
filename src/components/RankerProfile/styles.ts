import styled from 'styled-components';

export const RankerProfileWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .text {
    ${({ theme }) => theme.fonts.bold};
  }

  div:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Image = styled.div`
  width: 96px;
  height: 96px;
  background-color: #c4c4c4;
  border-radius: 50%;
`;

export const Rank = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 32px;
  height: 32px;
  background-color: #9e9e9e;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 2;
`;
