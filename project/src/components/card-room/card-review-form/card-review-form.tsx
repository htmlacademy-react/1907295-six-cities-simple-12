import { Fragment, ChangeEvent, useState } from 'react';

export default function ReviewForm (): JSX.Element {
  const reviewFormCard = [
    {value: 5, title: 'perfect', id: '5-stars'},
    {value: 4, title: 'good', id: '4-stars'},
    {value: 3, title: 'not bad', id: '3-stars'},
    {value: 2, title: 'badly', id: '2-stars'},
    {value: 1, title: 'terribly', id: '1-stars'}
  ];

  const [formReview, setformReview] = useState({
    rating: '',
    review: ''
  });

  const fieldChangeHandler = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void => {
    const {name, value} = evt.target;
    setformReview({...formReview, [name]:value, });
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {reviewFormCard.map((item) => (
          <Fragment key={item.title}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={item.value}
              id={item.id}
              type="radio"
              onChange={fieldChangeHandler}
            />
            <label htmlFor={item.id}
              className="reviews__rating-label form__rating-label"
              title={item.title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={fieldChangeHandler}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}
