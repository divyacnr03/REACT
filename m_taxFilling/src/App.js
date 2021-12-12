import './App.css';
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'

import Button from 'react-bootstrap/Button'

import './App.css'

function App() {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("")  // mnadory
  const [lastName, setLastName] = useState("")
  const [premium, setPreminum] = useState("")  // mandatory
  const [addrLine1, setAddrLine1] = useState("") // mnadatory
  const [addrLine2, setAddrLine2] = useState("")

  const handleClose = () => {
    setShow(false)
    setFirstName("")
    setLastName("")
    setPreminum("")
    setAddrLine1("")
    setAddrLine2("")
  }
  const handleShow = () => setShow(true);

  const handleReset = () => {
    setFirstName("")
    setLastName("")
    setPreminum("")
    setAddrLine1("")
    setAddrLine2("")
  }


  function onChangeFirstName(event) {

    const regex = new RegExp('^[a-zA-Z]*$');
    if(regex.test(event.target.value)){
      setFirstName(event.target.value)
    }
  }


  function onChangelastName(event) {
    setLastName(event.target.value)
  }



  function onChangepremium(event) {
    const regex = new RegExp('((\d+)(\.\d{1}))$');
    if(regex.test(event.target.value)){
      setPreminum(event.target.value)
    }

  }

  function onChangeaddrLine1(event) {
    setAddrLine1(event.target.value)
  }


  function onChangeaddrLine2(event) {
    setAddrLine2(event.target.value)
  }

  function isAllMandotryFieldsEntered() {
    return ( firstName && premium && addrLine1)
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch tax filling
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} style={{ "min-width": "800px" }}  >
        <Modal.Header closeButton>
          <Modal.Title>Tax Filing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table>
            <tbody>
              <tr>
                <td>Firstname</td>
                <td><input className="mb-3" type="text" value={firstName} onChange={onChangeFirstName}></input> </td>
              </tr>
              <tr>
                <td>
                  Lastname
                </td>
                <td>
                  <input className="mb-3" type="text" value={lastName} onChange={onChangelastName} ></input>
                </td>
              </tr>
              <tr><td> Premium </td><td> <input className="mb-3" type="text" value={premium} onChange={onChangepremium}></input> </td></tr>
              <tr> <td>Address line 1 </td><td> <input className="mb-3" type="text" value={addrLine1} onChange={onChangeaddrLine1}></input> </td></tr>
              <tr><td> Address line 2 </td><td>< input className="mb-3" type="text" value={addrLine2} onChange={onChangeaddrLine2}></input> </td></tr>
            </tbody>
          </Table>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
          {isAllMandotryFieldsEntered() ?
            <Button variant="primary" onClick={handleClose} >
              Next
            </Button> :
            <Button variant="primary" onClick={handleClose} disabled>
              Next
            </Button>
          }

        </Modal.Footer>
      </Modal>
    </>
  );
}


export default App;

