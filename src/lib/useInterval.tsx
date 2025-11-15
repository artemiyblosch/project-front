import { useEffect, useRef } from 'react';
 
export function useInterval(callback : any, delay : any) {
  const savedCallback = useRef<any>(null);
 
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
 
  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      // eslint-disable-next-line
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}