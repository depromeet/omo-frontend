import styled from 'styled-components';

export const ProfileImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 88px 0 56px 0;

  input {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    opacity: 0;
  }
`;
