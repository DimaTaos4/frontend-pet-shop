import { useState, useEffect } from "react";
import { HomePageLogo, CartIcon } from "../../../shared/components/icons";
import { Link } from "react-router-dom";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import styles from './Header.module.css';
import Container from "../Container/Container";
import { useSelector } from "react-redux";
import { selectCartCount } from "../../../redux/cart/cart-selector";
import { useTheme } from "@emotion/react";
import HamburgerMenu from "../../../shared/components/Hamburger/Hamburger";

import { selectHamburger } from "../../../redux/hamburger/hamburger-selector";
const Header = () => {
  const isOpened = useSelector(selectHamburger)
  const [isMobile, setIsMobile] = useState(false);
  const { colors } = useTheme();
  const style = {
    '--background-color': colors.fontColorBlue
  };
  const quantity = useSelector(selectCartCount);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 760);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      style={style}
    >

      <Container>
        <div className={styles.navbarContent}>

          {isMobile && (
            isOpened ? (
              <div className={styles.hamburgerWrapper}>
                <HamburgerMenu />
              </div>
            ) : (
              <div>
                <HamburgerMenu />
              </div>
            )
          )}

          <Link to='/' className={styles.headerLogo}><HomePageLogo /></Link>
          {!isMobile && <HeaderMenu className={styles.headerMenu} />}
          <div>
            {quantity > 0 && <span className={styles.quantityCart}>{quantity}</span>}
            <Link to='/cart'><CartIcon /></Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
