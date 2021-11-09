import styled from 'styled-components';

export const LocationChecker = styled.div`
  /* margin-top: 20px; */
`;

export const ReceiptChecker = styled.div`
  /* margin-top: 40px; */
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.header3_5};

  strong {
    font-weight: bold;
  }
`;

export const ReselectBtn = styled.button`
  background-color: #fff;
  color: ${({ theme }) => theme.colors.black400};
  ${({ theme }) => theme.fonts.contents3};
  width: 90px;
  height: 32px;
  border-radius: 20px;
  border: 1px solid #eff0f6;
`;

export const SelectedStorePreviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.black100};
  padding: 12px 12px 12px 20px;
  border-radius: 10px;
`;

export const SelectedStoreInfo = styled.div`
  flex: 1;
  min-width: 0;
  margin-right: 20px;
  .title {
    ${({ theme }) => theme.fonts.subTitle1};
    margin-top: 6px;
    margin-bottom: 8px;
  }
  .location {
    ${({ theme }) => theme.fonts.contents2};
    color: ${({ theme }) => theme.colors.black500};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const SelectedStoreImageWrapper = styled.div`
  position: relative;
  width: 57px;
  height: 57px;
  border-radius: 8px;
  overflow: hidden;

  img {
    transform: translate(-25%, -25%);
  }
`;

export const ReceiptImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;

  svg {
    position: absolute;
    z-index: 10;
    top: 12px;
    right: 12px;
  }
`;

export const FileInput = styled.input`
  color: blue;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: none;
`;

export const ReceiptSection = styled.div`
  position: relative;
`;

export const ToggleDialogWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  position: absolute;
  width: 90%;
  height: 77px;
  top: -90px;
  right: 0;
  background: rgba(23, 26, 39, 0.65);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  padding: 14px 16px;
  box-sizing: border-box;

  svg {
    path {
      fill: #fff;
    }
  }

  &::after {
    position: absolute;
    content: '';
    bottom: -20px;
    right: 17px;
    width: 0px;
    height: 0px;
    border-top: 10px solid rgba(23, 26, 39, 0.65);
    border-left: 7px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 7px solid transparent;
  }
`;

export const ToggleDescription = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.fonts.contents2};

  strong {
    font-weight: bold;
  }
`;

export const SearchBottomActionSheet = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: 87vh;
  padding: 20px;
  box-sizing: border-box;
  transform: translateY(100%);
  transition: transform 0.35s;
  z-index: 100;
`;

export const SearchInputBar = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.black100};
  padding: 12px 16px;

  input {
    flex: 1;
    margin-right: 15px;
    border: none;
    outline: none;
    background-color: transparent;
    ${({ theme }) => theme.fonts.contents3};
  }
`;

export const SearchResults = styled.div`
  flex: 1;
  overflow-y: scroll;
`;

export const SearchNoData = styled.div`
  margin: 50% 25%;
`;
