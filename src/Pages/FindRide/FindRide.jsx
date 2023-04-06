import React from "react";
import {getAllRides, getWithFilters } from '../../utils/db'
import { useEffect, useState } from "react";

const FindRide = () => {
  const [rides, setRides] = useState([]);

  const fetchRides = async ()=> {
    try{
      const currRides = await getAllRides();
      console.log(currRides);
      setRides([...currRides]);
    }
    catch(e){
      console.error(e);
    }
  }

  const fetchFilteredRides = async ()=> {
    try{
      const currRides = await getWithFilters([
        {
          key: "to",
          op: "==",
          value: "UFMG"
        },
        {
          key: "from",
          op: "==",
          value: "Olegario"
        },
        {
          key: "time", 
          op: ">=",
          value: (new Date(2023, 3, 10))
        },
      ]);
      console.log(currRides);
      setRides(currRides);
    }
    catch(e){
      console.error(e);
    }
  }

  useEffect(()=>{
    fetchFilteredRides();
  },[])

  return (
    <div>
      {
        rides.map( ride => {
          return(
            <li>
              {ride.from} - {ride.to} ({ride.time.toUTCString()})
            </li>
          )
        })
      }
    </div>
  );
};

export default FindRide;