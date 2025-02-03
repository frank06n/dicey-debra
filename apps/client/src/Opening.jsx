import { Link } from 'react-router-dom';
import './Opening.css'

function Opening() {
  return (
    <>
      <div className="initial-wrapper">
        <div className="heading-main">
          EmPower Inc.
        </div>
        <div className="main-text">
          Wellness Journalling. Now Online.
        </div>
        <div className="to-homepage buttons">
          <Link to="/home">Go to HomePage</Link>
        </div>
        <div className="to-login buttons">
          <Link to="/journal">Go to Journal</Link>
        </div>
      </div>
    </>
  )
}

export default Opening
