
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import "./hotels.css"
import { 
  
  faCircleArrowRight,
  faLocation, 
  faX} 
  from "@fortawesome/free-solid-svg-icons"
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const Hotels = () => {


    const [sliderNumber, setSlideNumber] = useState(0);
    const [opoen, setOpen] = useState(false);
    const photos=[
        {
           src:"https://fremont-hotel-and-casino-las-vegas.booked.net/data/Photos/OriginalPhoto/1212/121278/121278933/Fremont-Hotel-And-Casino-Las-Vegas-Exterior.JPEG"
        },

        {
            src:"https://super8fremont.my-vegashotels.com/data/Images/OriginalPhoto/12103/1210310/1210310473/las-vegas-super-8-north-strip-fremont-street-area-hotel-image-21.JPEG"
         },
         {
           src:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/a7/27/65/deluxe-two-doubles-bedroom.jpg?w=700&h=-1&s=1"
         },
         {
            src:"https://ahanetworkvietnam.files.wordpress.com/2021/10/aria-vegas-mgm-resorts-scaled-e1597315876808-1.jpg?w=1568"
         },
 
         {
             src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaPsuInfiY2t_TlQ6C5F4gR8BzGJE3dQaGeA&usqp=CAU"
          },
          {
            src:"https://super8fremont.my-vegashotels.com/data/Images/OriginalPhoto/12756/1275689/1275689911/las-vegas-super-8-north-strip-fremont-street-area-hotel-image-6.JPEG"
          },
    ];


const handleOpen= (i) => {
    setSlideNumber(i);
    setOpen(true);
};
    const handleMove = (direction) =>{
      let newSlideNumber;
      if(direction==="l"){
        newSlideNumber = sliderNumber === 0? 5: sliderNumber-1 
      }else{
        
        newSlideNumber = sliderNumber === 5 ? 5: sliderNumber+1 
      }

      setSlideNumber(newSlideNumber)
    
};
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotlesContainer">
       {opoen && <div className="slider">
        <FontAwesomeIcon icon={faX} className="close" onClick={()=>setOpen(false)}/>
        <FontAwesomeIcon icon={"left"} className="arrow" onClick={()=>handleMove("l")}/>
        <div className="sliderWrapper">
            <img src={photos[sliderNumber].src} alt="" className="sliderImg" />
        </div>
        
        <FontAwesomeIcon icon={"arrow-right"} className="arrow"onClick={()=>handleMove("r")} />
        </div>}
        <div className="hotelwrapper">
            <button className="bookNow">Reserve or
             Book Now!</button>
            
            <div className="hotelAddres">
            <FontAwesomeIcon icon={faLocation}/>
            <span>Elton stm 1234 Las Vegas</span>
        </div>
        <span className="hotelDistance">
            Excellent location 500m from center
        </span>
        <span className="hotlePriceHighlight">
        Book a stay over $114 at this property and get afree aiport taxi
        </span>
        <div className="hotelImages">
          {photos.map((photo,i)=>(
            <div className="hotelImgwrapper">
                <img
                 onClick={()=>handleOpen(i)} 
                 src={photo.src}
                  alt="" 
                  className="hotelImg" />
            </div>
          ))}
        </div>
        <div className="hotelDetails">
            <div className="hotelDetailTexts">
            <h1 className="hotelTitle">Novotel Nagim Vegas</h1>
            <p className="hotelDesc">
                Location a 5-minunte walk from St. Florian's Gate in Krakow,Tower 
                Street  Apartments has accommodations with air conditiong and free 
                WiFi. The units come with hardwood floors and feature a 
                fully equipped kitchenette with a microwood, a flat-screem TV,
                and a private bathroom with shower and a hairdryer. A fidge is 
                also  offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cltho Hall, Main Market Square and  Town Hall Tall Tower. The nearest
                airport is John Pau; II International Krak Balice 16.1 km
                from Tower Street Apartments,and the property offers a paid
                airport shuttle service.  
            </p>
            </div>
            <div className="hotelDetailPrice">
            <h1>Perfect for a 9-night stay!</h1>
            <span>
                Located in the real heart of krakow, this property has an
                excellent location score of 9.8!
            </span>
            <h2> 
                <b>$948</b> (9 nights)
                <button>Reserve or Book Now </button>
            </h2>
        </div>
       </div>
      </div>
      <MailList/>
      <Footer/>
      </div>
    </div>
  )
}

export default Hotels
