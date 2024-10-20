const lightTheme = {
  colors: {
    primary: '#104cae', // Azul da logomarca
    secondary: '#f4faff', // Azul claro para fundos e áreas de destaque
    text: '#333333', // Texto escuro para legibilidade
    background: '#ffffff', // Fundo claro
    containerBackground: '#f1f5f9', // Fundo suave para containers e inputs
    buttonBackground: '#104cae', // Botões com cor principal
    buttonText: '#ffffff', // Texto branco nos botões
    feedbackSuccess: '#28a745', // Cor para feedback positivo (sucesso)
    feedbackError: '#dc3545', // Cor para feedback negativo (erro)
    hoverLight: '#e0e0e0', // Cor de fundo ao passar o mouse para o tema claro
  },
  fonts: {
    titleFont: "'Orbitron', sans-serif", // Fonte tech para títulos
    bodyFont: "'Roboto', sans-serif", // Fonte padrão do corpo
  },
};

const darkTheme = {
  colors: {
    primary: '#104cae', // Azul da logomarca
    secondary: '#1e2a39', // Fundo secundário escuro
    text: '#f4f4f9', // Texto claro para legibilidade
    background: '#181a1b', // Fundo escuro
    containerBackground: '#2c2f33', // Fundo escuro para containers e inputs
    buttonBackground: '#104cae', // Botões com cor principal
    buttonText: '#ffffff', // Texto branco nos botões
    feedbackSuccess: '#28a745', // Cor para feedback positivo (sucesso)
    feedbackError: '#dc3545', // Cor para feedback negativo (erro)
    activeBackground: '#132331', // Fundo ao clicar
    hoverBackground: '#1D242B', // Fundo ao passar o mouse
    // Removendo as cores personalizadas do dropdown
  },
  fonts: {
    titleFont: "'Orbitron', sans-serif", // Fonte tech para títulos
    bodyFont: "'Roboto', sans-serif", // Fonte padrão do corpo
  },
};

export { lightTheme, darkTheme };
