import { useEffect, useRef } from "react";
import Storage from "../utils/storage";

export const useScrollPersistent = (elRef, key) => {
  const debounceRef = useRef(null);
  const savePosition = () => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      Storage.set(key, elRef.current.scrollTop);
    }, 300);
  };
  const setScrollPosition = async () => {
    const position = await Storage.get(key);
    if (position) {
      elRef.current.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setScrollPosition();
    elRef.current.addEventListener("scroll", savePosition);
    return () => {
      elRef.current?.removeEventListener("scroll", savePosition);
    };
  }, []);
};
