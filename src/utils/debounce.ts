/**
 * debounce 유틸 함수는
 * 인자로 받은 함수가 여러 번 반복해서 실행된다면,
 * 인자로 받은 wait 시간이 지난 후 호출된 마지막 함수만 반환합니다.
 *
 * @example
 * const delaySomething = debounce(() => console.log('hi'), 500);
 */
const debounce = <Params extends unknown[]>( //
  func: (...args: Params) => unknown,
  wait: number,
) => {
  type Timer = ReturnType<typeof setTimeout>;
  let timeoutID: Timer;

  return (...args: Params) => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      func(...args);
    }, wait);
  };
};

export default debounce;
