const Footer = () => {
    const currYear = new Date().getFullYear();
    return (
      <footer className="footer">
        <p>
          Copyright &copy; {currYear}
        </p>
      </footer>
    );
  };
  
  export default Footer;
  