import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';
import { FaTimes, FaHome, FaFlag, FaCross, FaCalendarDay, FaHeart, FaChessRook } from 'react-icons/fa';
import SidebarItem from '../SidebarItem';
import avatarDulino from "../images/avatarDulino.webp";

const Sidebar = ({ active, setActive }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const closeSidebar = () => {
    setActive(false);
  };

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
    setActive(true);
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} style={{ cursor: 'pointer', margin: '20px' }} />
      <Content>
        <div className="avatar-container">
          <img src={avatarDulino} alt="Avatar Dulino" className="avatar" />
        </div>
        <Link to="/municipios" className="link-no-underline" onClick={() => handleItemClick('Municípios')}>
          <SidebarItem Icon={FaHome} Text="Home" selected={selectedItem === 'Municípios'} />
        </Link>
        <Link to="/coracao-de-maria" className="link-no-underline" onClick={() => handleItemClick('Coração de Maria')}>
          <SidebarItem Icon={FaHeart} Text="Coração de Maria" selected={selectedItem === 'Coração de Maria'} />
        </Link>
        <Link to="/conceicao-da-feira" className="link-no-underline" onClick={() => handleItemClick('Conceição da Feira')}>
          <SidebarItem Icon={FaCross} Text="Conceição da Feira" selected={selectedItem === 'Conceição da Feira'} />
        </Link>
        <Link to="/taboao-da-serra" className="link-no-underline" onClick={() => handleItemClick('Taboão da Serra')}>
          <SidebarItem Icon={FaFlag} Text="Taboão da Serra" selected={selectedItem === 'Taboão da Serra'} />
        </Link>
        <Link to="/feira-de-santana" className="link-no-underline" onClick={() => handleItemClick('Feira de Santana')}>
          <SidebarItem Icon={FaChessRook} Text="Feira de Santana" selected={selectedItem === 'Feira de Santana'} />
        </Link>
        <Link to="/projetos" className="link-no-underline" onClick={() => handleItemClick('Projetos')}>
          <SidebarItem Icon={FaCalendarDay} Text="Projetos" selected={selectedItem === 'Projetos'} />
        </Link>
      </Content>
    </Container>
  );
};

export default Sidebar;
