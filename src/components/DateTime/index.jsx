
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import 'moment/locale/ru'


const DateTime = ({ date }) => {
  return (
    <Fragment>
      {moment(date).calendar()}
    </Fragment>
  )
}

DateTime.propTypes = {
  date: PropTypes.instanceOf(Date)
}

export default DateTime