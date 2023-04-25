import React from "react";
import {getAllRides, getWithFilters } from '../../utils/db'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FindRide = () => {
  const [rides, setRides] = useState([]);
  const navigate = useNavigate();

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
        // {
        //   key: "to",
        //   op: "==",
        //   value: "UFMG"
        // },
        // {
        //   key: "from",
        //   op: "==",
        //   value: "Olegario"
        // },
        // {
        //   key: "time", 
        //   op: ">=",
        //   value: (new Date(2023, 3, 10))
        // },
      ]);
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
            <button onClick={()=>navigate(`/informacoes/${ride.id}`)} style={{margin: "10px"}}>
              {ride.from} - {ride.to} ({ride.time.toUTCString()})
            </button>
          )
        })
      }
    </div>
  );
};

export default FindRide;