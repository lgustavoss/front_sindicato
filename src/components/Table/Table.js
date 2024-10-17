import React from 'react';
import './Table.css'; // Se você quiser adicionar estilos específicos

const Table = ({ columns, data }) => {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, index) => (
                <td key={index}>
                  {column === 'Ativo' 
                    ? (row.is_active ? 'Sim' : 'Não') // Exibindo Sim ou Não
                    : column === 'Administrador'
                    ? (row.is_superuser ? 'Sim' : 'Não') // Exibindo Sim ou Não
                    : column === 'Nome de usuário'
                    ? row.username // Acessando a propriedade username corretamente
                    : row[column.toLowerCase().replace(' ', '_')] !== undefined && row[column.toLowerCase().replace(' ', '_')] !== null 
                    ? row[column.toLowerCase().replace(' ', '_')] // Acessando corretamente as propriedades
                    : 'N/A'}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length}>Nenhum dado disponível</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;