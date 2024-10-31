const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1890ff', // Cor primária padrão do Ant Design
              '@link-color': '#1890ff', // Cor dos links
              '@success-color': '#52c41a', // Cor de sucesso
              '@warning-color': '#faad14', // Cor de aviso
              '@error-color': '#f5222d', // Cor de erro
              '@font-size-base': '14px', // Tamanho da fonte base
              '@heading-color': 'rgba(0, 0, 0, 0.85)', // Cor dos títulos
              '@text-color': 'rgba(0, 0, 0, 0.65)', // Cor do texto
              '@text-color-secondary': 'rgba(0, 0, 0, 0.45)', // Cor do texto secundário
              '@disabled-color': 'rgba(0, 0, 0, 0.25)', // Cor dos elementos desabilitados
              '@border-radius-base': '4px', // Raio de borda base
              '@border-color-base': '#d9d9d9', // Cor da borda base
              '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', // Sombra base
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};