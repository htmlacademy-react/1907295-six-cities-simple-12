import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {filterOffers} from '../../store/action';
import {FILTER} from '../const';

export default function FilterOffer (): JSX.Element {

  const [isOpen, setIsOpen] = useState(false);
  const onClickOpen = () => setIsOpen(!isOpen);

  const currentOption = useAppSelector((state) => state.option);
  const dispatch = useAppDispatch();

  return (
    <form className="places__sorting" action="#" method="get" onClick={onClickOpen}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {FILTER.map((option) => (
          <li
            key={option}
            className={`places__option ${option === currentOption ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => {
              dispatch(filterOffers(option));
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}
