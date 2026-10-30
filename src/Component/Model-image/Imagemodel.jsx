import { useParams } from "react-router-dom"
import './Imagemodel.css'
import{ useActions} from '../../store/useStore'
import { useHotelsQuery } from "../../services/HandleAPI"
import Loading from "../Loading/Loading"
import { useState } from "react"
const Imagemodel = () => {
   const {setImages}=useActions()
   const [photo,setPhoto]=useState(null)
    const {id}=useParams();
const{data:hotels,isLoading}=useHotelsQuery()
if(!hotels || isLoading) return <Loading/>
const hotel=hotels.find((hotel)=>String(hotel.id)===id)
  if(!hotel) return <div>Hotel Not Found</div>
const handleId = (src) => setPhoto(src);


 
  return (
     <>
  <div className='shadow'></div>
  <div className='moudel'>
<span onClick={setImages}>X</span>
<div className='allImages'>
  <ul>
<a href="#out"> <li> Out door</li></a>
<a href="#rooms"> <li>Rooms</li></a>
<a href="#resturant"> <li>Resturant</li></a>
  <a href="#entertainment"><li>Entertainment</li></a>
 <a href="#public"><li>Public Place</li></a>
</ul>
<div className="boxes">
<div className='box'>
  <h2 id='out'>Out door</h2>
  <div className='photos'>  
    {hotel.Hotel_images.outImage.map((item,index)=><img onClick={()=>handleId(item)}  key={index} src={item} alt='not found' />)}
</div>
</div>
<div className="box">

  <h2 id='rooms'>Rooms</h2>
  <div className='photos'>  {hotel.Hotel_images.roomImage.map((item,index)=><img onClick={()=>handleId(item)} key={index} src={item}/>)}
</div>
</div>
<div className="box">
  <h2 id='resturant'>Resturant</h2>
<div className='photos'>{hotel.Hotel_images.foodImage.map((item,index)=><img onClick={()=>handleId(item)} key={index} src={item}/>)}
</div>
</div>
<div className="box">

  <h2 id='entertainment'>Entertainment</h2>
<div className='photos'>    {hotel.Hotel_images.animatiesImage.map((item,index)=><img onClick={()=>handleId(item)} key={index} src={item}/>)}
</div>
</div>
<div className="box">
  <h2 id='public'>Public Place</h2>
<div className='photos'>    {hotel.Hotel_images.publicImage.map((item,index)=><img onClick={()=>handleId(item)} key={index} src={item}/>)}
</div>
</div>
</div>
</div>
</div>
{photo && (
  
  <div className='preview' onClick={() => setPhoto(null)}>
    <span onClick={() => setPhoto(null)}>X</span>
    <img src={photo} alt="preview" />
  </div>
)}
</>
  )
}

export default Imagemodel