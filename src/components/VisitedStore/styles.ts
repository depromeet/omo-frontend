import styled from 'styled-components';

export const StoreDisplay = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  a {
    text-decoration: none;
    color: #444;
  }
`;

export const StoreImageWrapper = styled.div`
  position: relative;
  height: 146.86px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #f6f6f6;
`;

export const SubTitles = styled.div`
  position: absolute;
  display: flex;
  ${({ theme }) => theme.fonts.contents3};
  z-index: 10;
  top: 1rem;
  right: 1rem;
  gap: 0.5rem;

  span {
    padding: 0.2rem 0.4rem;
    border-radius: 1rem;
    background-color: #ffffffb3;
  }
`;

export const StoreDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .store-title {
    ${({ theme }) => theme.fonts.subTitle3};
    margin-top: 10px;
    margin-bottom: 2px;
  }
  .store-desc {
    ${({ theme }) => theme.fonts.contents3};
    color: ${({ theme }) => theme.colors.black600};
  }
`;
