import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,

} from 'reactstrap';
/* import Pear_log from '../src/assets/img/brand/Pear_log.jpg';  */
/* import Fork_logo from '../src/views/components/brand/Fork_logo.png';
 */
import Pear_drop from '../../assets/img/brand/Pear_drop.png';
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="white" light expand="md">
        {/*  <div className="fleft1">
                <img className="img" src={Pear_log} width="60" height="80" alt="logo" />
                </div> */}

        <div className="fleft1">
          <img className="img" src={Pear_drop} width="60" height="80" alt="logo" />
          {/* <img className="img" src={require('../assets/img/brand/Fork_logo.png')} width="60" height="80" alt="logo" /> */}
        </div>
        <NavbarBrand href="/"><h1>PearDrop</h1></NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;