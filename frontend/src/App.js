import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Navbar from "./components/navbar/navbar.jsx";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

const NavButton = styled.button`
  margin-bottom: 10px;
`;

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  const [activeTab, setActiveTab] = useState('cliente');

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Container>
        <Title>Clientes</Title>
        <NavButton onClick={() => handleTabChange('produto')}>Ver Produtos</NavButton>
        {activeTab === 'cliente' && (
          <>
            <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
            <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
          </>
        )}
        {activeTab === 'produto' && (
          <>
            {/* Componente de Produto aqui */}
            <p>Conteúdo da aba Produto</p>
          </>
        )}
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
