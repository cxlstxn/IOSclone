import React from 'react';
import { Link, useParams } from 'react-router-dom';

const NotesPage = () => {
  const { id } = useParams();

  const notes = [
    {
      id: 1,
      title: 'Grocery List',
      preview: 'Milk, Eggs, Bread...',
      content: 'Milk, Eggs, Bread, Butter, Cheese, Chicken, Apples, Bananas',
      date: 'Apr 22, 2025',
    },
    {
      id: 2,
      title: 'Meeting Notes',
      preview: 'Discuss project timeline...',
      content: 'Discuss project timeline, assign tasks, set milestones, review budget',
      date: 'Apr 21, 2025',
    },
    {
      id: 3,
      title: 'Ideas',
      preview: 'App concept for travel...',
      content: 'App concept for travel today is the best day to plan your next adventure',
      date: 'Apr 20, 2025',
    },
  ];

  // If an ID is present in the URL, render the detail view
  if (id) {
    const note = notes.find((note) => note.id === parseInt(id));

    if (!note) {
      return (
        <div
        >
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
    }

    return (
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0)',
          width: '375px',
          border: '1px solid black',
          height: '812px',
          margin: '0 auto',
          position: 'relative',
          color: '#fff',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif',
        }}
      > 

        <div style ={{ padding: '20px' }}>
        <h1>{note.title}</h1>
        <small style={{ color: '#ccc', display: 'block', marginBottom: '20px' }}>{note.date}</small>
        <p style={{ lineHeight: '1.5' }}>{note.content}</p>
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
  }

  // Otherwise, render the list view
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
              <p>{note.preview}</p>
              <small style={{ color: '#ccc' }}>{note.date}</small>
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