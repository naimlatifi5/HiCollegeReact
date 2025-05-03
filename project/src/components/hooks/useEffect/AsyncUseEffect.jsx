import React, { useState, useEffect } from 'react';
import { Promise } from 'bluebird';

Promise.config({ cancellation: true });
const fetchUser = () => {
  return new Promise((resolve) => {
    console.count('Fetching user....');
    setTimeout(() => {
      let response = { id: 1, name: 'Naim', lastName: 'Latifi' };
      resolve(response);
    }, 2000);
  });
};

const AsyncUseEffect = () => {
  let [id, setId] = useState('loading...');
  let [name, setName] = useState('loading...');
  let [lastName, setLastName] = useState('loading...');

  // useEffect hook
  useEffect(() => {
    let promise = fetchUser().then((user) => {
      let { id, name, lastName } = user;
      setId(id);
      setName(name);
      setLastName(lastName);
    });
    // clean up function and on component unmount set promise to cancel
    // this is useful when you have a lot of data and you want to cancel the request
    return () => {
      promise.cancel();
    };
  }, []);
  return (
    <div className='wrapper-user'>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Last name: {lastName}</p>
    </div>
  );
};

export default AsyncUseEffect;
