import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


import * as ImagePicker from 'expo-image-picker';

const SupportTicketForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photo: null,
    description: '',
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = () => {
    // Add your logic to handle the form submission here
    console.log('Form submitted:', formData);
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (result.canceled) {
      console.log('User cancelled image picker');
    }
    if (result.assets === null) {
      console.log("No Photo Selected");
    } else {
      handleInputChange('photo', result.assets[0].uri);
    }
  };



  return (
    <View style={styles.container}>
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

      <Text>Photo/Attachment:</Text>
      <TouchableOpacity style={styles.photoButton} onPress={pickImage}>
        <Text style={styles.photoButtonText}>Choose Photo</Text>
      </TouchableOpacity>
      {formData.photo && (
        <Image source={{ uri: formData.photo }} style={{ width: 100, height: 100 }} />
      )}

      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={[styles.input, styles.descriptionInput]}
        value={formData.description}
        onChangeText={(text) => handleInputChange('description', text)}
        placeholder="Enter a description of the problem"
        multiline
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  photoButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  photoButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  previewImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 5,
  },
  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default SupportTicketForm;
