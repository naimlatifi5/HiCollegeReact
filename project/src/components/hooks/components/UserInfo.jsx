import React, { useState, useEffect, useRef, useEffectEvent } from 'react';

const MyUserInfo = () => {
  const [userName, setUserName] = useState('Bob');
  const [loginMessage, setLoginMessage] = useState('');
  const nameRef = useRef(userName); // useRef is used to store the current value of userName and it is not affected by the closure of useEffect
  nameRef.current = userName;

  const getUserName = useEffectEvent(() => userName); // better way with useEffectEvent,
  // useRef to rescue, and how we did it before the useEffectEvent,
  // useEffect(() => {
  //   let loggedInTime = 0;
  //   const interval = setInterval(() => {
  //     loggedInTime++;
  //     setLoginMessage(`${nameRef.current} - Logged in for ${loggedInTime} seconds`);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []); // usefect now is in stale closure and it is not aware of the change in userName but it is still showing the old userName because of closure
  // adding userName in dependency array will make sure that useEffect is aware of the change in userName and it will update the loginMessage accordingly but the timer starts from 0 again because of the change in userName and it is not what we want to achieve

  // with userEffect event,
  useEffect(() => {
    let loggedInTime = 0;
    const interval = setInterval(() => {
      loggedInTime++;
      setLoginMessage(`${getUserName()} - Logged in for ${loggedInTime} seconds`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>{loginMessage}</div>
      <input value={userName} onChange={(evt) => setUserName(evt.target.value)} />
    </div>
  );
};

export default MyUserInfo;
