import axios from "axios";
import { useState } from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";

const CreateTuit = () => {
  const initialTuit = {
    text: "",
  };
  const [tuit, setTuit] = useState(initialTuit);

  const changeTuit = (event) => {
    setTuit({
      ...tuit,
      [event.target.id]: event.target.value,
    });
  };

  const resetForm = () => {
    setTuit(initialTuit);
  };

  const createUserTuit = async (tiut) => {
    await axios.post("https://tiuter.herokuapp.com/tuits/createtuit", tiut, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const onCreateTuit = (event) => {
    event.preventDefault();
    createUserTuit(tuit);
    resetForm();
  };

  return (
    <>
      <Form className="container" autoComplete="off" onSubmit={onCreateTuit}>
        <Form.Group
          size="lg"
          className="mb-3 "
          controlId="exampleForm.ControlTextarea1"
        >
          {" "}
          <Form.Label className="h3 m-4">Write your tuit here:</Form.Label>
          <FloatingLabel controlId="text" label="Maximum 200 characteres">
            <Form.Control
              as="textarea"
              placeholder="create-tuit"
              style={{ height: "100px" }}
              maxLength="200"
              value={tuit.text}
              onChange={changeTuit}
            />
          </FloatingLabel>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="m-2"
            onClick={onCreateTuit}
          >
            Create tuit
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default CreateTuit;
