import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { useHotelsQuery } from '../../services/HandleAPI';
import Loading from '../Loading/Loading';
import './Rooms.css';

const Rooms = () => {
  const { id } = useParams();
  const navigate = useNavigate();



  const { data: hotels, isLoading } = useHotelsQuery();

  if (isLoading || !hotels) return <Loading />;
  
  const hotel = hotels.find((hotel) => String(hotel.id) === id);
  if (!hotel) return null;

 



  return (
    <div className="rooms">
      <hr />
      <div className="rooms-details">
        {hotel.rooms.map((room) => {
        
          return (
            <div key={room.id} className="room">
              <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                loop={true}
                spaceBetween={5}
                navigation
              >
                {room.images.map((image, idx) => (
                  <SwiperSlide key={idx} className="slider-images">
                    <img src={image} alt={room.title}loading='lazy' />
                  </SwiperSlide>
                ))}
              </Swiper>

              <h3>{room.title}</h3>

              <div className="stars">
                {Array.from({ length: room.rating }).map((_, idx) => (
                  <div key={idx}><FaStar /></div>
                ))}
              </div>

              <div className="aminities">
                {room.aminities.map((item, idx) => (
                  <div key={idx} className="aminity">
                    <div className="icon">{item.icons}</div>
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>

             

             

            

              <button
                onClick={() => {
                    navigate(`/booking-room/${room.id}`)
                }}
                className="book"
              >
                Book Now
              </button>
              <p>You will not be charged yet</p>
            </div>
          );
        })}
      </div>

    
    </div>
  );
};

export default Rooms;