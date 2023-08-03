import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
        <img src="	https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2021/01/Tel-Aviv-Travel.jpg?w=2000&ssl=1" alt="" className="featuredImg" />
        <div className="featuredTitles">      
         <h1>Tell Aviv</h1>
         <h2>123787 tel</h2>
      </div>
    </div>
    <div className="featuredItem">
        <img src="https://static.leonardo-hotels.com/image/leonardo-jerusalem-pool-2_4b5e3721ba62675888fdabbda1b49b9d_2048x1360_desktop_2.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">      
         <h1>Leonardo Jerusalem </h1>
         <h2>12389087 tel</h2>
      </div>
    </div>
    <div className="featuredItem">
        <img src="https://static7.depositphotos.com/1224377/762/i/450/depositphotos_7622158-stock-photo-eilat-beach.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">      
         <h1>Eilat</h1>
         <h2>123 Tel</h2>
      </div>
    </div>
    </div>
  )
}

export default Featured
