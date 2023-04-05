import {Review} from '../../../types/reviews';
import ReviewItem from '../card-review-item/card-review-item';
import ReviewForm from '../card-review-form/card-review-form';

type ReviewsListProps = {
  reviews: Review[];
}

export default function ReviewList({reviews}:ReviewsListProps):JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((item) => (
          <li key={item.id} className="reviews__item">
            <ReviewItem review={item} />
          </li>
        ))}
      </ul>
      <ReviewForm />
    </section>
  );
}
