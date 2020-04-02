import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Badge } from 'antd'
import { DateTime } from 'components'

import './DialogItem.scss'

const DialogItem = ({user, message, unreaded, isMe, date}) => {
  return (
      <div className="dialogs__item">
        <div className="dialogs__item-avatar">
          {/*<img src={user.avatar} alt={`${user.fullName} avatar`}/>*/}
          {user.avatar
            ? <img src={user.avatar} alt={`${user.fullName} avatar`}/>
            : <img src="https://randomuser.me/api/portraits/men/77.jpg" alt=""/>}
         {user.isOnline && <Badge className="dialogs__item-avatar-online" color="#87d068"/>}
        </div>
        <div className="dialogs__item-info">
          <div className="dialogs__item-info-top">
            <b>{user.fullname}</b>
            <time>
              <DateTime date={date}/>
            </time>  
          </div>
          <div className="dialogs__item-info-bottom">
            <p className="head-example">{message}</p>        
          </div>
          {unreaded > 0 && <Badge count={unreaded}>
            <a href="#" className="badge-link" />
          </Badge>}
        </div>
      </div>
  )
}

DialogItem.propTypes = {
  user: PropTypes.object,
  message: PropTypes.string,
  unreaded: PropTypes.number,
  isMe: PropTypes.bool,
  date: PropTypes.instanceOf(Date)
}

export default DialogItem