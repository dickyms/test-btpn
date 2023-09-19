import axios from 'axios';

const BASE_URL = 'https://contact.herokuapp.com/contact';

export const getContacts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}`);
      console.log(response.data);
      return response.data.data;
    } catch (error) {
      console.error('Error getting contacts:', error);
      throw error;
    }
  };

export const createContact = async (data) => {
  try {
    const response = await axios.post(BASE_URL, data);
    return response.data;
  } catch (error) {
    console.error('Error creating contact:', error);
    throw error;  // Rethrow the error for handling at a higher level
  }
};

export const getContactById = async (contactId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${contactId}`);
    return response.data.data;
  } catch (error) {
    console.error('Error getting contact by ID:', error);
    throw error;
  }
};

export const updateContact = async (contactId, updatedData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${contactId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating contact:', error);
    throw error;
  }
};

export const deleteContact = async (contactId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${contactId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw error;
  }
};