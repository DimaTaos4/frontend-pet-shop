import FooterContactsMenu from "./FooterContactsMenu/FooterContactsMenu";
import Container from "../Container/Container";
import styles from './Footer.module.css'
import SectionTitle from "../../../shared/components/SectionTitle/SectionTitle";
const Footer = () => {
  return (
    <footer>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <FooterContactsMenu />
        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.233173836531!2d13.402032377110048!3d52.51111913688651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e27dade5561%3A0x2454d91ffab308fa!2sWallstra%C3%9Fe%209-13%2C%2010179%20Berlin!5e0!3m2!1sru!2sde!4v1746625321303!5m2!1sru!2sde"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our location"
          ></iframe>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;