import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import Modal from '../pages/sections/modal';

// Images
import logo from "../assets/images/logo2.png";

// Data
import navData from "../data/navbar.json";

type NavbarProps = {
  isLanding: boolean;
};

function Navbar({ isLanding }: NavbarProps) {
  const [navActive, setNavActive] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleLinkClick = () => {
    setNavActive(false);
  };

  const handleInternalLinkClick = (link: string) => {
    if (link === "brochure") {
      setModalOpen(true);
    } else {
      setNavActive(false);
      window.scroll(0, 0);
    }
  };

  const handleMenuBtnClick = () => {
    setNavActive(!navActive);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <header className="header-holder">
        <div className="menu-wrapper center-relative relative">
          <div className="header-logo">
            <RouterLink to="/">
              <img src={logo} alt="Meelo" />
            </RouterLink>
          </div>

          <div className="toggle-holder">
            <div
              id="toggle"
              onClick={handleMenuBtnClick}
              className={navActive ? "on" : ""}
            >
              <div className="first-menu-line"></div>
              <div className="second-menu-line"></div>
              <div className="third-menu-line"></div>
            </div>
          </div>

          <div className={`menu-holder ${navActive && "show"}`}>
            <nav id="header-main-menu">
              <ul className="main-menu sm sm-clean">
                {navData.navLinks.map((link, i) => (
                  <li key={"navlink-" + i}>
                    {isLanding ? (
                      <ScrollLink
                        activeClass="active"
                        smooth
                        spy
                        to={link.to}
                        offset={-77}
                        onClick={handleLinkClick}
                      >
                        {link.text}
                      </ScrollLink>
                    ) : (
                      <RouterLink to="/" onClick={handleLinkClick}>
                        {link.text}
                      </RouterLink>
                    )}
                  </li>
                ))}
                {navData.internalLinks.map((link, i) => (
                  <li key={"internalLink-" + i}>
                    {link.to === "brochure" ? (
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleInternalLinkClick(link.to);
                        }}
                      >
                        {link.text}
                      </a>
                    ) : (
                      <RouterLink to={link.to} onClick={() => handleInternalLinkClick(link.to)}>
                        {link.text}
                      </RouterLink>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="clear"></div>
        </div>

        {/* {modalOpen && <Modal closeModal={closeModal} />} */}
      </header>
      <div>
        {modalOpen && <Modal closeModal={closeModal} />}
      </div>
    </>
  );
}

export default Navbar;