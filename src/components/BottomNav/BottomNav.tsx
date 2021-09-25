import Link from 'next/link';
import { useRouter } from 'next/router';

import * as S from './styles';

const BottomNav = () => {
  const router = useRouter();
  return (
    <S.BottomNav className="container">
      <Link href="/home" passHref>
        <a className={`nav-link ${router.asPath === '/home' ? 'active' : ''}`}>
          <S.NavButton />
          <span>홈</span>
        </a>
      </Link>

      <Link href="/search" passHref>
        <a className={`nav-link ${router.asPath === '/search' ? 'active' : ''}`}>
          <S.NavButton />
          <span>오마카세 찾기</span>
        </a>
      </Link>

      <Link href="/ranking" passHref>
        <a className={`nav-link ${router.asPath === '/ranking' ? 'active' : ''}`}>
          <S.NavButton />
          <span>랭킹</span>
        </a>
      </Link>

      <Link href="/mypage" passHref>
        <a className={`nav-link ${router.asPath === '/mypage' ? 'active' : ''}`}>
          <S.NavButton />
          <span>마이페이지</span>
        </a>
      </Link>
    </S.BottomNav>
  );
};

export default BottomNav;
