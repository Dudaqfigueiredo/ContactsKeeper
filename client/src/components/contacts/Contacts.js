import React, { Fragment, useEffect, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  /* const [contactState, contactDispatch] = useContacts();

  const { contacts, filtered } = contactState;

  useEffect(() => {
    getContacts(contactDispatch);
  }, [contactDispatch]);

  if (contacts !== null && contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  } */

  const contactContext = useContext(ContactContext)
  const { contacts } = contactContext;

  return (
    <Fragment>
      {contacts.map(contact => (<ContactItem key={contact.id} contact={contact}/>))}
      {/* {contacts !== null ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )} */}
    </Fragment>
  );
};

export default Contacts;
