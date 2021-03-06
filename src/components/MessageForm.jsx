import React from 'react';
import { useState } from 'react'
import { sendMessage, isTyping } from 'react-chat-engine'
import { SendOutlined, PictureOutlined } from '@ant-design/icons'
function MessageForm(props) {
    const [value, setValue] = useState('');
    const { chatId, creds } = props
    const handleSubmit = (e) => {
        e.preventDefault();
        const text = value.trim();
        if (text.length > 0) {
            sendMessage(creds, chatId, { text }) //built in 
        }
        setValue('')
    }
    const handleChange = (e) => {
        setValue(e.target.value)
        isTyping(props, chatId)

    }
    const onUpload=(e)=>{
        sendMessage(creds,chatId,{files:e.target.files,text:''})
    }
    return <form className="message-form" onSubmit={handleSubmit}>
        <input type="text" className="message-input" placeholder='Send a new Message' value={value} onChange={handleChange} onSubmit={handleSubmit} />
        <label htmlFor="upload-button" >
            <span className="image-button">
                <PictureOutlined className='pictur-icon' />
            </span>
            
        </label>
        <input type="file" multiple={false} id='upload-button' style={{display:'none'} } onChange={onUpload} />
        <button className="send-button">
            <SendOutlined  className='send-icon'/>
        </button>
    </form>
}

export default MessageForm;
