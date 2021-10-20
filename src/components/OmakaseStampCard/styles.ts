import styled from 'styled-components';

export const OmakaseStampCardWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 290px;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: #f8f8fc;
`;

export const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${({ theme }) => theme.fonts.contents1};
  line-height: 24px;
  b {
    font-weight: bold;
  }
`;

export const LevelArea = styled.div`
  text-align: center;
  width: 50px;
  height: 24px;
  border-radius: 4px;
  background-color: #ffc737;

  ${({ theme }) => theme.fonts.subTitle3};
  color: #fff;
  line-height: 24px;
`;

export const Division = styled.div.attrs({
  'aria-hidden': true,
})`
  width: 100%;
  height: 1px;
  background-color: #d0d0db;
  margin: 20px 0;
`;

export const StampArea = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 17px 11px;
`;

export const Stamp = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border-radius: 50%;
  background-color: #eff0f6;
`;

export const StampButton = styled.button`
  all: unset;
  width: 100%;
  height: 53px;
  background-color: #293ad2;
  margin-top: 20px;
  text-align: center;
  border-radius: 8px;
  color: #fff;
  ${({ theme }) => theme.fonts.subTitle1};
  line-height: 25.2px;
`;
