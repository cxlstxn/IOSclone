import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FaceTimePage from './FacetimePage'; // Import FaceTimePage
import NotesPage from './NotesPage'; // Import NotesPage

import './App.css';
import bgImage from './img/bg.jpg';
import messagesSvg from './img/messages.svg';
import cameraSvg from './img/camera.svg';
import settingsSvg from './img/settings.svg';
import phoneSvg from './img/phone.svg';
import mailSvg from './img/mail.svg';
import appstoreSvg from './img/appstore.svg';
import calculatorSvg from './img/calculator.svg';
import clockSvg from './img/clock.svg';
import contactsSvg from './img/contacts.svg';
import facetimeSvg from './img/facetime.svg';
import healthSvg from './img/health.svg';
import homeSvg from './img/home.svg';
import mapsSvg from './img/maps.svg';
import newsSvg from './img/news.svg';
import photosSvg from './img/photos.svg';
import safariSvg from './img/safari.svg';
import stocksSvg from './img/stocks.svg';
import walletSvg from './img/wallet.svg';
import weatherSvg from './img/weather.svg';
import reminderSvg from './img/reminder.svg';
import calenderSvg from './img/calender.svg';
import tvSvg from './img/tv.svg';
import notesSvg from './img/notes.svg';





// Placeholder page components for other apps
const MailPage = () => <div><h1>Mail Page</h1><Link to="/">Back to Home</Link></div>;
const RemindersPage = () => <div><h1>Reminders Page</h1><Link to="/">Back to Home</Link></div>;
const CalculatorPage = () => <div><h1>Calculator Page</h1><Link to="/">Back to Home</Link></div>;
const HealthPage = () => <div><h1>Health Page</h1><Link to="/">Back to Home</Link></div>;
const CalendarPage = () => <div><h1>Calendar Page</h1><Link to="/">Back to Home</Link></div>;
const ClockPage = () => <div><h1>Clock Page</h1><Link to="/">Back to Home</Link></div>;
const AppStorePage = () => <div><h1>App Store Page</h1><Link to="/">Back to Home</Link></div>;
const HomePage = () => <div><h1>Home Page</h1><Link to="/">Back to Home</Link></div>;
const PhotosPage = () => <div><h1>Photos Page</h1><Link to="/">Back to Home</Link></div>;
const MapsPage = () => <div><h1>Maps Page</h1><Link to="/">Back to Home</Link></div>;
const StocksPage = () => <div><h1>Stocks Page</h1><Link to="/">Back to Home</Link></div>;
const ContactsPage = () => <div><h1>Contacts Page</h1><Link to="/">Back to Home</Link></div>;
const WalletPage = () => <div><h1>Wallet Page</h1><Link to="/">Back to Home</Link></div>;
const CameraPage = () => <div><h1>Camera Page</h1><Link to="/">Back to Home</Link></div>;
const WeatherPage = () => <div><h1>Weather Page</h1><Link to="/">Back to Home</Link></div>;
const NewsPage = () => <div><h1>News Page</h1><Link to="/">Back to Home</Link></div>;
const TVPage = () => <div><h1>TV Page</h1><Link to="/">Back to Home</Link></div>;
const SettingsPage = () => <div><h1>Settings Page</h1><Link to="/">Back to Home</Link></div>;
const PhonePage = () => <div><h1>Phone Page</h1><Link to="/">Back to Home</Link></div>;
const SafariPage = () => <div><h1>Safari Page</h1><Link to="/">Back to Home</Link></div>;
const MessagesPage = () => <div><h1>Messages Page</h1><Link to="/">Back to Home</Link></div>;

