import React from "react";
import { Button } from "antd";
import {createRide } from '../../utils/db'

const OfferRide = () => {

  const createNew = async (e) => {
    e.preventDefault();

    const ride = {
      owner: {
        name: "Olegario_UFMG",
        phone: "44815",
      },
      from: "Olegario",
      to: "UFMG",
      time: new Date(),
      seats: 3,
    }

    try{
      const id = await createRide(ride);
      console.log(id);
    }
    catch(e) {
      console.error(e);
    };

  }

  return (
    <div>
      <Button type="primary" block onClick={createNew}>
        CRIAR
      </Button>
    </div>
  );
};

export default OfferRide;