import React, { useState } from 'react';
import { notifications } from './utils/content';
import NotificationItem from './NotificationItem';
import moment from 'moment';
import Information from './Information';
import NavBar from './NavBar';

const App = () => {
  const [content, setContent] = useState(notifications);

  const handleRemove = (id) => {
    const newContent = [...content].filter((item) => item.id !== id);

    setContent(newContent);
  };

  return (
    <>
      <NavBar />
      <main>
        <div className='header__container'>
          <header>Notifications</header>
        </div>
        <div className='notification__container'>
          {content
            .sort((a, b) => (moment(a.date).isBefore(moment(b.date)) ? 1 : -1))
            .map((item) => (
              <NotificationItem
                key={item.id}
                status={item.status}
                date={moment(item.date).format('DD.MM.YYYY')}
                title={item.title}
                description={item.desc}
                id={item.id}
                onClick={() => handleRemove(item.id)}
              />
            ))}
        </div>
        <div>{content.length === 0 ? <Information /> : null}</div>
      </main>
    </>
  );
};

export default App;
