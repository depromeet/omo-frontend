import styled from 'styled-components';

export const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const ModalBox = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 16px;
  margin: 0 21px;
`;

export const SuggestModal = styled.section`
  display: flex;
  flex-direction: column;

  .sub-title {
    font-size: 14px;
    font-family: 'Noto Sans KR', sans-serif;
    line-height: 140%;
    font-weight: 400;
  }
`;

export const LocationWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  .hashtag-wrapper {
    margin-top: 10px !important;
    margin-bottom: 0 !important;
  }
`;

export const InputWrapper = styled.article`
  display: flex;
  flex-direction: column;

  input {
    border: none;
    outline: none;
    border-bottom: 1px solid #e2e2e2;
    padding-bottom: 5px;
    margin-top: 1rem;
    margin-bottom: 4rem;
  }
`;
