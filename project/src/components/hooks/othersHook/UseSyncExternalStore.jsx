import React, { useSyncExternalStore } from 'react';

const UseSyncExternalStore = () => {
  const subscribe = (callback) => {
    window.addEventListener('online', callback);
    window.addEventListener('offline', callback);

    return () => {
      window.addEventListener('online', callback);
      window.addEventListener('offline', callback);
    };
  };

  const getSnapshot = () => {
    return navigator.onLine; // Browser API to check online status
  };

  // useSyncExternalStore is a hook that allows you to subscribe to an external store and get its current value
  // It takes two arguments: subscribe and getSnapshot
  // subscribe is a function that takes a callback and returns an unsubscribe function
  // getSnapshot is a function that returns the current value of the store

  const onlineStatus = useSyncExternalStore(subscribe, getSnapshot);
  const isOnline = onlineStatus ? 'Online' : 'Offline'; //TO demostrate offline go to network in dev tools and select offline

  return (
    <div>
      <div>Online status checker</div>
      <p>You are corrently {isOnline}</p>
    </div>
  );
};

export default UseSyncExternalStore;
