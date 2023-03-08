import { FaFacebook, FaInstagram } from "react-icons/fa";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footerMain}>
      <div className={styles.fotterContainer}>
        <div className={styles.aboutUsDiv}>
          <h3>About us</h3>
          <div className={styles.flexContainer}>
            <div>
              <div>
                <a href="https://www.bluefly.com/pages/contact-us">
                  Contact Us
                </a>
              </div>
              <div>
                <a href="https://www.bluefly.com/pages/faq">
                  Frequently Asked Questions
                </a>
              </div>
              <div>
                <a href="https://www.bluefly.com/pages/returns">
                  Shipping & Returns
                </a>
              </div>
              <div>
                <a href="https://www.bluefly.com/pages/pre-owned-condition-guide">
                  Pre-Owned Guide
                </a>
              </div>
            </div>
            <div>
              <div>
                <a href="https://www.bluefly.com/pages/partner-with-bluefly">
                  Sell on Bluefly
                </a>
              </div>
              <div>
                <a href="https://www.bluefly.com/policies/privacy-policy">
                  Privacy Policy
                </a>
              </div>
              <div>
                <a href="https://www.bluefly.com/policies/terms-of-service">
                  Terms & Conditions
                </a>
              </div>
              <div>
                <a href="https://www.bluefly.com/pages/ccpa-opt-out">
                  Do not sell my personal information
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.signup}>
          <h3>SIGN UP AND SAVE</h3>
          <div>
            <p>Subscribe to get exclusive offers on designer brands</p>
            <div>
              <input
                placeholder="Enter your mail"
                className={styles.footerInput}
              />
            </div>
            <button className={styles.footerButton}>Subscribe</button>
            <div style={{ display: "flex", gap: "2rem", marginTop: "20px" }}>
              <FaInstagram size={"2rem"} cursor={"pointer"} />

              <FaFacebook size={"2rem"} cursor={"pointer"} />
            </div>
          </div>
        </div>
      </div>
      <p className={styles.pera}>
        © 2022 Bluefly 1998-2020 BLUEFLY.COM OR ITS AFFILIATES ALL RIGHTS
        RESERVED.
      </p>
    </div>
  );
};
