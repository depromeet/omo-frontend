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
  padding: 20px;
  border-radius: 10px;
  margin: auto 20px;
`;

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 10px;
  margin-bottom: 20px;

  .close-btn {
    position: absolute;
    right: 0;
  }
`;

export const SuggestModal = styled.section`
  display: flex;
  flex-direction: column;

  .sub-title {
    ${({ theme }) => theme.fonts.subTitle2};
    color: ${({ theme }) => theme.colors.black900};
  }
  .guide-message-wrapper {
    margin-bottom: 28px !important;
  }
  .warning-message {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.black500};
    ${({ theme }) => theme.fonts.contents3};

    svg {
      margin-right: 6px;
    }
  }
`;

export const GradeWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  .hashtag-wrapper {
    margin: 0 !important;
    margin-top: 5px !important;
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
    margin-top: 8px;
    margin-bottom: 20px;
  }
`;
