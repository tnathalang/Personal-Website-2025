import { useEffect, useState } from "react";

interface useTypewriterProps {
  words: string[];
  pauseTime?: number;
  typingSpeed?: "normal" | "fast";
}

const useTypewriter = ({
  pauseTime = 1500,
  typingSpeed = "normal",
  words,
}: useTypewriterProps): string => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const isNormalSpeed = typingSpeed === "normal";
  const deletingSpeed = isNormalSpeed ? 50 : 10;
  const speed = isNormalSpeed ? 100 : 40;

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setText((prev) => currentWord.slice(0, prev.length + 1));
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        const pause = setTimeout(() => setIsDeleting(true), pauseTime);
        return () => clearTimeout(pause);
      }
    } else {
      if (text.length > 0) {
        const timeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const nextWordIndex = (wordIndex + 1) % words.length;
        setIsDeleting(false);
        setWordIndex(nextWordIndex);
      }
    }
  }, [text, isDeleting, wordIndex, words, speed, deletingSpeed, pauseTime]);

  return text;
};

export default useTypewriter;
