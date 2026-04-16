import React from 'react';
import { View, 
        Text, 
        StyleSheet, 
        Image, 
        TouchableOpacity, 
        ScrollView, 
        Alert 
       } from 'react-native';

function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'blob:https://web.whatsapp.com/f8f30ca6-3f6f-4bd9-ad42-857079457418',
          }}
          style={styles.profileImage}
        />

        <Text style={styles.name}>Deeksha</Text>
        <Text style={styles.subtitle}>Student at RV University</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => Alert.alert("Calling...")}>
            <Text style={styles.buttonText}>Call</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => Alert.alert("Opening Email...")}>
            <Text style={styles.buttonText}>Email</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <Text style={styles.text}>• C, Python</Text>
        <Text style={styles.text}>• HTML, CSS</Text>
        <Text style={styles.text}>• VS Code</Text>
        <Text style={styles.text}>• Windows, Linux</Text>

        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.text}>
          BCA (Hons.), RV University (2024)
        </Text>
        
        <Text style={styles.sectionTitle}>Languages</Text>
        <Text style={styles.text}>
          Kannada, English, Hindi
        </Text>
        
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2F7',
  },
  card: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    padding: 20,
    borderRadius: 16,
    elevation: 4, 
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    alignSelf: 'center',
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F2937',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#6B7280',
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 8,
  },
  secondaryButton: {
    backgroundColor: '#10B981',
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2563EB',
    marginTop: 16,
    marginBottom: 6,
  },
  text: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 4,
  },
});
