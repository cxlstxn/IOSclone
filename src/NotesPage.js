import React from 'react';
import { Link } from 'react-router-dom';

const NotesPage = () => {
  let notes = [
    { id: 1, title: 'Grocery List', content: 'Milk, Eggs, Bread...', date: 'Apr 22, 2025' },
    { id: 2, title: 'Meeting Notes', content: 'Discuss project timeline...', date: 'Apr 21, 2025' },
    { id: 3, title: 'Ideas', content: 'App concept for travel...', date: 'Apr 20, 2025' },
  ];

  return (
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0)',
        width: '375px',
        border: '1px solid black',
        height: '812px',
        margin: '0 auto',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      <div>
        <h1 style={{ textAlign: 'left', marginLeft: '20px', marginTop: '20px' }}>Notes</h1>

        {notes.map((note) => (
          <Link
            key={note.id}
            to={`/note/${note.id}`}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
              marginBottom: '16px',
              marginLeft: '10px',
              marginRight: '10px',
              backgroundColor: '#1c1c1c',
              borderRadius: '10px',
              padding: '12px',
            }}
          >
            <div>
              <h2>{note.title}</h2>
              <p>{note.content}</p>
              <small style={{ color: '#ccc' }}>{note.content.length > 50 ? note.content.slice(0, 50) + '...' : note.date}</small>
            </div>
          </Link>
        ))}
            </div>
            <Link to="/">
                <div
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '134px',
                    height: '5px',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    opacity: '0.8',
                    cursor: 'pointer',
                  }}
                />
            </Link>
    </div>
  );
};

export default NotesPage;