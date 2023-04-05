import { Offer } from '../../../types/offers';

type NameListProp = {
  offer: Offer;
};

export default function NameList({offer}: NameListProp): JSX.Element {
  const {title} = offer;

  return (
    <div className="property__name-wrapper">
      <h1 className="property__name">
        {title}
      </h1>
    </div>
  );
}
