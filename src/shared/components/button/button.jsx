const { Link } = require("react-router-dom");
const { clx } = require("shared/configs");

const Button = ({ isDisable,label, onClick, className, link, icon }) => {
  return (
    <>
      {link ? (
        <button isDisable onClick={onClick} className={clx("", className)}>
          <Link
            to={link}
            className="flex items-center gap-5 justify-center w-full h-full "
          >
            <i className={icon}></i>
            {label}
          </Link>
        </button>
      ) : (
        <button
          onClick={onClick}
          className={clx("flex items-center gap-5 justify-center ", className)}
        >
          <i className={icon}></i>
          {label}
        </button>
      )}
    </>
  );
};
export default Button;
