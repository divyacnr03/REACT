import './App.css';
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'

import Button from 'react-bootstrap/Button'

import './App.css'

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch tax filling
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} style={{"min-width": "800px"}}>
        <Modal.Header closeButton>
          <Modal.Title>Tax Filing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table>
          <tbody>
            <tr> 
              <td>Firstname</td> 
              <td><input className="mb-3" type="text"></input> </td>
            </tr>
            <tr>
          <td>
            Lastname 
            </td>
            <td>
              <input className="mb-3" type="text"></input> 
              </td>
          </tr>
          <tr>Premium <input  className="mb-3" type="text"></input> </tr>
          <tr>Address line 1 <input className="mb-3" type="text"></input> </tr>
          <tr>Address line 2 <input className="mb-3" type="text"></input> </tr>
          </tbody>
          </Table>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Reset
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Next
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default App;

