import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShimmerMenu from './ShimmerMenu';
import { CDN_URL } from '../utils/constants';
import { MENU_API } from '../utils/constants';
import { FiClock } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch("https://proxy.cors.sh/" + MENU_API + resId,
      {
        headers: {
          'x-cors-api-key': 'temp_4493582dc4066fefcda79a33427d4aeb'
        }
      }
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <ShimmerMenu />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    avgRating,
    deliveryTime,
  } = resInfo?.cards[2]?.card?.card?.info;

  const cards =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards; //[5]?.card?.card;

  console.log("itemcards", cards);
  console.log("resInfo", resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards);

  return (
    <div className="menu">
      <header className="menu-header">
        <div className="menu-header-left">
          <img src={CDN_URL + cloudinaryImageId} alt="Restaurant Info" />
        </div>
        <div className="menu-header-right">
          <div className="top">
            <h1>{name}</h1>
            <h3>{cuisines.join(', ')}</h3>
          </div>
          <div className="bottom">
            <h4 className="avg-rating">
              <span
                className="icons"
                style={{
                  position: 'relative',
                  top: '2px',
                  marginRight: '3px',
                }}
              >
                <AiOutlineStar />
              </span>
              <span>{avgRating}</span>
            </h4>
            <h4 className="time">
              <span
                className="icons"
                style={{
                  position: 'relative',
                  top: '2px',
                  marginRight: '3px',
                }}
              >
                <FiClock />
              </span>
              <span> {deliveryTime} MINS</span>
            </h4>
            <h3>{costForTwoMessage}</h3>
          </div>
        </div>
      </header>

      <div className="menu-main">
        <h1>Menu</h1>
        <div className='category'>
          {cards.map((cardRes, i) => (
            <div key={i + 1} className="menu-card">
              <h2>{cardRes?.card?.card?.title}</h2>
              {
                cardRes?.card?.card?.itemCards ?
                cardRes?.card?.card?.itemCards.map((item) => (
                  <div key={item?.card?.info?.id} className='menu-item'>
                    <img src={CDN_URL + item?.card?.info?.imageId} />
                    {item?.card?.info?.name}
                  </div>
                ))
                :
                <div key={i}></div>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
