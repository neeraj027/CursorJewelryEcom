import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useRef,
} from 'react';

// Create the context
const CursorContext = createContext();

// Create a provider component
export const CursorProvider = ({ children }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [mouseEnter, setMouseEnter] = useState(false);
  const cursorRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [social, setSocial] = useState(false);
  const [product, setProduct] = useState(false);

  const updateCursorPosition = (event) => {
    // console.log(event);
    setCursorPosition({ x: event.x, y: event.y });
  };

  const handleMouseEnter = (value) => {
    setMouseEnter(value);
  };

  return (
    <CursorContext.Provider
      value={{
        cursorPosition,
        updateCursorPosition,
        handleMouseEnter,
        mouseEnter,
        cursorRef,
        cursorText,
        setCursorText,
        social,
        setSocial,
        product,
        setProduct,
      }}>
      {children}
    </CursorContext.Provider>
  );
};

// Custom hook to use the CursorContext
export const useCursor = () => {
  return useContext(CursorContext);
};
