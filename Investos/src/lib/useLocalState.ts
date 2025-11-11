import { useEffect, useState } from 'react';
export function useLocalState<T>(key: string, initial: T) {
  const [v, setV] = useState<T>(() => {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : initial;
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(v)); }, [key, v]);
  return [v, setV] as const;
}
