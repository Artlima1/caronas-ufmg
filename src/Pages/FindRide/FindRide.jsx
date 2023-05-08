import React from "react";
import {getAllRides, getWithFilters } from '../../utils/db'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const FindRide = () => {
  const [rides, setRides] = useState([]);
  const [filters, setFilters] = useState({});
  const navigate = useNavigate();

  const fetchRides = async ()=> {
    try{
      const currRides = await getAllRides();
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
          value: filters.to || "",
        },
        {
          key: "from",
          op: "==",
          value: filters.from || "",
        },
        {
          key: "time", 
          op: ">=",
          value: filters.time || new Date(),
        },
      ]);
      setRides(currRides);
    }
    catch(e){
      console.error(e);
    }
  }

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    fetchFilteredRides();
  };

  useEffect(()=>{
    fetchRides();
  },[])

  return (
    <div>
      <form onSubmit={handleFilterSubmit}>
        {/* <input type="text" name="Partida" onChange={handleFilterChange} placeholder="Partida" style="padding: 1%;border-radius: 10px 0px 0px 10px;" />
        <input type="text" name="Destino" onChange={handleFilterChange} placeholder="Destino" style="padding: 1%;"/>
        <input type="datetime-local" name="time" onChange={handleFilterChange} style="padding: 1%;border-radius: 0px 10px 10px 0px;"/> */}
        <input type="text" name="to" onChange={handleFilterChange} placeholder="Partida" />
        <input type="text" name="from" onChange={handleFilterChange} placeholder="Destino"/>
        <input type="datetime-local" name="time" onChange={handleFilterChange} />
        <button type="submit">Filtrar</button>
      </form>
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