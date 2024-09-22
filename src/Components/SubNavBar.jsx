import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBox } from '@fortawesome/free-solid-svg-icons';
import './SubBar.css';

function SubNavBar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 1500); // Reset after the duration of the animation
  };

  return (
    <div className="button_container">
      <div className="city-buttons">
        <Button variant="secondary">Delhi</Button>
        <Button variant="secondary">Mumbai</Button>
        <Button variant="secondary">Bangalore</Button>
        <Button variant="secondary">Hyderabad</Button>
        <Button variant="secondary">Jaipur</Button>
      </div>
      <button 
        className={`cart-button ${clicked ? 'clicked' : ''}`} 
        onClick={handleClick}
      >
        <span className={`add-to-cart ${clicked ? 'hidden' : ''}`}>Add to cart</span>
        <span className={`added ${clicked ? '' : 'hidden'}`}>Added</span>
        <FontAwesomeIcon icon={faShoppingCart} className={`cart-icon ${clicked ? '' : 'hidden'}`} />
        <FontAwesomeIcon icon={faBox} className={`box-icon ${clicked ? '' : 'hidden'}`} />
      </button>
    </div>
  );
}

export default SubNavBar;
