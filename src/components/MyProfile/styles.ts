import styled from 'styled-components';

export const MyProfileWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const MyProfileSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 6rem;
  background: #f8f8fc;
  border-radius: 15px;
`;

export const ImageWrapper = styled.div`
  width: 64px;
  height: 64px;
  margin-right: 27px;
`;

export const ProfileImage = styled.img.attrs({
  alt: 'profile',
})`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  object-fit: cover;
  object-position: center center;
`;

export const ProfileInformationWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  .main {
    ${({ theme }) => theme.fonts.subTitle2};
    color: ${({ theme }) => theme.colors.black900};
    margin-bottom: 6px;
  }
  .sub {
    ${({ theme }) => theme.fonts.contents3};
    color: ${({ theme }) => theme.colors.black700};
  }
`;
