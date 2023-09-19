import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { getContactById } from '../api';
import { useState } from 'react';


function EditContact() {
    const {id} = useParams();
    const [detail, setDetail] = useState({});
    async function fetchContactByID() {
        const result = await getContactById(id);
        setDetail(result);
    }
    fetchContactByID();
  return (
        <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="" defaultValue={detail.firstName}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="" defaultValue={detail.lastName}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="" defaultValue={detail.age}/>
            </Form.Group>
        </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" href='/'>Cancel</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default EditContact;