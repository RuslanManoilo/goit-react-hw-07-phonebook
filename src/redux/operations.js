import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://654ea577358230d8f0ccbe08.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const responce = await axios.get("/contacts");
        return responce.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async (newContact, thunkAPI) => {
    try {
        const responce = await axios.post("/contacts", newContact);
        return responce.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (ID, thunkAPI) => {
    try {
        const responce = await axios.delete(`/contacts/${ID}`);
        return responce.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});