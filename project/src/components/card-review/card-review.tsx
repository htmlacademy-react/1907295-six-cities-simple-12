import React from 'react';
import {useState} from 'react';

export default function ReviewCard (): JSX.Element {
  const [formReview, setformReview] = useState({
    rating: 0,
    reviews: ''
  });

  // const RatingStars = [
  //   {value:5, title:'perfect'},
  //   {value:4, title:'good'},
  //   {value:3, title:'not bad'},
  //   {value:2, title:'badly'},
  //   {value:1, title:'terribly'},
  // ]

  const fieldChangeHandler = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
    const {name, value} = evt.target;
    setformReview({...formReview, [name]:value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {/* {RatingStars.map((id) => (
          <div key={`${id}`}>
            <input className="form__rating-input visually-hidden"
              onChange={fieldChangeHandler}
              name="rating"
              value={`${id.value}`}
              id={`${id.value}`}
              type="radio"
            />
            <label htmlFor={`${id.value}`}
              className="reviews__rating-label form__rating-label"
              title={`${id.title}`}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </div>
        ))} */}
        <input className="form__rating-input visually-hidden" name="rating" value={formReview.rating} id="5-stars" type="radio" onChange={fieldChangeHandler} />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={fieldChangeHandler} />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={fieldChangeHandler} />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={fieldChangeHandler} />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={fieldChangeHandler} />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
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
