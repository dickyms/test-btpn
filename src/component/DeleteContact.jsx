import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom';
import { deleteContact, getContactById } from '../api';
import { useState } from 'react';


function DeleteContact() {
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
          <Modal.Title>Delete Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Are you sure delete {detail.firstName} {detail.lastName}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" href='/'>Cancel</Button>
          <Button variant="danger" onClick={deleteContact(id)}>Delete</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default DeleteContact;