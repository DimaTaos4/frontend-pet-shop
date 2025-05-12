import { InstagramIcon, WhatsAppIcon } from "../../../../shared/components/icons";
export const footerContacts = [
    {
      label: "Phone",
      content: "+49 30 915-88492",
      link: "tel:+493091588492",
    },
    {
      label: "Socials",
      content: [
        {
          icon: <InstagramIcon />,
          link: "https://instagram.com",
        },
        {
          icon: <WhatsAppIcon />,
          link: "https://whatsapp.com",
        },
      ],
    },
    {
      label: "Address",
      content: "Wallstraẞe 9-13, 10179 Berlin, Deutschland",
    },
    {
      label: "Working Hours",
      content: "24 hours a day",
    },
  ];