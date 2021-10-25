import Link from 'next/link';
import { useRouter } from 'next/router';

import HomeIcon from '@assets/home_line.svg';
import MyPageIcon from '@assets/person_outline.svg';
import RankingIcon from '@assets/ranking_line.svg';
import SearchIcon from '@assets/search_line.svg';

import * as S from './styles';

const BottomNav = () => {
  const router = useRouter();
  return (
    <S.BottomNav className="container">
      <Link href="/home" passHref>
        <a className={`nav-link ${router.asPath === '/home' ? 'active' : ''}`}>
          <HomeIcon className="svg-path" />
          <span>홈</span>
        </a>
      </Link>

      <Link href="/search" passHref>
        <a className={`nav-link ${router.asPath === '/search' ? 'active' : ''}`}>
          <SearchIcon className="svg-complicated" />
          <span>오마카세 찾기</span>
        </a>
      </Link>

      <Link href="/ranking" passHref>
        <a className={`nav-link ${router.asPath === '/ranking' ? 'active' : ''}`}>
          <RankingIcon className="svg-paths" />
          <span>랭킹</span>
        </a>
      </Link>

      <Link href="/mypage" passHref>
        <a className={`nav-link ${router.asPath === '/mypage' ? 'active' : ''}`}>
          <MyPageIcon className="svg-paths" />
          <span>MY 오모</span>
        </a>
      </Link>
    </S.BottomNav>
  );
};

export default BottomNav;
