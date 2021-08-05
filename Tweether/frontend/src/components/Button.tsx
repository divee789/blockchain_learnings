const Button = ({ children, style, onClick, disabled }: any) => (
  <button style={style} disabled={disabled} onClick={onClick}>
    {children}
  </button>
);

export default Button;
