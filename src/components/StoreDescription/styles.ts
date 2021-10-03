import styled from 'styled-components';

interface ButtonProps {
  bgColor?: string;
}

export const StoreDescription = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateY(-30px);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
  padding: 21px;
  margin-bottom: -30px;

  .content-wrapper {
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    font-family: 'Noto Sans KR', sans-serif;
    color: #444;
  }

  .list {
    margin-bottom: 16px;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
    line-height: 140%;
    font-family: 'Noto Sans KR', sans-serif;
    margin-bottom: 10px;
    color: #444;
  }

  .sub-contents {
    display: flex;

    .sub-title {
      padding-right: 10px;
      white-space: nowrap;
    }
  }

  .hashtag-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .button-wrapper {
  }
`;

export const HashTag = styled.span`
  border-radius: 20px;
  padding: 6px 15px;
  background-color: #f0f0f0;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  font-family: 'Noto Sans KR', sans-serif;
  color: #444;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const Button = styled.button<ButtonProps>`
  width: 100%;
  padding: 16px;
  color: #4b4b4b;
  outline: none;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  line-height: 140%;
  font-family: 'Noto Sans KR', sans-serif;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'transparent')};
  border: ${({ bgColor }) => (bgColor ? 'none' : '1px solid #9e9e9e')};

  & + & {
    margin-top: 14px;
  }
`;
