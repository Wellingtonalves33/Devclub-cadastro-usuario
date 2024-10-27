import { useRef } from "react"
import api from "../../services/api"


import { Title,
  Container,
    
   InputLabel,
    Form, 
    ContainerInputs,
     Input, 
     } from "./styles"

 
import  Button  from "../../components/Button"
import TopBackground from "../../components/TopBakground"

function Home() {
  
const inputName = useRef()
const inputAge = useRef()
const inputEmail = useRef()

async function registraNovoUser(){
  await api.post('/usuarios', {
  email: inputEmail.current.value,
  age:parseInt(inputAge.current.value),
  name: inputName.current.value
 })

}






  return (

    <Container>

     <TopBackground/>

      <Form>
        <Title> Cadastra Usuarios </Title>
        <ContainerInputs>
         
            <div>
              <InputLabel>Nome<span> *</span></InputLabel>
              <Input type="text" placeholder="Nome do usuario" ref={inputName} />
            </div>
            <div>
              <InputLabel>Idade<span>*</span></InputLabel>
              <Input type="munber" placeholder="Idade do usuario" ref={inputAge} />
            </div>
         
          </ContainerInputs>
          <div style={{width:'100%'}}>
            <InputLabel>E-mail<span>*</span></InputLabel>
            <Input type="email" placeholder="E-mail do usuario" ref={inputEmail}  />
          </div>
       


        <Button type="button" onClick={registraNovoUser} theme="primary" >Cadastra Usuario</Button>
      </Form>



      <Button type="button">Ver Lista de Usuarios</Button>
    </Container>

  )
}

export default Home
