import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { getContacts } from '../api';

function ListContact() {
    const [contacts, setContacts] = useState([]);
    async function fecthData () {
        const data = await getContacts();
        setContacts(data);
    }
    fecthData();
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact) => (
                <tr key={contact.id}>
                    <td>{contact.id}</td>
                    <td>{contact.firstName} {contact.lastName}</td>
                    <td>{contact.age}</td>
                    <td>
                    <Button href={`/edit/${contact.id}`} variant="outline-warning" className="me-5">Edit</Button>
                    <Button href={`/delete/${contact.id}`} variant="outline-danger">Delete</Button>
                    </td>
                </tr>
                ))}
            </tbody>
    </Table>
    );
}

export default ListContact;