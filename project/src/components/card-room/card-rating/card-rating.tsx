import { Offer } from '../../../types/offers';

type RatingListProp = {
  offer: Offer;
};

export default function RatingList({offer}: RatingListProp): JSX.Element {
  const {rating} = offer;
  const percentRating = `${rating / 5 * 100}%`;

  return (
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <span style={{width: percentRating}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">{rating}</span>
    </div>
  );
}
