import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "redux/selectors";
import { deleteContact } from "redux/operations";
import { ItemBtn, ItemText, ListItem } from "components/ContactList/ContactList.styled";


export const ContactList = () => {

  const contacts = useSelector(getContacts);
  const filter = useSelector(state => state.filter);
  
  const dispatch = useDispatch();

  const filterContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  };

  return (
    <ul>
      {filterContacts().map(filteredContact => (
        <ListItem key={filteredContact.id}>
          <ItemText>
            {filteredContact.name}: {filteredContact.phone}
          </ItemText>
              
          <ItemBtn onClick={() => (dispatch(deleteContact(filteredContact.id)))}>
            Delete
          </ItemBtn>

        </ListItem>
      ))}
    </ul>
  );
};