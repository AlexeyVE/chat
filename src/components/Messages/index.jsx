import React from 'react'
import PropTypes from 'prop-types'
import { Empty } from 'antd'

const Messages = ({items}) => {
  return items.length ? '' : <Empty description="Нет сообщений" />
}

Messages.propTypes = {
  items: PropTypes.array
}

export default Messages