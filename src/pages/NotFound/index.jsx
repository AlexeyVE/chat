import React from 'react'
import { Link } from 'react-router-dom'
import { Result, Button } from 'antd'

const NotFound = () => {
  return(
    <Result
      status="404"
      title="404"
      subTitle="Извините такая страница отсутствует"
      extra={
        <Button type="primary">
          <Link to="/">
            На главную
          </Link>
        </Button>
      }
    />
    )
}
export default NotFound
