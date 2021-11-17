import { FloatingLabel, Form, Button } from "react-bootstrap";

const CreateTuit = () => (
  <>
    <Form.Group
      size="lg"
      className="mb-3"
      controlId="exampleForm.ControlTextarea1"
    >
      {" "}
      <Form.Label className="h3">Write your tuit here:</Form.Label>
      <FloatingLabel
        controlId="floatingTextarea2"
        label="Maximum 200 characteres"
      >
        <Form.Control
          as="textarea"
          placeholder="create-tuit"
          style={{ height: "100px" }}
          maxLength="200"
        />
      </FloatingLabel>
    </Form.Group>
    <Button variant="primary" size="lg" className="m-2">
      Create tuit
    </Button>
  </>
);
export default CreateTuit;
