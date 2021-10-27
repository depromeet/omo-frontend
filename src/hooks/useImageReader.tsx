import { useEffect, useRef } from 'react';

/**
 * thumbnail 이 있을 경우,
 * imgRef.current.src에 FileReader가 변환한 데이터를 넣어줍니다.
 *
 * @return
 * useRef로 생성된 imgRef를 반환합니다.
 * 해당 ref를 원하는 img 태그에 ref로 넘겨주면 됩니다.
 */
const useImageReader = (thumbnail?: File) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!thumbnail) return;

    const reader = new FileReader();
    const setImageOnSrc = () => {
      if (!imgRef.current || !reader.result) return;
      imgRef.current.src = reader.result as string;
    };

    reader.readAsDataURL(thumbnail);
    reader.addEventListener('load', setImageOnSrc);
  }, [thumbnail]);

  return imgRef;
};

export default useImageReader;
