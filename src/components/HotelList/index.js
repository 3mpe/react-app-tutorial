"use client"
import React, { useState } from 'react';
import HotelCard from '../HotelCard';
import Pagination from '../Pagination';

const HotelList = ({ hotels = [] }) => {
  'use client';
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 5;
  const totalPages = Math.ceil(hotels.length / ITEMS_PER_PAGE);
  const currentHotels = hotels.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  
  const handlePageChange = (page) => { 
    if (page < 1 || page > totalPages) return; 
    setCurrentPage(page); 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  return (
    <div>
      {currentHotels.map((hotel) => <HotelCard key={hotel.hotelId} hotel={hotel} />)}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default HotelList;