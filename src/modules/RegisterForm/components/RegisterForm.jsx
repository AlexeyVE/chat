import React from 'react'
import { Form, Input,  Checkbox } from 'antd'
import { UserOutlined,
         LockOutlined,
         MailOutlined,
         InfoCircleTwoTone } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { Block, Button } from 'components'

const RegisterForm = (props) => {

  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    dirty,
  } = props
  // const onFinish = values => {
  //   console.log('Received values of form: ', values)
  // }
  const success  = false
  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, Вам нужно зарегистрироваться</p>
      </div>
      <Block>
      {!success
        ?<Form name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}>
          <Form.Item
            name="username" 
            rules={[{ required: true, message: 'Пожалуйста введите имя пользователя!' }]}
            hasFeedback>
            <Input prefix={
              <UserOutlined className="site-form-item-icon"/>} 
                size="large"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Имя пользователя"
                allowClear/>
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Пожалуйста корректный e-mail' }]}
            hasFeedback
            validateStatus={!touched.email?'': errors.email ? 'error':'success'}>
            <Input prefix={
              <MailOutlined className="site-form-item-icon"/>}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e-mail"
              size="large"
              name="email"
              allowClear/>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Пожалуйста введите свой пароль!' }]}>
            <Input.Password prefix={
              <LockOutlined className="site-form-item-icon" />}
            label="Password"
            type="password"
            placeholder="Пароль"
            size="large"/>              
          </Form.Item>
          <Form.Item
            name="confirm"
            type="password"
            dependencies={['password']}
            rules={[{ required: true, message: 'Пароли не совпадают' },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject('Пароли не совпадают');
                },
              }),
            ]}>
            <Input.Password prefix={
              <LockOutlined className="site-form-item-icon" />}
            label="Confirm Password"
            dependencies={['password']}
            placeholder="Повторите пароль"
            size="large"
            />              
          </Form.Item>
          <Form.Item>
            <Button size="large" 
                    type="primary" 
                    htmlType="submit" 
                    className="login-form-button">
              Зарегистрироваться
            </Button>
          </Form.Item>
          <Form.Item>
            <Link className="auth__register-link" to="/">
              Войти в аккаунт
            </Link>
          </Form.Item>
        </Form>
        :<div className="auth__success-block">
          <div><InfoCircleTwoTone /></div>
          <h2>Подтвердите свой аккаунт</h2>
          <p>На Вашу почту отправлено письмо с ссылкой для подтверждения аккаунта</p>
        </div>}
      </Block>
    </div>  
  )
}

export default RegisterForm