import React, { useState, useEffect, useRef } from "react"

const firstName = 'Parthib';
const lastName = 'Samadder';

function useInterval (callback, delay) {

  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {};
  }, [delay]);
};

function DynamicName(props) {

  const hold = 3;
  const delay = 70;

  const [first, updateFirst] = useState("");
  const [last, updateSecond] = useState("");
  const [char, updateChar] = useState(0);
  const [isFirstActive, setIsFirstActive] = useState(true);
  const [isEnd, setEnd] = useState(false);

  useInterval (() => {
    if (char - hold >= firstName.length && isFirstActive) {
      updateChar(0);
      setIsFirstActive(false);
    }
    else if (!isFirstActive && char - 1 >= lastName.length) {
      setEnd(true);
    }
    else {
      if (isFirstActive) {
        updateFirst(firstName.slice(0, char));
      }
      else {
        updateSecond(lastName.slice(0, char));
      }
      updateChar(char + 1);
    }
  }, isEnd ? null : delay);


  return (
    <div className="outerName">
      <div className="firstLine">
        <span className="name">
          {first}
        </span>
      </div>
      <div className="secondLine">
        <span className="name">
          {last}
        </span>
      </div>
    </div>
  )
}

export default DynamicName;
