import logo from './images/logo.png';
import search from './images/search.png';
import './index.css';
import { useNavigate } from 'react-router-dom';

function Appbar() {
  const navigate = useNavigate();
  return (
    <div className="appbar">
      <div className="appbar-main">
        <div className="logo">
          <img className="logo-img" src={logo} alt="Logo" />
        </div>
        <div
          onClick={() => {
            navigate('/');
          }}
          className="daily-quotes"
        >
          Daily Quotes
        </div>
      </div>
      <div
        onClick={() => {
          navigate('/author');
        }}
        className="search-icon"
      >
        <img className="search-img" src={search} alt="Search" />
      </div>
    </div>
  );
}

export default Appbar;
