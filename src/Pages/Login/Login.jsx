import React from "react";
import { useAuth } from "../../utils/AuthProvider";
import { Button, Form, Input, InputNumber } from 'antd';

const Login = () => {
  const {onLogin} =  useAuth();

  const onFinish = (values) => {
    login(values.nome, values.telefone, values.email)
    console.log('Login success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  const validateMessages = {
    required: 'Por favor, informe seu ${name}!',
    types: {
      email: 'Informe um ${name} válido!',
      number: 'Informe um ${name} válido!',
    },
  };
  
  const login = (x1, x2, x3) => {
        onLogin({
          name: x1, 
          email: x2, 
          phone: x3
        });
      }
  
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      validateMessages={validateMessages}
    >
  
      {/* Item de formulario para nome */}
      <Form.Item
        label="Nome"
        name="nome"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
  
      {/* Item de formulario para telefone */}
      <Form.Item
        label="Telefone"
        name="telefone"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
  
      {/* Item de formulario para e-mail */}
      <Form.Item
        label="E-mail UFMG"
        name="email"
        rules={[
          {
            required: true,
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
  
      {/* Item de formulario para autenticar */}
      <Form.Item
        wrapperCol={{
          offset: 12,
          span: 6,
        }}
      >
        <Button onclick={login} type="primary" htmlType="submit">
          Autenticar
        </Button>
      </Form.Item>
    </Form>
    
  );
}

export default Login;


//const Login = () => {
//  const {onLogin} =  useAuth();
//
//  const login = (e) => {
//    e.preventDefault();
//    onLogin({
//      name: nome,
//      email: "arthurdeolima@ufmg.br",
//      phone: "31992489918"
//    });
//  }

//  return (
//   <div>
//      <button onClick={login}>Login</button>
//    </div>
//  );
//};
//export default Login;
