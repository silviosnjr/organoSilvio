import './CampoTexto.css'

const CampoTexto = (props) => {
    //console.log(props)
    const placeholderModificado = `${props.placeholder}...`
    //let valor = ''

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificado} />
        </div>
    )
}

export default CampoTexto