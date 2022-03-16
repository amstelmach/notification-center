import React, { useState } from 'react';
import { notifications } from './utils/content';
import NotificationItem from './NotificationItem';

const App = () => {
  const [content, setContent] = useState(notifications);
  return (
    <main>
      <div className='header__container'>
        <header>Notifications</header>
      </div>
      <div className='notification__contianer'>
        {content.map((item) => (
          <NotificationItem
            key={item.id}
            status={item.status}
            date={item.date}
            title={item.title}
            description={item.desc}
            id={item.id}
          />
        ))}
      </div>
    </main>
  );
};

export default App;
