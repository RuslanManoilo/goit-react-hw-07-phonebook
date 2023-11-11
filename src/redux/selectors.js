export const getContacts = state => state.contacts.items;

// export const selectVisibleContacts = createSelector(
//     [selectContacts, selectFilter],
//     (contacts, filter) => {
//         return contacts.filter(contact => contact.name.toLowerCase()
//             .includes(filter.toLowerCase()))
//     }
// );