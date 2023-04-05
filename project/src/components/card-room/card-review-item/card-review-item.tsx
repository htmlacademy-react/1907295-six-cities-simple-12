import { Fragment } from 'react';
import { Review } from '../../../types/reviews';

type ReviewItemProps = {
  review: Review;
};

export default function ReviewItem ({review}: ReviewItemProps): JSX.Element {
  const {user, text, date, rating} = review;
  const percentRating = `${rating / 5 * 100}%`;

  return (
    <Fragment>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: percentRating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{date}</time>
      </div>
    </Fragment>
  );
}


