import styled from 'styled-components';

export const SearchRecord = styled.section``;

export const RecordArticle = styled.article`
  margin-bottom: 15px;

  .sub-title {
    ${({ theme }) => theme.fonts.subTitle3};
    margin-bottom: 8px;
  }
`;

export const RecentRecords = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MoreButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  color: ${({ theme }) => theme.colors.black700};
  ${({ theme }) => theme.fonts.contents2};
`;
