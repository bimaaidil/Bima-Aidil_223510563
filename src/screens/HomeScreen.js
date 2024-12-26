import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { List } from 'react-native-paper';

const fields = [
  { id: '1', name: 'Lapangan A', price: 'Rp 200.000/jam', availableTimes: ['19:00-20:00', '20:00-21:00', '21:00-22:00'] },
  { id: '2', name: 'Lapangan B', price: 'Rp 175.000/jam', availableTimes: [] },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Jam Yang Tersedia</Text>
      <FlatList
        data={fields}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <List.Item
            style={styles.listItem}
            titleStyle={styles.title}
            descriptionStyle={styles.price}
            title={item.name}
            description={`Harga: ${item.price}, Jam Tersedia: ${item.availableTimes.length > 0 ? item.availableTimes.join(', ') : 'Tidak ada'}`}
            left={(props) => <List.Icon {...props} icon="soccer" color="#1976d2" />}
            onPress={() => navigation.navigate('Booking', { field: item })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  listItem: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginVertical: 6,
    padding: 8,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e88e5',
    marginBottom: 10,
  },
});

export default HomeScreen;
