import React from "react";
import { FaPhone } from "@react-icons/all-files/fa/FaPhone";
import { FaEnvelopeOpenText } from "@react-icons/all-files/fa/FaEnvelopeOpenText";
import { GrPersonalComputer } from "@react-icons/all-files/gr/GrPersonalComputer";

const footerData = {
  phone: {
    title: `1-844-CAN-MOVE`,
    subtitle: `(1-844-226-6683)`,
    icon: <FaPhone className="footer__icon" />,
  },
  email: {
    title: `info@movetocanada.com`,
    icon: <FaEnvelopeOpenText className="footer__icon" />,
  },
  site: {
    title: `movetocanada.com`,
    path: "https://www.movetocanada.com",
    icon: <GrPersonalComputer className="footer__icon" />,
  },
};

export default footerData;
