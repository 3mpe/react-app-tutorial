import React, { useMemo } from 'react';
import Image from 'next/image';
import Star from '../Star';

const HotelCard = ({ hotel }) => {
  const styles = { 
    hotelCard: 'hotelCard',
    cardHeader: 'cardHeader',
    hotelName: 'hotelName',
    scoreContainer: 'scoreContainer',
    scoreText: 'scoreText',
    scoreBox: 'scoreBox',
    imageContainer: 'imageContainer',
    hotelImage: 'hotelImage',
    favoriteButton: 'favoriteButton',
    specialOffer: 'specialOffer',
    propertyList: 'propertyList',
    actionColumn: 'actionColumn'
  };

  const propertyIconMap = {
    "cocukdostu": "bi-person-arms-up",
    "denizesifir": "bi-water",
    "sukaydiragi": "bi-droplet-half",
    "3sukaydiragi": "bi-droplet-half",
    "4sukaydiragi": "bi-droplet-half",
    "miniclub": "bi-joystick",
    "alakartrestoran": "bi-cup-straw",
    "spavesaglik": "bi-universal-access-circle",
    "yetiskinoteli": "bi-person-slash",
    "iskele": "bi-signpost-split",
    "aquapark": "bi-water",
    "animasyon": "bi-magic"
  };

  const getPropertyIcon = (code) => propertyIconMap[code] || "bi-check-circle";
  const renderStars = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} filled={i < hotel.star} className={styles.star} />
    ));
  }, [hotel.star, styles.star]);

  return (
    <div className={`mb-4 ${styles.hotelCard}`}>
      <div className="w-100">
        <div className={`d-flex justify-content-between align-items-center ${styles.cardHeader}`}>
          <h5 className={styles.hotelName}>{hotel.hotelName}</h5>
          <div className={`d-flex align-items-center text-end ${styles.scoreContainer}`}>
            <div>
              <div className="fw-bold">{hotel.customersPointText}</div>
              <div className={styles.scoreText}>{hotel.reviewCount} Değerlendirme</div>
            </div>
            <div className={styles.scoreBox}>{hotel.customerScore}</div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-5">
              <div className={styles.imageContainer}>
                <Image src={hotel.photoPath} alt={hotel.hotelName} fill className={styles.hotelImage} sizes="(max-width: 768px) 100vw, 280px" priority={false} />
                <button className={styles.favoriteButton} aria-label="Favorilere ekle">
                  <i className="bi bi-heart"></i>
                </button>
              </div>
            </div>
            <div className="col-md-5 ps-md-4 p-4">
              <p className="text-muted"><i className="bi bi-geo-alt-fill me-2"></i>{hotel.areaName} - {hotel.subAreaName} | {hotel.subAreaDetailName}</p>
              {hotel.campaignName && <p className={styles.specialOffer}>{hotel.campaignName}</p>}
              <div className='d-flex align-items-center'>
                <span className="badge text-bg-light border my-3 ml-2">
                  {hotel.class}
                </span>
                <span className="d-block ms-2">
                  {renderStars}
                </span>
              </div>
              
              <ul className={`row ${styles.propertyList}`}>
                {hotel.hotelPropertyList && hotel.hotelPropertyList.slice(0, 6).map(prop => (
                  <li key={prop.code} className="col-6 mb-2">
                    <i className={`${getPropertyIcon(prop.code)} me-2`}></i>{prop.name}
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default HotelCard;