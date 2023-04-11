import React, { useState } from 'react';
import PlusIcon from '../images/icons/plus.svg';

export default function AccordionCard(props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="accordion-card">
      <h3 className="accordion-card__title">
        <button
          className="accordion-card__toggle"
          aria-expanded={isOpen}
          onClick={handleToggle}
        >
          {props.title}
          <PlusIcon />
        </button>
      </h3>
      <div className="accordion-card__content" hidden={!isOpen}>
        {props.children}
      </div>
    </div>
  );
}
