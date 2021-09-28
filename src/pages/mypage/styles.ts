import styled from 'styled-components';

export const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 150px;
  background-color: #f1f1f1;

  .profile {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .profile-image {
    background-color: #c4c4c4;
    border-radius: 50%;
    width: 80px;
    height: 80px;
  }
  .profile-content {
    display: flex;
    flex-direction: column;
  }
`;

export const NickName = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const Stamp = styled.h2`
  font-size: 16px;
`;

export const Setting = styled.button`
  background-color: #c4c4c4;
  border-radius: 15px;
  border: none;
  padding: 5px 13px; ;
`;

export const MyPage = styled.div`
  padding: 1rem;

  .store-list {
    padding: 1rem;
    font-weight: bold;
  }
`;
