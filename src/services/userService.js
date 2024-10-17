mport { useNavigate } from 'react-router-dom'; // Importe useNavigate no seu componente

export const fetchUsers = async () => {
  const accessToken = localStorage.getItem('access_token');
  const navigate = useNavigate(); // Inicialize useNavigate

  try {
    const response = await axios.get(`${BASE_URL}/usuario/users/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Tente obter um novo token de acesso
      try {
        await refreshAccessToken();
        const newAccessToken = localStorage.getItem('access_token');
        const retryResponse = await axios.get(`${BASE_URL}/usuario/users/`, {
          headers: {
            Authorization: `Bearer ${newAccessToken}`,
          },
        });
        return retryResponse.data;
      } catch (refreshError) {
        console.error('Erro ao tentar obter novos dados após refresh:', refreshError);
        // Redireciona para a tela de login se o refresh falhar
        navigate('/login'); // Redireciona para a página de login
        throw refreshError;
      }
    }
    throw error; // Lança o erro original se não for 401
  }