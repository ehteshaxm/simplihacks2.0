const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`${className} bg-app-yellow rounded-md font-medium`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
