// import React from 'react';
// import {useState} from 'react';

// export default function ReviewCard (): JSX.Element {
//   const [formReview, setformReview] = useState({
//     rating: 0,
//     reviews: ''
//   });

//   // const RatingStars = [
//   //   {value:5, title:'perfect'},
//   //   {value:4, title:'good'},
//   //   {value:3, title:'not bad'},
//   //   {value:2, title:'badly'},
//   //   {value:1, title:'terribly'},
//   // ]

//   const fieldChangeHandler = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
//     const {name, value} = evt.target;
//     setformReview({...formReview, [name]:value});
//   };

//   return (
//     <form className="reviews__form form" action="#" method="post">
//       <label className="reviews__label form__label" htmlFor="review">Your review</label>
//       <div className="reviews__rating-form form__rating">
//         {/* {RatingStars.map((id) => (
//           <div key={`${id}`}>
//             <input className="form__rating-input visually-hidden"
//               onChange={fieldChangeHandler}
//               name="rating"
//               value={`${id.value}`}
//               id={`${id.value}`}
//               type="radio"
//             />
//             <label htmlFor={`${id.value}`}
//               className="reviews__rating-label form__rating-label"
//               title={`${id.title}`}
//             >
//               <svg className="form__star-image" width="37" height="33">
//                 <use xlinkHref="#icon-star"></use>
//               </svg>
//             </label>
//           </div>
//         ))} */}
//         <input className="form__rating-input visually-hidden" name="rating" value={formReview.rating} id="5-stars" type="radio" onChange={fieldChangeHandler} />
//         <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
//           <svg className="form__star-image" width="37" height="33">
//             <use xlinkHref="#icon-star"></use>
//           </svg>
//         </label>

//         <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={fieldChangeHandler} />
//         <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
//           <svg className="form__star-image" width="37" height="33">
//             <use xlinkHref="#icon-star"></use>
//           </svg>
//         </label>

//         <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={fieldChangeHandler} />
//         <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
//           <svg className="form__star-image" width="37" height="33">
//             <use xlinkHref="#icon-star"></use>
//           </svg>
//         </label>

//         <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={fieldChangeHandler} />
//         <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
//           <svg className="form__star-image" width="37" height="33">
//             <use xlinkHref="#icon-star"></use>
//           </svg>
//         </label>

//         <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={fieldChangeHandler} />
//         <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
//           <svg className="form__star-image" width="37" height="33">
//             <use xlinkHref="#icon-star"></use>
//           </svg>
//         </label>
//       </div>
//       <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={fieldChangeHandler}></textarea>
//       <div className="reviews__button-wrapper">
//         <p className="reviews__help">
//           To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
//         </p>
//         <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
//       </div>
//     </form>
//   );
// }

// import React from 'react';
// import {useState} from 'react';

// export default function ReviewCard (): JSX.Element {
//   const ratingStars = [
//     {value: 5, title: 'perfect', id: '5-stars'},
//     {value: 4, title: 'good', id: '4-stars'},
//     {value: 3, title: 'not bad', id: '3-stars'},
//     {value: 2, title: 'badly', id: '2-stars'},
//     {value: 1, title: 'terribly', id: '1-stars'}
//   ];

//   // const [formReview, setformReview] = useState({
//   //   rating: 0,
//   //   review: '',
//   // });

//   const [formReview, setformReview] = useState([false, false, false, false, false]);

//   const fieldChangeHandler = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
//     const {name, value} = evt.target;
//     setformReview({...formReview, [name]:value, });
//   };

//   return (
//     <form className="reviews__form form" action="#" method="post">
//       <label className="reviews__label form__label" htmlFor="review">Your review</label>
//       <div className="reviews__rating-form form__rating">
//         {ratingStars.map((item) => (
//           <div key={item.value}>
//             <input
//               className="form__rating-input visually-hidden"
//               name="rating"
//               value={item.value}
//               id={item.id}
//               type="radio"
//               onChange={fieldChangeHandler}
//               checked={formReview[item.value]}
//             />
//             <label htmlFor={item.id}
//               className="reviews__rating-label form__rating-label"
//               title={item.title}
//             >
//               <svg className="form__star-image" width="37" height="33">
//                 <use xlinkHref="#icon-star"></use>
//               </svg>
//             </label>
//           </div>
//         ))}
//       </div>
//       <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={fieldChangeHandler}></textarea>
//       <div className="reviews__button-wrapper">
//         <p className="reviews__help">
//           To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
//         </p>
//         <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
//       </div>
//     </form>
//   );
// }

// ['1','2','3','4','5'].map ((item) => (
//   <Fragment key={item}>
//       <input
//         className="form__rating-input visually-hidden"
//         name="rating"
//         value={item}
//         id={'${item}-stars'}
//         type="radio"
//         onChange={fieldChangeHandler}
//         checked={currentChecked === item}
//       />
//       <label htmlFor={'${item}-stars'}
//         className="reviews__rating-label form__rating-label"
//         title={item.title}
//       >
//         <svg className="form__star-image" width="37" height="33">
//           <use xlinkHref="#icon-star"></use>
//         </svg>
//       </label>
//   </Fragment>
// ))

import React from 'react';
import {useState} from 'react';

export default function ReviewCard (): JSX.Element {
  const ratingStars = [
    {value: 5, title: 'perfect', id: '5-stars'},
    {value: 4, title: 'good', id: '4-stars'},
    {value: 3, title: 'not bad', id: '3-stars'},
    {value: 2, title: 'badly', id: '2-stars'},
    {value: 1, title: 'terribly', id: '1-stars'}
  ];

  const [formReview, setformReview] = useState([false, false, false, false, false]);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingStars.map((item, id) => (
          <div key={item.id}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={item.value}
              id={item.id}
              type="radio"
              checked={formReview[id]}
              onChange={({target}: React.ChangeEvent<HTMLInputElement>) => {
                const value = target.checked;
                setformReview([...formReview.slice(0), value, ...formReview.slice(1)]);
              }}
            />
            <label htmlFor={item.id}
              className="reviews__rating-label form__rating-label"
              title={item.title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </div>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}
