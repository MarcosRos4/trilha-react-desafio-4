import { IButtonProps } from "./types";

const Button = ({ title, isDisabled }: IButtonProps) => {
  const estiloBotao = {
    width: '100%',
    height: '42px',
    backgroundColor: isDisabled ? '#81259D' : '#A9A9A9', // Muda a cor para cinza se desabilitado
    color: '#FFF',
    border: `1px solid ${isDisabled ? '#81259D' : '#A9A9A9'}`, // Muda a cor da borda para cinza se desabilitado
    borderRadius: '21px',
    cursor: isDisabled ? 'pointer' : 'not-allowed', // Muda o cursor se desabilitado
    transition: 'opacity 0.3s', // Adiciona uma transição suave para o hover
    opacity: isDisabled ? 1 : 0.6, // Ajusta a opacidade se desabilitado
  };

  return <button disabled={isDisabled} style={estiloBotao} >{title}</button>;
};

export default Button;
