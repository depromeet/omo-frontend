import styled from 'styled-components';

export const MyProfileWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const MyProfileSection = styled.section`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 16px;
  height: 6rem;
  background: #f8f8fc;
  border-radius: 15px;
`;

export const ProfileInformationWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 6px;

  .main {
    ${({ theme }) => theme.fonts.subTitle2};
    color: ${({ theme }) => theme.colors.black900};
  }
  .sub {
    ${({ theme }) => theme.fonts.contents3};
    color: ${({ theme }) => theme.colors.black700};
  }
`;
