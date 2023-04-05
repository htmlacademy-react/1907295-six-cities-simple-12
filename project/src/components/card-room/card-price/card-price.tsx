import { Offer } from '../../../types/offers';

type PriceListProp = {
  offer: Offer;
};

export default function PriceList({offer}: PriceListProp): JSX.Element {
  const {price} = offer;

  return (
    <div className="property__price">
      <b className="property__price-value">&euro;{price}</b>
      <span className="property__price-text">&nbsp;night</span>
    </div>
  );
}
