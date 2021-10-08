import { useCallback, useState } from 'react';

const ISSERVER = typeof window === 'undefined';

const useLocalStorage = (key: string) => {
  const storage = ISSERVER ? null : localStorage.getItem(key);
  const data = storage ? (JSON.parse(storage) as string[]) : [];
  const [items, setItems] = useState(data);

  const setStorageItem = useCallback(
    (value: string) => {
      if (items.includes(value)) return;

      const itemsArr = [value, ...items];
      localStorage.setItem(key, JSON.stringify(itemsArr));
      setItems(itemsArr);
    },
    [key, items],
  );

  const removeStorageItem = useCallback(
    (value: string) => {
      const itemsArr = items.filter((item) => item !== value);
      localStorage.setItem(key, JSON.stringify(itemsArr));
      setItems(itemsArr);
    },
    [key, items],
  );

  return { items, setStorageItem, removeStorageItem };
};

export default useLocalStorage;
