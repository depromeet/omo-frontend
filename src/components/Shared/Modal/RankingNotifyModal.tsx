import Sign24h from '@assets/24h.svg';
import CloseIcon from '@assets/close.svg';

import * as S from './styles';

interface IRankingNotifyModal {
  toggleModal: (isOpen: boolean) => void;
}

const RankingNotifyModal = ({ toggleModal }: IRankingNotifyModal) => {
  return (
    <S.ModalWrapper>
      <S.ModalBox>
        <S.ModalInner>
          <S.ModalTitle horizontalAlign="flex-start">
            <span className="sub-title1">오모의 랭킹은 이렇게 정해져요.</span>
            <CloseIcon className="close-btn" onClick={toggleModal} />
          </S.ModalTitle>
          <S.RankingNotifyModalContent>
            <Sign24h />
            <div>
              <p>매일 24시에 갱신되며,</p>
              <p>도장 깬 개수가 같을 경우 먼저 깬 사람이</p>
              <p>더 높은 랭킹을 차지해요!</p>
              <p>먼저 도장을 깨고 높은 랭킹을 차지해보세요!</p>
            </div>
          </S.RankingNotifyModalContent>
        </S.ModalInner>
      </S.ModalBox>
    </S.ModalWrapper>
  );
};

export default RankingNotifyModal;
