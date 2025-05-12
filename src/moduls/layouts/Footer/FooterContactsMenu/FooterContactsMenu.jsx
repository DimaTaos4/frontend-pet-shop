import { footerContacts } from './contacts'
import styles from './FooterContactsMenu.module.css'
import { useTheme } from "@emotion/react"

const FooterContactsMenu = () => {
  const { colors, borderRadius } = useTheme();
  const style = {
    '--light-grey': colors.lightGrey,
    '--grey': colors.grey,
    '--black': colors.textColorBlackv,
    '--border-radius': borderRadius
  };

  return (
    <div className={styles.footerContactsBlock} style={style}>
      <div className={styles.footerContactsInfo}>
        {footerContacts.slice(0, 2).map(({ label, content, link }) => (
          <div className={styles.footerInfo} key={label}>
            <span>{label}</span>
            {Array.isArray(content) ? (
              <div className={styles.footerMessanger}>
                {content.map(({ icon, link }, idx) => (
                  <a key={idx} href={link} target="_blank" rel="noopener noreferrer">
                    {icon}
                  </a>
                ))}
              </div>
            ) : link ? (
              <a href={link} >{content}</a>
            ) : (
              <p>{content}</p>
            )}
          </div>
        ))}
      </div>

      <div className={styles.footerContactsInfo}>
        {footerContacts.slice(2).map(({ label, content }) => (
          <div className={styles.footerInfo} key={label}>
            <span>{label}</span>
            <p>{content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterContactsMenu;