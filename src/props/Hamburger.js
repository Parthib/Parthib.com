import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Menu from 'react-burger-menu/lib/menus/slide';

import routes from '../data/routes';

function Hamburger() {

  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger-container" onClick={() => setOpen(!open)}>
      <Menu right isOpen={open} noOverlay>
        <ul className="hamburger-ul">
          {routes.map(l => (
            <li className={'index-li'} key={l.label}>
              <Link to={l.path} onClick={() => setOpen(!open)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </Menu>
    </div>
  );
};

export default Hamburger;
