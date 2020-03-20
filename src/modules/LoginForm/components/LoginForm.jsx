import React from 'react'
import { Form, Input,  Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { Block, Button } from 'components'

const LoginForm = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  }
  return (
    <div>
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <Block>
        <Form name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Пожалуйста введите имя пользователя!' }]}
            hasFeedback validateStatus="success">
            <Input prefix={
              <UserOutlined className="site-form-item-icon"/>} 
                placeholder="Имя пользователя"
                size="large"
                allowClear/>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Пожалуйста введите свой пароль!' }]}>
            <Input.Password prefix={
            <LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Пароль"
              size="large"/>              
          </Form.Item>
          <Form.Item>
            <Button size="large" type="primary" htmlType="submit" className="login-form-button">
              Войти в аккаунт 
            </Button>
          </Form.Item>
          <Form.Item>
            <Link className="auth__register-link" to="/register">
              Зарегистрироваться
            </Link>
          </Form.Item>
        </Form>
      </Block>
    </div>  
  )
}

export default LoginForm