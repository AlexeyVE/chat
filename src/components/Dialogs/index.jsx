import React from 'react'
import PropTypes from 'prop-types'
import { DialogItem } from 'components'
import { Input, Empty } from 'antd'

import './Dialogs.scss'

const Dialogs = ({ items, userId, onSearch,inputValue}) => {
  return (
    <div className="dialogs">
      <div className="chat__sidebar-search">
        <Input.Search
          placeholder="Поиск среди контактов"
          onChange={ e => onSearch(e.target.value) }
          value={inputValue}
          style={{ width:'100%', border: 0 }}
            />
      </div>
      {
        items.length 
        ? (items.map((dialog, index) => 
          <DialogItem
            key={index}
            userId={userId}
            user={dialog.user}
            message={dialog.text}
            date={dialog.createdAt}
            unreaded={0}
            isMe={dialog.user._id === userId}/>
          ))
        : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}  description={"Ничего не найдено!"} />
     }
    </div> 
  )
}

Dialogs.propTypes = {

}

export default Dialogs