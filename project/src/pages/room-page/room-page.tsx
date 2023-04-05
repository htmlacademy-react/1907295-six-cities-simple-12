import {Helmet} from 'react-helmet-async';
import {useParams} from 'react-router-dom';
import {Offers, Offer} from '../../types/offers';
import {Reviews} from '../../types/reviews';
import Header from '../../components/header/header';
import ReviewList from '../../components/card-room/crad-review-list/card-review-list';
import HostList from '../../components/card-room/card-inside/card-inside';
import InsideList from '../../components/card-room/card-inside/card-inside';
import PriceList from '../../components/card-room/card-price/card-price';
import FeaturesList from '../../components/card-room/card-features/card-features';
import RatingList from '../../components/card-room/card-rating/card-rating';
import NameList from '../../components/card-room/card-name/card-name';
import GalleryList from '../../components/card-room/card-gallery/card-gallery';

type RoomPageProps = {
  offers: Offers;
  reviews: Reviews;
}

export default function RoomPage ({offers, reviews}: RoomPageProps): JSX.Element {
  const {id} = useParams();
  const offer = offers.find((item) => item.id === Number(id)) as Offer;

  return (
    <>
      <Header />
      <main className="page__main page__main--property" >
        <Helmet>
          <title>Объявления</title>
        </Helmet>
        <section className="property">
          <GalleryList offer={offer}/>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium ? (
                <div className="place-card__mark">
                  <span>Premium</span>
                </div>
              ) : ('')}
              <NameList offer={offer}/>
              <RatingList offer={offer}/>
              <FeaturesList offer={offer}/>
              <PriceList offer={offer}/>
              <InsideList offer={offer}/>
              <HostList offer={offer}/>
              <ReviewList reviews={reviews} />
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
      </main>
    </>
  );
}
