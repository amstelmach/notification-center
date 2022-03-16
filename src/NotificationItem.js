import React, { useState } from 'react';
import './notificationitem.css';

const NotificationItem = ({ status, date, title, description }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className='wrapper'>
      <div className='accordion__item'>
        <div
          className='accordion__header'
          onClick={() => setIsActive(!isActive)}
        >
          <div className='accordion__status'>{status}</div>
          <div className='accordion__date'>{date}</div>
          <div className='accordion__title'>{title}</div>
          <div>arrow</div>
        </div>

        {isActive && (
          <div className='accordion__content'>
            <button className='button'>delete</button>
            <div className='accordion__content--desc'>{description}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationItem;
