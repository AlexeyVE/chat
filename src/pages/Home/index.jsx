import React from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'
import 'moment/locale/ru'

import { 
  TeamOutlined,
  FormOutlined,
  SearchOutlined,
  EllipsisOutlined
} from '@ant-design/icons'

import { Input, Button } from 'antd'

import {
  Message,
  DateTime,
  SendMsgInput,
  Status
} from 'components'

import { Dialogs } from 'containers'
import dummyData from "dummyData"

import './Home.scss'

const Home = (props) => {
  let date = new Date()
  return (
    <section className="home">
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <div>
              <TeamOutlined />
              <span>
                Список диалогов
              </span>
            </div>
            <FormOutlined />  
            </div>
          <div className="chat__sidebar-dialogs">
            <Dialogs
              userId={0}
              items={dummyData}
            />
          </div>
        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div></div>
            <div className="chat__dialog-header-center">
              <h4 className="chat__dialog-header-username">
                Лев Николаевич Толстой
              </h4>
              <div className="chat__dialog-header-status">
                <Status />
              </div>
            </div>
            <Button
              type="link" 
              icon={<EllipsisOutlined style={{fontSize: 24,color:'rgba(32,32,32,0.7)'}}/>}
            />
          </div>
          <div className="chat__dialog-messages">
            <Message 
              avatar="https://randomuser.me/api/portraits/men/71.jpg" 
              text="Nulla in deserunt do ad.Nulla in deserunt do ad.Nulla in deserunt do ad.Nulla in deserunt do ad.Nulla in deserunt do ad.Nulla in deserunt do ad."
              date={moment(date).calendar()}
              isMe={false}
              attachments={[
                {
                  filename:'',
                  url:'https://randomuser.me/api/portraits/women/75.jpg'
                },
                {
                  filename:'',
                  url:'https://randomuser.me/api/portraits/women/56.jpg'
                },
                {
                  filename:'',
                  url:'https://randomuser.me/api/portraits/women/72.jpg'
                }        
              ]}
            />

            <Message 
            avatar="https://randomuser.me/api/portraits/men/71.jpg" 
            date={moment(date).calendar()}
            isMe={false}
            audio="https://www.tones7.com/media/Ring_Reggae.mp3"
            // attachments={[

            //   {
            //     filename:'',
            //     url:'https://randomuser.me/api/portraits/women/75.jpg'
            //   },
            //   {
            //     filename:'',
            //     url:'https://randomuser.me/api/portraits/women/56.jpg'
            //   },
            //   {
            //     filename:'',
            //     url:'https://randomuser.me/api/portraits/women/72.jpg'
            //   }        
            // ]}
            />

            <Message 
            avatar="https://randomuser.me/api/portraits/men/71.jpg" 
            text="Nulla in deserunt do ad.Nulla in deserunt do ad.Nulla in deserunt do ad.Nulla in deserunt do ad.Nulla in deserunt do ad.Nulla in deserunt do ad."
            date={moment(date).calendar()}
            isMe={false}
            attachments={[
              {
                filename:'',
                url:'https://randomuser.me/api/portraits/women/75.jpg'
              }
            ]}
            />

            <Message  
            avatar="https://randomuser.me/api/portraits/men/71.jpg" 
            text="Nulla in deserunt do ad.Nulla in deserunt do ad.Nulla in deserunt do ad.Nulla in deserunt do ad.Nulla in deserunt do ad.Nulla in deserunt do ad."
            date={moment(date).calendar()}
            isMe={true}
            isDelivered={true}
            isReaded={true}
            attachments={[
              {
                filename:'',
                url:'https://randomuser.me/api/portraits/women/75.jpg'
              },
              {
                filename:'',
                url:'https://randomuser.me/api/portraits/women/56.jpg'
              },
              {
                filename:'',
                url:'https://randomuser.me/api/portraits/women/72.jpg'
              }        
            ]}
            />

            <Message 
            avatar="https://randomuser.me/api/portraits/men/71.jpg" 
            // text="Nulla in deserunt do ad.Nulla in deserunt do ad.Nulla in deserunt do ad.Nulla in deserunt do ad.Nulla in deserunt do ad.Nulla in deserunt do ad."
            date={moment(date).calendar()}
            isMe={false}
            isTyping={true}
            // attachments={[
            //   {
            //     filename:'',
            //     url:'https://randomuser.me/api/portraits/women/75.jpg'
            //   }
            // ]}
            />

            <Message 
            avatar="https://randomuser.me/api/portraits/men/71.jpg" 
            text="Nulla in deserunt do ad.Nulla in deserunt do ad.Nulla in deserunt do ad.Nulla in deserunt do ad.Nulla in deserunt do ad.Nulla in deserunt do ad."
            date={moment(date).calendar()}
            isMe={true}
            isDelivered={true}
            />
          </div>
          <div className="chat__dialog-input">
            <SendMsgInput />
          </div>
        </div>
      </div>    
    </section>
  )
}


Home.defaultProps = {

}

// Message.propTypes = {
//   avatar: PropTypes.string,
//   text: PropTypes.string,
//   date: PropTypes.string,
//   user: PropTypes.object,
//   attachments: PropTypes.array,
//   isMe: PropTypes.bool,
//   isReaded: PropTypes.bool,
//   isTyping: PropTypes.bool 
// }

export default Home