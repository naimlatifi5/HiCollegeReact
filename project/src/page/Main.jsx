import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
// import MainJSX from '../components/JSX/Main';
// import ListConditionalRendering from '../components/ListConditionalRendering/Main';
// import Components from '../components/Components/Main';
// import Props from '../components/Props/Main';
// import State from '../components/State/Main';
// import EventsForms from '../components/EventsForms/Main';
import UseState from '../components/hooks/UseState';
import UseEffectHook from '../components/hooks/useEffect/Main';
import UseLayoutEffect from '../components/hooks/UseLayoutEffect';
import UseRef from '../components/hooks/UseRef';
import UseMemoHook from '../components/hooks/UseMemo';
import UseCallback from '../components/hooks/useCallback/UseCallback';
import UseReducer from '../components/hooks/UseReducer';
import UseContext from '../components/hooks/UseContext';
import UseDebugValue from '../components/hooks/UseDebugValue';
import UseImperativeHandle from '../components/hooks/UseImperativeHandle';
import UseId from '../components/hooks/UseId';
import UseTransition from '../components/hooks/UseTransition';
import UseDeferredValue from '../components/hooks/UseDeferredValue';
import UseOptimistic from '../components/hooks/othersHook/UseOptimistic';
import UseActionState from '../components/hooks/othersHook/UseActionState';
import UseSyncExternalStore from '../components/hooks/othersHook/UseSyncExternalStore';
import UseInsertionEffect from '../components/hooks/othersHook/UseInsertionEffect';

// The Main component renders one of the three provided
// Routes (provided that one matches)
const Main = () => (
  <main>
    <Routes>
      <Route exact path='/' element={Home} />
      {/* <Route path='/jsx' element={MainJSX} />
        <Route path='/elements' element={elements} />
        <Route path='/state' element={State} />
        <Route path='/props' element={Props} />
        <Route path='/eventsForms' element={EventsForms} />
        <Route path='/listConditionRendering' element={ListConditionalRendering} /> */}
      <Route path='/useState' element={<UseState />} />
      <Route path='/useEffect' element={<UseEffectHook />} />
      <Route path='/useRef' element={<UseRef />} />
      <Route path='/useLayoutEffect' element={<UseLayoutEffect />} />
      <Route path='/useMemo' element={<UseMemoHook />} />
      <Route path='/useCallback' element={<UseCallback />} />
      <Route path='/useReducer' element={<UseReducer />} />
      <Route path='/useContext' element={<UseContext />} />
      <Route path='/imperativeHandler' element={<UseImperativeHandle />} />
      <Route path='/useDebugValue' element={<UseDebugValue />} />
      <Route path='/useId' element={<UseId />} />
      <Route path='/useTransition' element={<UseTransition />} />
      <Route path='/useDeferredValue' element={<UseDeferredValue />} />
      <Route path='/useOptimistic' element={<UseOptimistic />} />
      <Route path='/useActionState' element={<UseActionState />} />
      <Route path='/useSyncExternalStore' element={<UseSyncExternalStore />} />
      <Route path='/useInsertionEffect' element={<UseInsertionEffect />} />
    </Routes>
  </main>
);

export default Main;
