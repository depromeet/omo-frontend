import styled from 'styled-components';

const DEFAULT_PROFILE_IMAGE_PATH = '/images/default_profile_image.png';

export const MyProfileWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const MyProfileSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 0 16px;
  height: 6rem;
  background: #f8f8fc;
  border-radius: 15px;
`;

export const ImageWrapper = styled.div`
  width: 64px;
  height: 64px;
`;

export const ProfileImage = styled.img.attrs({
  src: DEFAULT_PROFILE_IMAGE_PATH,
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
