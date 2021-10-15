/**
 * throttle 유틸 함수는
 * 인자로 받은 함수가 여러 번 반복해서 실행된다면,
 * 인자로 받은 wait 시간 간격으로 호출됩니다.
 *
 * @example
 * const delaySomething = throttle(() => console.log('test'), 1000);
 */
const throttle = <Params extends unknown[]>( //
  func: (...args: Params) => unknown,
  wait: number,
) => {
  type Timer = ReturnType<typeof setTimeout>;
  let timeoutID: Timer | null;

  return (...args: Params) => {
    if (!timeoutID) {
      timeoutID = setTimeout(() => {
        timeoutID = null;
        func(...args);
      }, wait);
    }
  };
};

export default throttle;
