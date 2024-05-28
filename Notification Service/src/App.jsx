import React, { useState } from 'react'
import { Notification } from './components/notification';
import { useNotification } from './hooks/notificationService';

function App() {
  const { triggerNotification, NotificationComponent } = useNotification("bottom-right");

  return (
    <>
      <button onClick={() => {
        {
          triggerNotification({
            type: 'success',
            message: 'File Upload successfully',
            duration: 3000
          })
        }
      }}>Trigger Notifcation</button>
 <button onClick={() => {
        {
          triggerNotification({
            type: 'error',
            message: 'File Upload successfully',
            duration: 3000
          })
        }
      }}>Trigger Failure</button>
      <NotificationComponent />
    </>
  )
}

export default App
