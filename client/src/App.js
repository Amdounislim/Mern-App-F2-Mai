import React, { useEffect } from "react"
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import AddContact from './components/AddContact';
import ContactCard from './components/ContactCard';
import { getContacts } from './JS/actions/actionContact'

function App() {
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contacts)

  const getAllContacts = () => {
    dispatch(getContacts())
  }

  useEffect(() => {
    getAllContacts()
  }, [])


  return (
    <BrowserRouter>
      <Link to="/Contact_List">
        <Button variant="outline-primary button">Contact List</Button>
      </Link>
      <Link to="/Add_Contact">
        <Button variant="primary button">Add Contact</Button>
      </Link>

      <Switch>
        <Route path="/Add_Contact" component={AddContact} />
        <Route path="/Contact_List" render={() => (<div className="contact-list">
          {contacts && contacts.map((el, i) => (<ContactCard contact={el} key={i} />))}
                                                </div>)} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
