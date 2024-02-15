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
      quality: 1,
    });

    console.log(response);

    if (response.canceled) {
      console.log('User cancelled image picker');
    }
    if (response.assets === null) {
      console.log("No Photo Selected");
    } else {
      //const source = { uri: }
      const image = 'data:image/jpeg;base64,' + response.assets[0].uri;
      handleInputChange('photo', response.assets[0].uri);
      handleInputChange('base64', image);
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
          <Text>Photo/Attachment:</Text>
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

          <Button title="Submit" onPress={handleSubmit} />
          <Button title="Clear" onPress={clear} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Form;