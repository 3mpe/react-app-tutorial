import HotelList from "@/components/HotelList";
import hotelService from "@/services/hotel.service";

export default async function Home() {
  let hotels = [];
  let errors = null

  try {
    const data = await hotelService.getHotels();
    hotels = data.resultObject.hotelList || [];
  } catch (err) {
    errors = err.message;
  }

  return (
    <div className="container mt-4">
      {errors ? (
        <div className="alert alert-danger text-center" role="alert">
          <strong>Bir sorun oluştu!</strong> {errors}
        </div>
      ) : hotels && hotels.length > 0 ? (
        <HotelList hotels={hotels} />
      ) : (
        <div className="alert alert-warning text-center" role="alert">
          Gösterilecek otel bulunamadı.
        </div>
      )}
    </div>
  );
};
