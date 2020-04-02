import React,{ useState } from 'react'
import PropTypes from 'prop-types'

import {
  Input,
  Button,
  Radio
} from 'antd'

import { 
  SmileOutlined,
  SendOutlined,
  CameraOutlined,
  AudioOutlined
} from '@ant-design/icons'

import './SendMsgInput.scss'

const SendMsgInput = props => {

  const [state, setState] = useState('')

  return (
    <div className="chat__input" >
      <Button
        size="large" 
        className="chat__input-smile-btn" 
        icon={<SmileOutlined/>} 
      />
      <Input  size="large" 
              placeholder="Введите тескт сообщения"
              onChange={(e) => setState(e.target.value)}
              />
      <Radio.Group 
        size="large" 
        className="chat__input-actions">
        <Button  
          size="large" 
          icon={<CameraOutlined />} 
        />
        <Button  
          size="large" 
          icon={state 
          ? <SendOutlined style={{color:'rgb(24,144,255)'}} />
          :<AudioOutlined />} 
        />
      </Radio.Group>
    </div>
  )
}

SendMsgInput.propTypes = {
  className:PropTypes.string
}

export default SendMsgInput