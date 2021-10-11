import React, { useState, useEffect } from 'react'
import { Card, Form, Button } from "react-bootstrap"
import { addContact, editContact } from '../JS/actions/actionContact'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

const AddContact = () => {

  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: ""
  })


  const dispatch = useDispatch()
  const contactId = useSelector(state => state.contactId)
  const isEdit = useSelector(state => state.isEdit)

  useEffect(() => {
    if (isEdit) {
      setNewContact(contactId)
    }
    else {
      setNewContact({ name: "", email: "", phone: "" })
    }
  }, [isEdit, contactId])

  const handelChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value })
  }


  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          width: "22rem",
          height: "25rem",
          marginRight: "30px",
          marginBottom: "20px",
          marginTop: "30px",
          backgroundColor: "white",
          borderRadius: "8px",
          border: "transparent",
          boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)",
        }}
      >
        <Card.Header
          style={{
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            backgroundColor: "#277fa5",
            color: "white",
          }}
        >
          {isEdit ? "Edit Contact" : "Add New Contact"}
        </Card.Header>

        <Card.Body>
          <Card.Text>
            <Form>
              <Form.Group controlId="formBasicEmail" style={{ textAlign: "left" }}>
                <Form.Label >name :</Form.Label>
                <Form.Control type="text" name="name" value={newContact.name} placeholder="Enter your name" onChange={handelChange} />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" style={{ textAlign: "left" }}>
                <Form.Label >email :</Form.Label>
                <Form.Control type="email" name="email" value={newContact.email} placeholder="Enter your email" onChange={handelChange} />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" style={{ textAlign: "left" }}>
                <Form.Label >phone :</Form.Label>
                <Form.Control type="text" name="phone" value={newContact.phone} placeholder="Enter your phone" onChange={handelChange} />
              </Form.Group>
            </Form>
          </Card.Text>
        </Card.Body>
        <div className="buttons">
          <Link to='/Contact_List'>
            <Button variant="outline-danger edit-button">Cancel</Button>
          </Link>
          <Link to="/Contact_List">
            <Button variant="outline-primary edit-button" onClick={() => {
              isEdit ? dispatch(editContact(newContact._id, newContact))
                : dispatch(addContact(newContact));
            }}>
              {isEdit ? "Save" : "Add"}
            </Button>
          </Link>
        </div>
      </Card>
    </div>


  )
}

export default AddContact
