import { useState } from 'react';
import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto';
import Formulario from './componentes/Formulario';
import Familia from './componentes/Familia';

function App() {

  const familias = [
    {
      nome: "Pai",
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: "Mãe",
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: "Avos Paternos",
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: "Avos Maternos",
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: "Irmãos",
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: "Tios Paternos",
      corPrimaria: '',
      corSecundaria: ''
    },
    {
      nome: "Tios Maternos",
      corPrimaria: '',
      corSecundaria: ''
    }
  ]

  const [familiares, setFamiliares] = useState([])

  const aoNovoFamiliarAdicionado = (familiar) => {
    console.log(familiar)
    setFamiliares([...familiares, familiar])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoFamiliarCadastrado={familiar => aoNovoFamiliarAdicionado(familiar)}/>
      <Familia name='atual' />
      <Familia name='pai' />
      <Familia name='mae' />
    </div>
  );
}

export default App;
