import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

const ReviewScree = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [comments, setComments] = useState('');
  const navigation = useNavigation();

  const emojis = ['😊', '😂', '🙂', '🤔', '😐', '😔', '🤢'];
  const tags = [
    'ambience',
    'taste',
    'service',
    'music',
    'quantity',
    'presentation',
  ];

  const toggleTag = tag => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = () => {
    // Handle the submit action (e.g., send feedback to server)
    console.log('Selected Emoji:', selectedEmoji);
    console.log('Selected Tags:', selectedTags);
    console.log('Comments:', comments);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        // style={styles.closeButton}
        onPress={() => navigation.navigate('Call')}>
        <Text style={styles.closeButton}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Rate your experience :)</Text>
      <View style={styles.emojiContainer}>
        {emojis.map((emoji, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.emoji,
              selectedEmoji === emoji && styles.selectedEmoji,
            ]}
            onPress={() => setSelectedEmoji(emoji)}>
            <Text style={styles.emojiText}>{emoji}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.subtitle}>What did you like?</Text>
      <View style={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tag,
              selectedTags.includes(tag) && styles.selectedTag,
            ]}
            onPress={() => toggleTag(tag)}>
            <Text style={styles.tagText}>{tag}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.subtitle}>Comments</Text>
      <TextInput
        style={styles.commentInput}
        placeholder="Tell us what you liked...or didn’t"
        multiline
        value={comments}
        onChangeText={setComments}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fce7f3',
    padding: 20,
    borderRadius: 20,
    // margin: 10,
    // justifyContent: 'center',
  },
  closeButton: {
    alignSelf: 'flex-start',
    fontSize: 55, // Adjust font size based on screen width
    color: '#000',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  emojiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  emoji: {
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selectedEmoji: {
    backgroundColor: '#f0f0f0',
    borderColor: '#000',
  },
  emojiText: {
    fontSize: 28,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  tag: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    margin: 5,
  },
  selectedTag: {
    backgroundColor: '#f0f0f0',
  },
  tagText: {
    color: '#000',
    fontWeight: 'bold',
  },
  commentInput: {
    height: 80,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ReviewScree;
