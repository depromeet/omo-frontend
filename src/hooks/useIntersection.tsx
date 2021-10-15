import { MutableRefObject, useEffect, useState } from 'react';

import debounce from '@utils/debounce';

/**
 * useRef를 사용해 지정한 DOM이 화면에 보이게 되면,
 * 해당 DOM의 IntersectionObserverEntry를 반환합니다.
 * (https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
 *
 * 해당 entry 내에는 isIntersecting 키 값이 들어있으므로,
 * 이 값이 true라면 새로운 값을 불러올 수 있습니다.
 *
 * @example
 * const testRef = useRef<HTMLDivElement>();
 * const entry = useIntersection(testRef, {});
 *
 * useEffect(() => {
 *   if (entry?.isIntersecting) dispatch(setNextPage());
 * }, [entry]);
 */
const useIntersection = (
  ref: MutableRefObject<HTMLElement>,
  { threshold = 1 }: IntersectionObserverInit,
) => {
  const DELAY_TIME = 500;
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  useEffect(() => {
    const updateEntry = debounce(
      ([entry]: IntersectionObserverEntry[]) => setEntry(entry),
      DELAY_TIME,
    );

    const node = ref.current;
    const observer = new IntersectionObserver(updateEntry, { threshold });

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return entry;
};

export default useIntersection;
