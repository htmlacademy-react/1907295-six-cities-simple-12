import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../const';
import {HelmetProvider} from 'react-helmet-async';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import RoomPage from '../../pages/room-page/room-page';
import ErrorPage from '../../pages/error-page/error-page';
import PrivateRoute from '../private-route/private-route';
import {Offers} from '../../types/offers';

type AppMainProps = {
  placesCount: number;
  placesCard: Offers;
}

function App({placesCount, placesCard}: AppMainProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <MainPage
                placesCount={placesCount}
                placesCard={placesCard}
              />
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <LoginPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Room}
            // element={<RoomPage placesCard={placesCard}/>}
            element={<RoomPage />}
          />
          <Route
            path='*'
            element={<ErrorPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
