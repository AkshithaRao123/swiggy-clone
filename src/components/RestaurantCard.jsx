import { CDN_URL } from '../utils/constants';
import { FiClock } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
  } = resData?.info;

  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="res-card">
      <div className="res-img">
        <img
          className="res-logo"
          src={CDN_URL + cloudinaryImageId}
          alt="Biryani"
        />
      </div>

      <div className="res-card-content">
        <h3>{name}</h3>
        <hr />
        <span>{cuisines.join(', ')}</span>
        <h4 className="avg-rating">
          <span className="icons">
            <AiOutlineStar />
          </span>
          <span>{avgRating} stars</span>
        </h4>
        <h4 className="item-price">{costForTwo}</h4>
        <h4 className="time">
          <span className="icons">
            <FiClock />
          </span>
          <span> {deliveryTime} minutes</span>
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
