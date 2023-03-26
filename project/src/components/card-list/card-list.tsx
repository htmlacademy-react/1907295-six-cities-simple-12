import {useState} from 'react';
import OfferCard from '../card-offer/card-offer';
import {Offers} from '../../types/offers';

type ListCardProps = {
  offers: Offers;
};

export default function ListCard ({offers}: ListCardProps): JSX.Element {
  const [activeId, setActiveId] = useState(0);

  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          key={`${offer.id}`}
          offer={offer}
          onMouseOverHandler={(id) => setActiveId(id)}
          activeId={activeId}
        />
      ))}
    </>
  );
}
