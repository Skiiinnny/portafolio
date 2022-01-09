import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const FormularioContacto = () => (
  <Form inline className="container">
    <FormGroup className="mb-2 me-sm-2 mb-sm-0">
      <Label className="me-sm-2" for="inputEmail">
        Email
      </Label>
      <Input
        id="inputEmail"
        name="email"
        placeholder="tucorreo@jsx.com"
        type="email"
      />
    </FormGroup>
    <FormGroup className="mb-2 me-sm-2 mb-sm-0">
      <Label className="me-sm-2" for="inputNombre">
        Nombre Completo
      </Label>
      <Input
        id="inputNombre"
        name="nombre"
        placeholder="McLovin"
        type="text"
      />
    </FormGroup>
    <FormGroup>
        <Label className="me-sm-2" for="inputMensaje">Mensaje</Label>
        <Input id="inputMensaje" name="mensaje" type="text" placeholder="Lo que tengas por decirme">
        </Input>
    </FormGroup>
    <Button>Enviar</Button>
  </Form>
);
export default FormularioContacto
