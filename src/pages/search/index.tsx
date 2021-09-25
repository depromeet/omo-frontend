// 기본 찾기 페이지

const index = () => {
  const isOpen = true;
  return <div>{isOpen && <div>검색창</div>}</div>;
};

export default index;
