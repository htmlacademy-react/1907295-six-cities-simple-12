import Header from '../../components/header/header';

function ErrorPage (): JSX.Element {
  return (
    <>
      <Header />
      <main className="page__main">
        <div >
          <h1 className="visually-hidden">404 Not Found</h1>
          <img src="img/not-found.png" width={'100%'} alt="404 Not Found" />
        </div>
      </main>
    </>
  );
}

export default ErrorPage;
