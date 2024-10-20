import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarContainer, UserMenu, UserDropdown, UserName } from './Navbar.styles';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Navbar = ({ user }) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/login');
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <NavbarContainer>
      <div>
        {/* Aqui você pode adicionar outros itens da Navbar se necessário */}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}> {/* Adicionando position: relative */}
        {user ? (
          <>
            <UserMenu onClick={toggleDropdown} style={{ marginRight: '10px' }}>
              {user.first_name || user.username}
            </UserMenu>
            {dropdownOpen && (
              <UserDropdown>
                <UserName>{user.first_name}</UserName>
                <button onClick={() => navigate('/perfil')}>Perfil</button>
                <button onClick={handleLogout}>Sair</button>
              </UserDropdown>
            )}
          </>
        ) : (
          <div>Usuário não logado</div>
        )}
        <ThemeToggle />
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
