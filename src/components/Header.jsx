import PropTypes from "prop-types";

function Header({ title, subtitle }) {
  return (
    <div className="header">
      <h1>Bonjour <span style = {{color: 'red'}}>{title}</span> </h1>
      <h2>{subtitle}</h2>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Header;
