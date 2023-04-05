import { Offer } from '../../../types/offers';

type FeaturesListProp = {
  offer: Offer;
};

export default function FeaturesList({offer}: FeaturesListProp): JSX.Element {
  const {type, bedrooms, maxAdults} = offer;

  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {type}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {bedrooms}
      </li>
      <li className="property__feature property__feature--adults">
        {maxAdults}
      </li>
    </ul>
  );
}
