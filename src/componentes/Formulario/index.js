import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = (props) => {

    const parentescos = [
        "Pai",
        "Mãe",
        "Avos Paternos",
        "Avos Maternos",
        "Irmãos",
        "Tios Paternos",
        "Tios Maternos"
    ]

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [parentesco, setParentesco] = useState('');

    const aoSalvar = (evento) =>{
        evento.preventDefault();
        props.aoFamiliarCadastrado({
            nome,
            cargo,
            imagem,
            parentesco
        })

        console.log("Form foi submetido => ", nome, cargo, imagem, parentesco)
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preenche os dados para criar o card do membro da família</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>
                <CampoTexto 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}/>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço de sua imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa 
                    obrigatorio={true} 
                    itens={parentescos} 
                    valor={parentesco}
                    label="Parentesco" 
                    aoAlterado={valor => setParentesco(valor)}
                    placeholder="Selecione o seu parentesco"/>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;