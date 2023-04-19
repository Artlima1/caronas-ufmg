import React from "react";
import { Button } from "antd";
import { createRide } from '../../utils/db'
import { useAuth } from "../../utils/AuthProvider";

const OfferRide = () => {

  const { user } = useAuth();

  const createNew = async (e) => {
    e.preventDefault();


    const ride = {
      owner: {
        name: user.name,
        phone: user.phone,
      },
      from: "Lourdes",
      to: "UFMG",
      time: new Date(),
      seats: 2,
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