import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'
import { Button, Slider } from 'antd'
import { 
  CheckOutlined,
  PauseOutlined,
  CaretRightOutlined 
} from '@ant-design/icons'

import './Message.scss'

const Message = ({
  avatar,
  user,
  text,
  date,
  isMe,
  audio,
  isDelivered,
  isReaded,
  attachments,
  isTyping
}) => {
  const [isPlaying, setState] = useState(false)
  const [currentTime, setTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef(null)
  useEffect(() => {    
    if (audioRef.current) {
      audioRef.current.volume="0.1"
      audioRef.current.addEventListener('playing', () => setState(true), false)
      audioRef.current.addEventListener('ended', () => setState(false), false)
      audioRef.current.addEventListener('pause', () => setState(false), false)
      audioRef.current.addEventListener('timeupdate', () => {
        const time = Math.floor(audioRef.current.currentTime % 60)
        setTime(time)
        setDuration(audioRef.current.duration)
      }, false)
    }
  },[])
 
  const togglePlay = () => {
    (!isPlaying)
    ? audioRef.current.play()
    : audioRef.current.pause()
  }

  return (
    <div className={classNames('message',{
      'message--isme':isMe,
      'message--is-typing': isTyping,
      'message--audio': audio,
      'message--only-img': attachments && attachments.length === 1
    })}>
    {console.log('render',currentTime)}
      <div className="message__avatar">
        <img src={avatar} alt={`avatar ${user.fullName}`}/>
      </div>

      <div className="message__content">
        {(audio || text || isTyping) && (
        <div className="message__bubble">
          {text && <p className="message__text">{text}</p>}
          {isTyping && ( 
          <div className="message__typing">
            <span />
            <span />
            <span />
          </div>
          )}
          {audio && (
          <div className="message__audio">
            <audio ref={audioRef} src={audio} preload="auto"></audio>           
            <Button onClick={togglePlay}
              shape="circle" 
              icon={isPlaying ?<PauseOutlined/>:<CaretRightOutlined/>}/>
              <Slider value={currentTime} max={duration}/>
              {duration > 0 && <span className="message__audio-duration">
                {(Math.floor(duration))-currentTime}
              </span>}       
          </div>)}
        </div>
        )}

        {attachments && (
          <div className="message__attachments">
            {attachments.map(item => (
            <div className="message__attachments-item">
              <img src={item.url} alt={item.filename} />
            </div>))}
          </div>
        )}

        {date && <time className="message__date">{date}</time>}

        {isMe && isDelivered && <span className="readed">
          <CheckOutlined/>
        </span> }

        {isMe && isReaded && <span className="readed">
          <CheckOutlined/>
        </span> }

      </div>
    </div>
  )
}



// const Message = ({
//   avatar,
//   user,
//   text,
//   date,
//   isMe,
//   audio,
//   isDelivered,
//   isReaded,
//   attachments,
//   isTyping
// }) => {
//   return (
//     <div className={classNames('message',{
//       'message--isme':isMe,
//       'message--is-typing': isTyping,
//       'message--audio': audio,
//       'message--only-img': attachments && attachments.length === 1
//     })}>
//       <div className="message__avatar">
//         <img src={avatar} alt={`avatar ${user.fullName}`}/>
//       </div>
//       <div className="message__content">
//         <div className="message__bubble">
//           {text && <p className="message__text">{text}</p>}
//           {isTyping && <div className="message__typing">
//             <span />
//             <span />
//             <span />
//           </div>}
//         </div>
//       <div className="message__attachments">
//         { attachments && attachments.map(item => (
//         <div className="message__attachments-item">
//           <img src={item.url} alt={item.filename} />
//         </div>))}
//       </div>      
//         {date && <time className="message__date">{date}</time>}
//         { isMe && isDelivered && <span className="readed">
//           <CheckOutlined/>
//         </span> }
//         {isMe && isReaded && <span className="readed">
//           <CheckOutlined/>
//         </span> }
//       </div>
//     </div>
//   )
// }

Message.defaultProps = {
  user:{fullName:'Aleksei'}
}

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  isTyping: PropTypes.bool 
}

export default Message