import "./list.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import{ useLocation } from "react-router-dom";
import { format } from "date-fns"
import { useState } from "react";
import { DateRange } from "react-date-range";
import SearchIt from "../../components/searchIt/SearchIt";

const List = () => {

  const location = useLocation()
  const [destination,setDestination] = useState(location.state.destination)
  const [date,setDate] = useState(location.state.date)
  const [options,setOptions] = useState(location.state.options)
  
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listwrapper">
          <div className="listSearch">
            <h1 className="listTitle"> Search</h1>
            <div className="lisItem">
             <label>Destination</label>
             <input placeholder={destination} type="text" />
            </div>
            <div className="lisItem">
             <label>Check-in Date</label>
             <span>{`${format(date[0].startDate,"MM/dd/yyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyy"
             )}`}</span> 
             <DateRange
             onChange={item => setDate([item.selection])}
              minDate={new Date()}
              ranges={date}
              />
            </div>
            <div className="lsItem">
            <label>Options</label>
            <div className="lsOptions">
            <div className="lsOptionItem">
            <span className="lsOptionTex">
              Min price<small> per night</small>
              </span>
              <input type="number" className="lsOptionInput" />
            </div>
            <div className="lsOptionItem">
            <span className="lsOptionTex">
              Max price<small> per night</small>
              </span>
              <input type="number" className="lsOptionInput" />
            </div>
            <div className="lsOptionItem">
            <span className="lsOptionTex">
               adult
              </span>
              <input type="number" min={1} className="lsOptionInput" placeholder= {options.adult} />
            </div>
            <div className="lsOptionItem">
            <span className="lsOptionTex">
              Children
              </span>
              <input type="number" min={0}className="lsOptionInput" placeholder= {options.children}/>
            </div>
            </div>
            <div className="lsOptionItem">
            <span className="lsOptionTex">
              Room
              </span>
              <input type="number" min={1}className="lsOptionInput" placeholder= {options.room} />
            </div>
            </div> 
            <button>Search</button>
            </div>
          <div className="listResult">
            <SearchIt/>
            <SearchIt/>
            <SearchIt/>
            <SearchIt/>
            <SearchIt/>
            <SearchIt/>
            <SearchIt/>
            <SearchIt/>
            <SearchIt/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List
