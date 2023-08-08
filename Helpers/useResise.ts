import { RefObject, useEffect, useRef, useState } from "react";

export const useResise = (
  textAreaRef: RefObject<HTMLTextAreaElement>,
  val: string
) => {
  const resizeTextArea = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  };
  useEffect(resizeTextArea, [val]);
  return [textAreaRef, val];
};
