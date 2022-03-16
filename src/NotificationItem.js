import React, { useState } from 'react';
import './notificationitem.css';
import ChevronDown from './utils/ChevronDown';
import ChevronUp from './utils/ChevronUp';
import StatusDot from './utils/StatusDot';

const NotificationItem = ({ status, date, title, description, onClick }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className='wrapper'>
      <div className='accordion__item'>
        <div
          className='accordion__header'
          onClick={() => setIsActive(!isActive)}
        >
          <div className='accordion__status'>
            {status === 'new' ? (
              <StatusDot height={15} width={25} fill={'#daecf0'} />
            ) : null}
          </div>
          <div className='accordion__date'>{date}</div>
          <div className='accordion__title'>{title}</div>
          {isActive ? (
            <ChevronUp width={30} height={30} className='accordion__chevron' />
          ) : (
            <ChevronDown
              width={30}
              height={30}
              className='accordion__chevron'
              fill={'#e5e5e5'}
            />
          )}
        </div>

        {isActive && (
          <div className='accordion__content'>
            <button className='button' onClick={onClick}>
              delete
            </button>
            <div className='accordion__content--desc'>
              {description
                .replace(/<\/?p[^>]*>/g, '')
                .replace(/<\/?b[^>]*>/g, '')
                .replace(/<\/?a[^>]*>/g, '')}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationItem;
