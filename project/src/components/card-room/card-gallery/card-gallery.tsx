import {Offer} from '../../../types/offers';

type GalleryListProps = {
  offer: Offer;
};

export default function GalleryList ({offer}: GalleryListProps):JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {offer.images.map ((images) => (
          <div key={images} className="property__image-wrapper">
            <img className="property__image" src={images} alt="Photo studio"/>
          </div>))}
      </div>
    </div>
  );
}