function App() {
  const boxData = [
    {
      leftPosition: 14.4,
      icons: [
        { src: facetimeSvg, label: 'FaceTime', path: '/facetime' },
        { src: mailSvg, label: 'Mail', path: '/mail' },
        { src: reminderSvg, label: 'Reminders', path: '/reminders' },
        { src: calculatorSvg, label: 'Calculator', path: '/calculator' },
        { src: healthSvg, label: 'Health', path: '/health' },
      ],
    },
    {
      leftPosition: 38.13,
      icons: [
        { src: calenderSvg, label: 'Calendar', path: '/calendar' },
        { src: clockSvg, label: 'Clock', path: '/clock' },
        { src: notesSvg, label: 'Notes', path: '/notes' },
        { src: appstoreSvg, label: 'App Store', path: '/appstore' },
        { src: homeSvg, label: 'Home', path: '/home' },
      ],
    },
    {
      leftPosition: 61.87,
      icons: [
        { src: photosSvg, label: 'Photos', path: '/photos' },
        { src: mapsSvg, label: 'Maps', path: '/maps' },
        { src: stocksSvg, label: 'Stocks', path: '/stocks' },
        { src: contactsSvg, label: 'Contacts', path: '/contacts' },
        { src: walletSvg, label: 'Wallet', path: '/wallet' },
      ],
    },
    {
      leftPosition: 85.6,
      icons: [
        { src: cameraSvg, label: 'Camera', path: '/camera' },
        { src: weatherSvg, label: 'Weather', path: '/weather' },
        { src: newsSvg, label: 'News', path: '/news' },
        { src: tvSvg, label: 'TV', path: '/tv' },
        { src: settingsSvg, label: 'Settings', path: '/settings' },
      ],
    },
  ];

  const dockIcons = [
    { src: phoneSvg, label: 'Phone', path: '/phone' },
    { src: safariSvg, label: 'Safari', path: '/safari' },
    { src: messagesSvg, label: 'Messages', path: '/messages' },
    { src: photosSvg, label: 'Photos', path: '/photos' },
  ];

  return (
    <Router>
      <Routes>
        {/* Home route for the app grid */}
        <Route
          path="/"
          element={
            <div
              style={{
                width: '375px',
                border: '1px solid black',
                height: '812px',
                margin: '0 auto',
                position: 'relative',
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {boxData.map((box, index) => (
                <div key={`box-${index}`}>
                  {box.icons.map((icon, iconIndex) => (
                    <Link
                      key={`svg-${iconIndex}-${index}`}
                      to={icon.path}
                      style={{
                        position: 'absolute',
                        top: `${11 + iconIndex * 13}%`,
                        left: `${box.leftPosition}%`,
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        textDecoration: 'none',
                      }}
                    >
                      <img
                        src={icon.src}
                        alt={`icon-${iconIndex}`}
                        style={{
                          width: '70px',
                          height: '70px',
                          borderRadius: '15px',
                        }}
                      />
                      <span
                        style={{
                          display: 'block',
                          marginTop: '5px',
                          fontSize: '12px',
                          color: '#fff',
                          textShadow: '0 0 2px rgba(0, 0, 0, 0.5)',
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif',
                        }}
                      >
                        {icon.label}
                      </span>
                    </Link>
                  ))}
                </div>
              ))}
              {/* Dock */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '25px',
                  padding: '10px 15px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '330px',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                }}
              >
                {dockIcons.map((icon, index) => (
                  <Link
                    key={`dock-icon-${index}`}
                    to={icon.path}
                    style={{
                      textAlign: 'center',
                      textDecoration: 'none',
                    }}
                  >
                    <img
                      src={icon.src}
                      alt={`dock-icon-${index}`}
                      style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '15px',
                      }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          }
        />
        {/* Routes for each app */}
        <Route path="/facetime" element={<FaceTimePage />} />
        <Route path="/mail" element={<MailPage />} />
        <Route path="/reminders" element={<RemindersPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/health" element={<HealthPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/clock" element={<ClockPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/appstore" element={<AppStorePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/photos" element={<PhotosPage />} />
        <Route path="/maps" element={<MapsPage />} />
        <Route path="/stocks" element={<StocksPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/camera" element={<CameraPage />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/tv" element={<TVPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/phone" element={<PhonePage />} />
        <Route path="/safari" element={<SafariPage />} />
        <Route path="/messages" element={<MessagesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
