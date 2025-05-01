import React from 'react';
import { Link } from 'react-router-dom';

const SettingsPage = () => {


  return (
    <div
      style={{
        backgroundColor: '#F2F2F7',
        width: '375px',
        border: '1px solid black',
        height: '812px',
        margin: '0 auto',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#black',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
        <div>
        <h1 style={{ textAlign: 'left',marginLeft: '20px', marginTop: '20px' }}>Settings</h1>
        </div>
      <div>
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

export default SettingsPage;