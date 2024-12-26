import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { TextInput, Button, Card, Snackbar } from 'react-native-paper';

const BookingScreen = ({ route, navigation }) => {
  const { field } = route.params;
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleBooking = () => {
    if (!time || !field.availableTimes.includes(time)) {
      setSnackbarMessage(`Jam ${time || 'kosong'} tidak tersedia. Silakan pilih jam yang tersedia.`);
      setSnackbarVisible(true);
      return;
    }
    alert(`Booking berhasil untuk ${field.name} oleh ${name} pada jam ${time}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>{field.name}</Text>
          <Text style={styles.cardPrice}>{field.price}</Text>
          <Text style={styles.availableTimes}>
            Jam tersedia: {field.availableTimes.length > 0 ? field.availableTimes.join(', ') : 'Tidak ada'}
          </Text>
        </Card.Content>
      </Card>

      <TextInput
        label="Nama Pemesan"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        label="Jam booking"
        value={time}
        onChangeText={setTime}
        style={styles.input}
      />
      <TextInput
        label="Durasi (jam)"
        value={duration}
        onChangeText={setDuration}
        keyboardType="numeric"
        style={styles.input}
      />

      <Button
        mode="contained"
        onPress={handleBooking}
        style={styles.button}
        labelStyle={styles.buttonLabel}
      >
        Pesan Sekarang
      </Button>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={1}
      >
        {snackbarMessage}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  card: {
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    elevation: 3,
    padding: 12,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e88e5',
    marginBottom: 8,
  },
  cardPrice: {
    fontSize: 18,
    color: '#757575',
  },
  availableTimes: {
    fontSize: 16,
    color: '#4caf50',
    marginTop: 8,
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  button: {
    marginTop: 16,
    padding: 10,
    backgroundColor: '#1e88e5',
  },
  buttonLabel: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default BookingScreen;
