import { useState, useRef, useCallback } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Linking, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { Facebook, Send, Github, Linkedin } from 'lucide-react-native';

// Components
import TitleBar from '../components/TitleBar';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import Notification from '../components/Notification';

// Image
import Portrait from '../assets/images/Self/Angas.jpg';

// Data
import ContactData from '../assets/data/ContactData.json';
const { ContactInfo, SocialLinks } = ContactData;

const ContactRow = ({ label, value, onPress, isLink }) => (
  <View style={styles.idRow}>
    <Text style={styles.idLabel}>{label}</Text>
    {isLink ? (
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.idValue} numberOfLines={1} adjustsFontSizeToFit>{value}</Text>
      </TouchableOpacity>
    ) : (
      <Text style={styles.idValue}>{value}</Text>
    )}
  </View>
);

const SocialButton = ({ Icon, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.iconWrapper}>
    <Icon color="#1fbab7" size={24} />
  </TouchableOpacity>
);

const ContactScreen = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const scrollViewRef = useRef(null);

  useFocusEffect(
    useCallback(() => {
      scrollViewRef.current?.scrollTo({ y: 0, animated: false });
    }, [])
  );

  const handleSendMessage = () => {
    if (name.trim() === '' || message.trim() === '') {
      setNotification({ message: 'Please fill in all fields', type: 'error' });
    } else {
      setNotification({ message: `Message sent successfully!`, type: 'success' });
      setName('');
      setMessage('');
    }
  };

  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {notification && (
        <Notification 
          message={notification.message} 
          type={notification.type} 
          onHide={() => setNotification(null)} 
        />
      )}
      <TitleBar title="Contact" />
        <ScrollView 
          ref={scrollViewRef}
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Let's Talk</Text>
            <Text style={styles.headerSubtitle}>
              Have a project in mind?
            </Text>
          </View>

          <Card style={styles.contactCard}>
            <View style={styles.idContainer}>
              <Image source={Portrait} style={styles.idPhoto} resizeMode="cover" />
              <View style={styles.idInfo}>
                <ContactRow 
                  label="EMAIL" 
                  value={ContactInfo.email} 
                  isLink 
                  onPress={() => Linking.openURL(`mailto:${ContactInfo.email}`)} 
                />
                <ContactRow 
                  label="LOCATION" 
                  value={ContactInfo.location} 
                />
                <ContactRow 
                  label="CONTACT NO" 
                  value={ContactInfo.phone} 
                  isLink 
                  onPress={() => openLink(ContactInfo.phoneUrl)} 
                />
              </View>
            </View>
            <View style={styles.iconRow}>
              <SocialButton Icon={Facebook} onPress={() => openLink(SocialLinks.facebook)} />
              <SocialButton Icon={Send} onPress={() => openLink(SocialLinks.telegram)} />
              <SocialButton Icon={Github} onPress={() => openLink(SocialLinks.github)} />
              <SocialButton Icon={Linkedin} onPress={() => openLink(SocialLinks.linkedin)} />
            </View>
          </Card>

          {!showForm ? (
            <CustomButton
              title="Want to Send a Message?"
              onPress={() => setShowForm(true)}
              style={styles.showFormButton}
            />
          ) : (
            <View style={styles.formSection}>
              <Text style={styles.sectionLabel}>Send a Message</Text>
              <Card>
                <TextInput
                  style={styles.input}
                  placeholder="Your Name"
                  placeholderTextColor="#a0a0a0"
                  value={name}
                  onChangeText={setName}
                />

                <TextInput
                  style={[styles.input, styles.textArea]}
                  placeholder="Write your message"
                  placeholderTextColor="#a0a0a0"
                  value={message}
                  onChangeText={setMessage}
                  multiline={true}
                  textAlignVertical="top"
                />

                <CustomButton title="Send Message" onPress={handleSendMessage} style={styles.sendButton} />
              </Card>
            </View>
          )}

        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    paddingHorizontal: 25,
    paddingTop: 100,
    paddingBottom: 60,
  },
  headerContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  contactCard: {
    padding: 20,
    marginBottom: 30,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'rgba(31, 186, 183, 0.15)',
  },
  idContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  idPhoto: {
    width: 100,
    height: 150,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
  },
  idInfo: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'center',
  },
  idRow: {
    marginBottom: 8,
  },
  idLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#1fbab7',
    marginBottom: 2,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  idValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  iconWrapper: {
    padding: 10,
    backgroundColor: '#f5f7fa',
    borderRadius: 50,
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    marginLeft: 5,
    textAlign: 'center',
  },
  socialSection: {
    marginBottom: 30,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialButton: {
    flex: 0.48,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  githubButton: {
    backgroundColor: '#24292e',
  },
  linkedinButton: {
    backgroundColor: '#0077b5',
  },
  socialText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  formSection: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  textArea: {
    height: 120,
    paddingTop: 15,
    textAlignVertical: 'top',
  },
  sendButton: {
    marginTop: 5,
  },
  showFormButton: {
    marginTop: 20,
    marginBottom: 30,
  },
});

export default ContactScreen;