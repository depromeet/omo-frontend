import styled from 'styled-components';

export const MyProfileWrapper = styled.div``;

export const MyProfileSection = styled.section`
  display: flex;
  flex: 1;
  //justify-content: space-between;
  gap: 16px;
  align-items: center;
  padding: 0 16px;
  background: #f8f8fc;
  border-radius: 15px;
  height: 96px;
`;

export const ProfileInformationWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex : 1;
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
