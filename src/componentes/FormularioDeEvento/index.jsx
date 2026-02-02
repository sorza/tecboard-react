import './formulario-de-eventos.estilos.css'
import { Botao } from '../Botao'
import { TituloFormulario } from '../TituloFormulario'
import { CampoDeFormulario } from '../CampoDeFormulario'
import { Label } from '../Label'
import { CampoDeEntrada } from '../CampoDeEntrada'
import { ListaSuspensa } from '../ListaSuspensa' 

export function FormularioDeEvento({ temas, aoSubmeter }) {

  function aoFormSubmetido(formData)
  {
    console.log('Formulário submetido', formData)

    const evento = 
    {
      capa: formData.get('capa'),
      tema: temas.find(t => t.id === Number(formData.get('tema'))),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento')
    }

    aoSubmeter(evento)
  }

  return(
    <form className='form-evento' action={aoFormSubmetido}>
      <TituloFormulario>
        Preencha para criar um evento
      </TituloFormulario>
      
      <div className='campos'>
        <CampoDeFormulario>
        <Label htmlFor="nome">
          Qual o nome do evento?
        </Label>
        <CampoDeEntrada type="text" id='nome' name="nomeEvento" placeholder='Summer dev hits'/>
      </CampoDeFormulario>
       <CampoDeFormulario>
        <Label htmlFor="capa">
          Qual o endereço da imagem de capa?
        </Label>
        <CampoDeEntrada type="text" id='capa' name="capa" placeholder='https://...'/>
      </CampoDeFormulario>
      <CampoDeFormulario>
        <Label htmlFor="dataEvento">
          Data do evento
        </Label>
        <CampoDeEntrada type="date" id='dataEvento' name="dataEvento" />
      </CampoDeFormulario>
      <CampoDeFormulario>
        <Label htmlFor="tema">
          Tema do evento
        </Label>
        <ListaSuspensa id="tema" name="tema" itens={temas}/>
      </CampoDeFormulario>
      </div> 
      
      <div className='acoes'>
        <Botao>Criar Evento</Botao>
      </div>     
    </form>
  )
}