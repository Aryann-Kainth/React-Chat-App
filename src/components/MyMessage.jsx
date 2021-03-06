import React from 'react';

function MyMessage({message}) {
    if(message?.attachments?.length>0) //check if text or image 
    {
        return (
            <img src ={message.attachments[0].file} className='message-image' style={{float:'right'} } alt='img'/>

        )
    }
  return <div className='message' style={{float:'right',marginRight:'18px',color:'white',backgroundColor:'#3B2A50'}}> 
      {message.text}
  </div>;
}

export default MyMessage;
