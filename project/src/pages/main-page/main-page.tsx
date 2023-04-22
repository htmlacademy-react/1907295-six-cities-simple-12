import {Helmet} from 'react-helmet-async';
import {useAppSelector} from '../../hooks/index';
import Header from '../../components/header/header';
import ListCard from '../../components/card-list/card-list';
import Location from '../../components/location/location';
import FilterOffer from '../../components/filter/filter';
import Map from '../../components/map/map';

function MainPage (): JSX.Element {

  const selectedCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);

  return (
    <>
      <Header />
      <main className="page__main page__main--index">
        <Helmet>
          <title>Главная страница</title>
        </Helmet>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Location />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {selectedCity}</b>
              <FilterOffer />
              <div className="cities__places-list places__list tabs__content">
                <ListCard offers={offers} />
              </div>
            </section>
            <div className="cities__right-section">
              <Map offers={offers} place="cities" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainPage;
