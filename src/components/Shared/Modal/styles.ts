import styled from 'styled-components';

interface ModalTitleProps {
  horizontalAlign: string;
}

export const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 9999;
  align-items: center;
`;

export const ModalBox = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  margin: auto 20px;
`;

export const ModalTitle = styled.div<ModalTitleProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ horizontalAlign }) => horizontalAlign};
  position: relative;
  margin-top: 10px;
  margin-bottom: 20px;

  .close-btn {
    position: absolute;
    right: 0;
  }
`;

export const ModalInner = styled.section`
  display: flex;
  flex-direction: column;

  .header3 {
    ${({ theme }) => theme.fonts.header3};
    color: ${({ theme }) => theme.colors.black900};
  }
  .sub-title1 {
    ${({ theme }) => theme.fonts.subTitle1};
    color: ${({ theme }) => theme.colors.black900};
  }
  .sub-title2 {
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
    color: ${({ theme }) => theme.colors.black500};
    ${({ theme }) => theme.fonts.contents3};

    svg {
      margin-right: 6px;
    }
  }
  .mb-20 {
    margin-bottom: 20px;
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

export const GradeDescriptionWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 17px;
`;

export const GradeDescription = styled.div`
  padding: 20px 23px;
  background-color: ${({ theme }) => theme.colors.black100};
  border-radius: 10px;

  .grade {
    display: inline-block;
    min-width: 100px;
    ${({ theme }) => theme.fonts.subTitle2};
    color: ${({ theme }) => theme.colors.black900};
  }
  .price {
    ${({ theme }) => theme.fonts.contents2};
    color: ${({ theme }) => theme.colors.black800};
  }

  & + & {
    margin-top: 10px;
  }
`;
