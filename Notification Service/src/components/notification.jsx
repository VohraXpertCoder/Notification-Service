import * as React from 'react';
import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineCloseCircle, AiOutlineWarning,  AiOutlineInfoCircle} from 'react-icons/ai';
import './notification.css';

const icons = {
    success: <AiOutlineCheckCircle />,
    error: <AiOutlineCloseCircle />,
    warning: <AiOutlineWarning />,
    info: <AiOutlineInfoCircle />
}

export const Notification = ({type ='info', message, position, onClose}) => {
  return (
    <div className={`notification ${type} ${position}`}>
       {icons[type]}
       {message}
       <AiOutlineClose color="white" className='closeIcon'/>
    </div>
  )
}