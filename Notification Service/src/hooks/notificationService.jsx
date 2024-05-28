import React, { useCallback } from 'react';
import { Notification } from '../components/notification';

export const useNotification = (position = 'bottom-right') => {
    const [notification, setNotification] = React.useState(null);

    let timer;

    const triggerNotification = useCallback((notificationProps) => {
        clearTimeout(timer);
        setNotification(notificationProps);

        timer = setTimeout(() => {
            setNotification(null);
        }, notificationProps.duration);
    }, []);


    const NotificationComponent = () => {
        return (
            notification ? <Notification position={`${position}`}{...notification} /> : null
        )
    };

    return { NotificationComponent, triggerNotification };
};
