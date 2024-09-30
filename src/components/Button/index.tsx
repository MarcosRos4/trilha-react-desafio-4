import { IButtonProps } from "./types";

const Button = ({ title, disabled, onClick }: IButtonProps) => {
  const estiloBotao = {
    width: '100%',
    height: '42px',
    backgroundColor: disabled ? '#A9A9A9' : '#81259D', // Muda a cor para cinza se desabilitado
    color: '#FFF',
    border: `1px solid ${disabled ? '#A9A9A9' : '#81259D'}`, // Muda a cor da borda para cinza se desabilitado
    borderRadius: '21px',
    cursor: disabled ? 'not-allowed' : 'pointer', // Muda o cursor se desabilitado
    transition: 'opacity 0.3s', // Adiciona uma transição suave para o hover
    opacity: disabled ? 0.6 : 1, // Ajusta a opacidade se desabilitado
  };

  return <button disabled={disabled} style={estiloBotao} onClick={onClick}>{title}</button>;
};

export default Button;
