const Button = ({ children, className }) => {
  return (
    <button className={`${className} bg-app-yellow rounded-md font-medium`}>
      {children}
    </button>
  );
};

export default Button;
