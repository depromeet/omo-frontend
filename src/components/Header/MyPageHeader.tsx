import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import Setting from '@assets/setting.svg';
import { userState } from '@recoil/userState';

import * as S from './styles';

const MyPageHeader = () => {
  const router = useRouter();
  const [userValue, setUserValue] = useRecoilState(userState);

  return (
    <S.MyPageHeader className="container">
      <S.TitleSection>
        <span>{userValue.info?.nickname}</span>님 안녕하세요!
      </S.TitleSection>
      <S.SettingSection>
        <Setting />
      </S.SettingSection>
      
    </S.MyPageHeader>
  );
};

export default MyPageHeader;
