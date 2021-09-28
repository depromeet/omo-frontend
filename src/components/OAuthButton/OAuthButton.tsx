import AppleIcon from '@assets/icon/apple.svg';
import KakaoIcon from '@assets/icon/kakao.svg';
import NaverIcon from '@assets/icon/naver.svg';

import * as S from './styles';

interface OAuthButtonProps {
  type: string;
}

// TODO: 이거 타입 뭔지 모르겠음 ㅜ,.ㅜ
const icon: { [key: string]: any } = {
  naver: NaverIcon,
  kakao: KakaoIcon,
  apple: AppleIcon,
};

const name: { [key: string]: string } = {
  naver: '네이버',
  kakao: '카카오',
  apple: 'Apple',
};

const OAuthButton = ({ type }: OAuthButtonProps) => {
  return (
    <S.ButtonWrapper buttonType={type}>
      <div>{icon[type]()}</div>

      <span>{`${name[type]}로 계속하기`}</span>
    </S.ButtonWrapper>
  );
};

export default OAuthButton;
