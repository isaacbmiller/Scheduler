import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const TermSelector = ({terms, selectedTerm, setSelectedTerm}) => (
    <View style={styles.termSelector}>
      { 
        terms.map(term => (
          <TermButton key={term} term={term} setSelectedTerm={setSelectedTerm}
          isActive={term === selectedTerm}
          />
        ))
      }
    </View>
  );

const TermButton = ({term, setSelectedTerm, isActive}) => (
    <TouchableOpacity onPress={() => setSelectedTerm(term)}
    style={styles[isActive ? 'termButtonActive' : 'termButton']}>
      <Text style={styles.termText}>{term}</Text>
    </TouchableOpacity>
);

const termButtonBase = {
    flex: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 40,
    padding: 10,
    minWidth: 90,
    maxWidth: 90,
  };
  
const styles = StyleSheet.create({
    termSelector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 350,
    },
    termButton: {
        ...termButtonBase,
        backgroundColor: '#4f9f64',
    },

    termButtonActive: {
        ...termButtonBase,
        backgroundColor: '#105f25',
    },
    termText: {
        color: '#fff',
        fontSize: 15,
    },
});
  
  export default TermSelector;