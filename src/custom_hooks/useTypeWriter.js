import { useState, useEffect } from 'react';

const useTypewriter = (text) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100; 
    const pauseTime = isDeleting ? 500 : 2000; 

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < text.length) {
        setDisplayedText(text.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === text.length) {
        setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(text.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setDisplayedText('');
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, text]);

  return displayedText;
};

export default useTypewriter;
