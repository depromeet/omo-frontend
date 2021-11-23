import { useEffect, useState } from 'react';

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
  node: HTMLElement | undefined,
  { threshold = 0, root = null, rootMargin = '0%' }: IntersectionObserverInit,
) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  useEffect(() => {
    const updateEntry = ([entry]: IntersectionObserverEntry[]) => setEntry(entry);

    if (!node) return;

    const observer = new IntersectionObserver(updateEntry, { threshold, root, rootMargin });
    observer.observe(node);

    return () => observer.disconnect();
  }, [node, threshold, root, rootMargin]);

  return entry;
};

export default useIntersection;
