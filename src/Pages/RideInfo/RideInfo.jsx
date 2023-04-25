import React, {useEffect, useState} from "react";
import { Space, Descriptions, Button } from "antd";
import { makeStyles } from "@mui/styles";
import { getById } from "../../utils/db";

const id = 'Avm28uYlS4FSsxO5zLza'

const useStyles = makeStyles({
  whatsappButton: {
    height: "10vh",
    backgroundColor: "#258f35",
    fontSize: "1.5em",
  },
});

const formatDate = (date) => {
  try {
    const day = date.getDay() > 10 ? date.getDay() : `0${date.getDay()}`;
    const month = date.getMonth() > 10 ? date.getMonth() : `0${date.getMonth()}`;
    const year = date.getFullYear();
    return (`${day}/${month}/${year}`);
  } catch (error) {
    console.error(error);
    return "Invalid";
  }
}

const formatTime = (date) => {
  try {
    const hour = date.getHours() > 10 ? date.getHours() : `0${date.getHours()}`;
    const minutes = date.getMinutes() > 10 ? date.getMinutes() : `0${date.getMinutes()}`;
    return (`${hour}:${minutes}`);
  } catch (error) {
    console.error(error);
    return "Invalid";
  }
}

const RideInfo = () => {
  const [ride, setRide] = useState({});
  const classes = useStyles();

  const fetchRide = async () => {
    try {
      const ride = await getById(id);
      setRide({...ride});
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    fetchRide();
  },[])

  return (
    <>
      <Space direction="vertical">
        <Descriptions title="Informações da Carona">
          <Descriptions.Item label="Motorista">{ride?.owner?.name}</Descriptions.Item>
          <Descriptions.Item label="Celular">{ride?.owner?.phone}</Descriptions.Item>
          <Descriptions.Item label="De">{ride?.from}</Descriptions.Item>
          <Descriptions.Item label="Para">{ride?.to}</Descriptions.Item>
          <Descriptions.Item label="Vagas">{ride?.seats}</Descriptions.Item>
          <Descriptions.Item label="Data">{formatDate(ride?.time)}</Descriptions.Item>
          <Descriptions.Item label="Hora">{formatTime(ride?.time)}</Descriptions.Item>
        </Descriptions>
          <Button type="primary" size="large" className={classes.whatsappButton} onClick={()=>{
            window.open(`https://api.whatsapp.com/send/?phone=${ride?.owner?.phone}&text=Boa+tarde&type=phone_number&app_absent=0`)
          }}>
            Enviar Whatsapp
          </Button>
      </Space>
    </>
  );
};

export default RideInfo;