import Header from '../../pages/header/header';
import MainPage from '../../pages/main-page/main-page';

type AppMainProps = {
  placesCount: number;
};

function App({placesCount}: AppMainProps): JSX.Element {
  return (
    <>
      <Header />
      <MainPage placesCount={placesCount} />
    </>
  );
}

export default App;
