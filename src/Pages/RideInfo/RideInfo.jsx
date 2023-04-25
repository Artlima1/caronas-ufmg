import React from "react";
import { Space, Descriptions, Button } from "antd";
import ReactWhatsapp from 'react-whatsapp';
import { makeStyles } from "@mui/styles";

const ride = {
  owner: {
    name: "Arthur Lima",
    phone: "+5531992489918",
  },
  from: "Lourdes",
  to: "UFMG",
  time: new Date(2023, 3, 10),
  seats: 2,
}

const formatDate = (date) => {
  const day = date.getDay() > 10 ? date.getDay() : `0${date.getDay()}`;
  const month = date.getMonth() > 10 ? date.getMonth() : `0${date.getMonth()}`;
  const year = date.getFullYear();
  return (`${day}/${month}/${year}`);
}

const formatTime = (date) => {
  const hour = date.getHours() > 10 ? date.getHours() : `0${date.getHours()}`;
  const minutes = date.getMinutes() > 10 ? date.getMinutes() : `0${date.getMinutes()}`;
  return (`${hour}:${minutes}`);
}

const useStyles = makeStyles({
  whatsappButton: {
    height: "10vh",
    backgroundColor: "#258f35",
    fontSize: "1.5em",
  },
});

const RideInfo = () => {
  const classes = useStyles();

  return (
    <>
      <Space direction="vertical">
        <Descriptions title="Informações da Carona">
          <Descriptions.Item label="Motorista">{ride.owner.name}</Descriptions.Item>
          <Descriptions.Item label="Celular">{ride.owner.phone}</Descriptions.Item>
          <Descriptions.Item label="De">{ride.from}</Descriptions.Item>
          <Descriptions.Item label="Para">{ride.to}</Descriptions.Item>
          <Descriptions.Item label="Vagas">{ride.seats}</Descriptions.Item>
          <Descriptions.Item label="Data">{formatDate(ride.time)}</Descriptions.Item>
          <Descriptions.Item label="Hora">{formatTime(ride.time)}</Descriptions.Item>
        </Descriptions>
          <Button type="primary" size="large" className={classes.whatsappButton} onClick={()=>{
            window.open(`https://api.whatsapp.com/send/?phone=${ride.owner.phone}&text=Boa+tarde&type=phone_number&app_absent=0`)
          }}>
            Enviar Whatsapp
          </Button>
      </Space>
    </>
  );
};

export default RideInfo;