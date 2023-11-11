import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Container, SecondTitle, Title } from "./GlobalStyle";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectError, selectIsLoading } from "redux/selectors";
import { Loader } from "./Loader/Loader";


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <ToastContainer />

      <SecondTitle>Contacts</SecondTitle>
      <Filter />
      <ContactList />

      {isLoading && !error && <Loader />}
    </Container>
  );
};