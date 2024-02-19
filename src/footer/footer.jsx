import footerlogo from '../assets/home/footerMobileLogo.svg';

const Footer = () => {
  return (
    <footer>

      <address>
        Budapest,
        Bécsi road 3-5.
        +36 30 123 456
      </address>

      <logo>
        <img src={footerlogo} className="footer-logo" alt="logo" />
      </logo>

      <address>
        Office: Budapest,
        Galagonya street 6
        +36 30 123 456
      </address>

    </footer>
  )
}

export default Footer;
