import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../Utils/appStore' 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Body from './Components/Body';
import Feed from './Components/Feed';
import Login from './Components/Login';
import Profile from './Components/Profile';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
            <Route index element={<Feed />} /> default child
              <Route path="login" element={<Login />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}


export default App;
