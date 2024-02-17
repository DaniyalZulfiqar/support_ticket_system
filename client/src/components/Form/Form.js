import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import useStyles from './styles';
import { createTicket } from '../../actions/tickets';

const Form = () => {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    email: '',
    photo: '',
    description: '',
    base64: '',
    status: "Open"
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    // Validate title field
    if (!formData.title) {
      errors.title = 'Title is required.';
    }
    // Validate name field
    if (!formData.name) {
      errors.name = 'Name is required.';
    }

    // Validate email field
    if (!formData.email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid Email';
    }

    // Validate description field
    if (!formData.description) {
      errors.description = 'Description is required.';
    }

    // Set the errors and update form validity
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  useEffect(() => {

    // Trigger form validation when name,
    // email, title and description changes
    validateForm();
  }, [formData.name, formData.email, formData.title, formData.description]);

  const dispatch = useDispatch();
  const styles = useStyles;

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = () => {
    dispatch(createTicket(formData));
    console.log('Form submitted:', formData);
    clear();
  };

  const clear = () => {
    setFormData({ title: '', name: '', email: '', photo: '', description: '', base64: '' });
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.2,
      base64: true
    });

    console.log(response);

    if (response.canceled) {
      console.log('User cancelled image picker');
    }
    if (response.assets === null) {
      console.log("No Photo Selected");
    } else {
      //const source = { uri: }
      const image = 'data:image/png;base64,' + response.assets[0].base64;
      handleInputChange('photo', image);
      //handleInputChange('base64', response.assets[0].base64);
    }
  };


  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.label}>Title:</Text>
          <TextInput
            style={styles.input}
            value={formData.title}
            onChangeText={(text) => handleInputChange('title', text)}
            placeholder="Please give your ticket a title!"
          />
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            value={formData.name}
            onChangeText={(text) => handleInputChange('name', text)}
            placeholder="Enter your name"
          />

          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={formData.email}
            onChangeText={(text) => handleInputChange('email', text)}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
          <Text>Photo/Attachment (Optional):</Text>
          <TouchableOpacity style={styles.photoButton} onPress={pickImage}>
            <Text style={styles.photoButtonText}>Choose Photo</Text>
          </TouchableOpacity>
          {formData.photo && (
            <View>
              <Image source={{ uri: formData.photo }} style={{ width: 100, height: 100 }} />
            </View>
          )}

          <Text style={styles.label}>Description:</Text>
          <TextInput
            style={[styles.input, styles.descriptionInput]}
            value={formData.description}
            onChangeText={(text) => handleInputChange('description', text)}
            placeholder="Enter a description of the problem"
            multiline
          />
          <View style={styles.buttonSubmit}>
            <Button title="Submit" disabled={!isFormValid} onPress={handleSubmit} />
          </View>
          <View style={styles.buttonClear}>
            <Button title="Clear" onPress={clear} />
          </View>

          {Object.values(errors).map((error, index) => (
            <Text key={index} style={styles.error}>
              {error}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Form;