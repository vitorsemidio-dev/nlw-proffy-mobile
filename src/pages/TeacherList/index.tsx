import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

function TeacherList() {
  return (
    <View style={styles.container} >
      <PageHeader title="Proffys disponíveis">
        <View style={styles.searchForm}>
          <Text style={styles.label}>
            Matéria
          </Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#c1bccc"
            placeholder="Qual a matéria?"
          />

          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da semana</Text>
              <TextInput 
                style={styles.input}
                placeholderTextColor="#c1bccc"
                placeholder="Qual o dia?"
              />
            </View>

            <View style={styles.inputBlock}>
              <Text style={styles.label}>Horário</Text>
              <TextInput 
                style={styles.input}
                placeholderTextColor="#c1bccc"
                placeholder="Qual horário"
              />
            </View>
          </View>
        </View>
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >

        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />

      </ScrollView>
    </View>
  );
}

export default TeacherList;
