import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';
import { FaTimes, FaHome, FaEnvelope, FaUserAlt, FaIdCardAlt, FaRegCalendarAlt, FaChartBar } from 'react-icons/fa';
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
        <h1>Dulino</h1>
        <div className="avatar-container">
          <img src={avatarDulino} alt="Avatar Dulino" className="avatar" />
        </div>
        <Link to="/municipios" onClick={() => handleItemClick('Municípios')}>
          <SidebarItem Icon={FaHome} Text="Municípios" selected={selectedItem === 'Municípios'} />
        </Link>
        <Link to="/coracao-de-maria" onClick={() => handleItemClick('Coração de Maria')}>
          <SidebarItem Icon={FaChartBar} Text="Coração de Maria" selected={selectedItem === 'Coração de Maria'} />
        </Link>
        <Link to="/conceicao-da-feira" onClick={() => handleItemClick('Conceição da Feira')}>
          <SidebarItem Icon={FaUserAlt} Text="Conceição da Feira" selected={selectedItem === 'Conceição da Feira'} />
        </Link>
        <Link to="/taboao-da-serra" onClick={() => handleItemClick('Taboão da Serra')}>
          <SidebarItem Icon={FaEnvelope} Text="Taboão da Serra" selected={selectedItem === 'Taboão da Serra'} />
        </Link>
        <Link to="/feira-de-santana" onClick={() => handleItemClick('Feira de Santana')}>
          <SidebarItem Icon={FaRegCalendarAlt} Text="Feira de Santana" selected={selectedItem === 'Feira de Santana'} />
        </Link>
        <Link to="/projetos" onClick={() => handleItemClick('Projetos')}>
          <SidebarItem Icon={FaIdCardAlt} Text="Projetos" selected={selectedItem === 'Projetos'} />
        </Link>
      </Content>
    </Container>
  );
};

export default Sidebar;
