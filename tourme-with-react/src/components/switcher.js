import React, { useState, useEffect, useRef } from 'react';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import NightlightRoundedIcon from '@mui/icons-material/NightlightRounded';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import '../styles/ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const switcherRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || '1';
  });

  useEffect(() => {
    const radios = switcherRef.current.querySelectorAll('input[type="radio"]');
    let previousValue = selectedOption;

    const handleChange = (e) => {
      const current = e.target.getAttribute('c-option');
      if (previousValue !== current) {
        previousValue = current;
        setSelectedOption(current);
        localStorage.setItem('theme', current);
      }
    };

    radios.forEach((radio) => {
      radio.addEventListener('change', handleChange);
    });

    return () => {
      radios.forEach((radio) => {
        radio.removeEventListener('change', handleChange);
      });
    };
  }, [selectedOption]);

  return (
    <fieldset className="switcher" ref={switcherRef}>
      <legend className="switcher__legend">Choose theme</legend>

      <label className="switcher__option">
        <input
          className="switcher__input"
          type="radio"
          name="theme"
          value="light"
          c-option="1"
          checked={selectedOption === '1'}
          onChange={() => setSelectedOption('1')}
        />
        <WbSunnyRoundedIcon className="switcher__icon" />
      </label>

      <label className="switcher__option">
        <input
          className="switcher__input"
          type="radio"
          name="theme"
          value="dark"
          c-option="2"
          checked={selectedOption === '2'}
          onChange={() => setSelectedOption('2')}
        />
        <NightlightRoundedIcon className="switcher__icon" />
      </label>

      <label className="switcher__option">
        <input
          className="switcher__input"
          type="radio"
          name="theme"
          value="dim"
          c-option="3"
          checked={selectedOption === '3'}
          onChange={() => setSelectedOption('3')}
        />
        <WbTwilightIcon className="switcher__icon" />
      </label>
    </fieldset>
  );
};

export default ThemeSwitcher;
