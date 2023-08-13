import "./featuredProp.css"

const FeaturedPop = () => {
  return (
    <div className="fp">
    <div className="fpItem">
    <img
     src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/179362750.jpg?k=fd442de52ed044b3eb928255e6c0f3a3499c3885616123982384732064625abb&o=&hp=1" 
     alt=""
     className="fpImg"
      />
    <span className="fpName"> Aparthotel Tell Aviv</span>
    <span className="fpCity"> Tell Aviv</span>
    <span className="fpPrice"> Starting from $120</span>
    <div className="fpRating">
    <button>8.9</button>
    <span>Excellent</span>
    </div>
    </div>
    <div className="fp">
    <img src="https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/7/0/106/179/502/L_club_garden_room_1_300_dpi_O/Leonardo-Club-Hotel-Eilat-Room.jpg?tr=w-780%2Ch-437%2Cfo-auto" alt=""className="fpImg" />0
    <span className="fpName"> Aparthotel Leonardo Hotel Jerusalem </span>
    <span className="fpCity"> Israel</span>
    <span className="fpPrice"> Starting from $120</span>
    <div className="fpRating">
    <button>8.9</button>
    <span>Excellent</span>
    </div>
   
    <img src="https://static.leonardo-hotels.com/image/herods-palace-executive-room-1_4e9550a9687b0eeeef6947b7f4d7d0df_1200x801_mobile_3.jpg" alt=""className="fpImg" />
    <span className="fpName"> Aparthotel Mitzpe Romon</span>
    <span className="fpCity">  Israel</span>
    <span className="fpPrice"> Starting from $120</span>
    <div className="fpRating">
    <button>8.9</button>
    <span>Excellent</span>
    </div>
    <img src="https://lh3.googleusercontent.com/gps-proxy/AF-Tc0Tr_VmQC1hILRZO66kt_Xvs96ejn5nznQ1iq4JckGu5FPnpNaVGDnynZx1hrzWL0yx5Q2rGRrI_FJzXoMaxbHWcoMyT57dR7xGNu9_zL573ul8fOH8KNem4RWwcaSt4RVu9j3hDPtjaNADgLdC3RM-R2HwogwGADhIoOnHUgxpwzfMFfl9BZIv6=w592-h404-n-k-no-v1" alt=""className="fpImg" />
    <span className="fpName"> Aparthotel Eilot Kibbutz Ktura Eilat</span>
    <span className="fpCity">  Israel</span>
    <span className="fpPrice"> Starting from $120</span>
    <div className="fpRating">
    <button>8.9</button>
    <span>Excellent</span>
    </div>
    </div>
    </div>
  );
};

export default FeaturedPop
