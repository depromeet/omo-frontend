import styled from 'styled-components';

export const InfoCardWrapper = styled.div<{ type: string }>`
  position: relative;
  width: calc((100% - 13px) / 2);
  height: 186px;
  border-radius: 16px;
  background-color: ${({ type }) => (type === 'visited' ? '#2a3ad2' : '#ffc737')};

  svg {
    width: 100%;
  }
`;

export const Title = styled.p`
  position: absolute;
  top: 20px;
  left: 16px;

  ${({ theme }) => theme.fonts.subTitle2};
  line-height: 24px;
  white-space: pre-wrap;
  letter-spacing: -0.02em;
  color: #fff;
`;

export const ValueArea = styled.p`
  position: absolute;
  bottom: 50px;
  right: 20px;
  color: #fff;
  font-size: 16px;
`;

export const Value = styled.span`
  font-size: 46px;
  line-height: 25px;
  font-weight: 800;
`;

export const Suffix = styled.span`
  margin-left: 3px;
`;

export const Notification = styled.span`
  position: absolute;
  bottom: 18px;
  right: 20px;
  font-size: 12px;
  line-height: 25px;

  letter-spacing: -0.02em;

  color: #ffffff;
`;
