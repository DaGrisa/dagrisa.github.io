import React from 'react';
import config from '../../config';
import Technologies from './Technologies';

export default function Footer() {
  return (
    <footer>
      <Technologies />
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
