import React from "react";
import { Button, Space } from "antd";
import { SearchOutlined, CarOutlined, CarryOutOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  homeButtonRed: {
    height: '10vh',
    backgroundColor: '#ca0001',
    fontSize: "1.5em"
  },
  homeButtonBlack: {
    height: '10vh',
    backgroundColor: 'black',
    fontSize: "1.5em"
  },
  homeButtonIcon: {
    fontSize: "1.5em",
    alignSelf: "start"
  },
});



const Home = () => {
  const classes = useStyles();


  return (
    <Space direction="vertical" size="large" style={{ width: "100%", height: "100%", "justify-content": "space-evenly" }}>
      <Button type="primary" block className={classes.homeButtonRed} icon={<SearchOutlined className={classes.homeButtonIcon}/>}>
        PROCURAR
      </Button>
      <Button type="primary" block className={classes.homeButtonBlack} icon={<CarOutlined className={classes.homeButtonIcon}/>}>
        OFERECER
      </Button>
      <Button type="primary" block className={classes.homeButtonRed} icon={<CarryOutOutlined className={classes.homeButtonIcon}/>}>
        ATIVAS
      </Button>
      <Button type="primary" block className={classes.homeButtonBlack} icon={<FieldTimeOutlined className={classes.homeButtonIcon}/>}>
        HISTORICO
      </Button>
    </Space>
  );
};

export default Home;
