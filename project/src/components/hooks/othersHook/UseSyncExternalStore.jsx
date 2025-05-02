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

  //TO demostrate offline go to network in dev tools and select offline
  const onlineStatus = useSyncExternalStore(subscribe, getSnapshot);
  const isOnline = onlineStatus ? 'Online' : 'Offline';

  return (
    <div>
      <div>Online status checker</div>
      <p>You are corrently {isOnline}</p>
    </div>
  );
};

export default UseSyncExternalStore;
