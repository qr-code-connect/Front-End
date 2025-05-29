import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import {
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import FilterInput from '@/app/components/FilterInput';
import InputEvent from '@/app/components/InputEvent';
import Title from '@/app/components/TitleandSubtitle';
import { AntDesign } from '@expo/vector-icons';

const mockData = [
  { title: '30 PRA UM', type: 'Shows', price: 60, date: '2025-05-28' },
  { title: 'Festival Balada', type: 'Baladas', price: 40, date: '2025-06-01' },
  { title: 'Jantar Romântico', type: 'Jantares', price: 150, date: '2025-06-02' },
  { title: 'Standup com João', type: 'Standup', price: 30, date: '2025-05-27' },
];

export default function SeeEvents() {
  const { nome, descricao, data, tipo, valorIngresso } = useLocalSearchParams();
  const { type } = useLocalSearchParams();

  const [modalVisible, setModalVisible] = useState(false);
  const [sortType, setSortType] = useState<'recent' | 'cheapest' | null>(null);
  const [searchText, setSearchText] = useState('');

  let filteredEvents = mockData.filter(event => event.type === type);

  if (searchText) {
    filteredEvents = filteredEvents.filter(event =>
      event.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  if (sortType === 'recent') {
    filteredEvents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } else if (sortType === 'cheapest') {
    filteredEvents.sort((a, b) => a.price - b.price);
  }

  if (nome) {
    filteredEvents.push({
      title: nome as string,
      type: tipo as string,
      price: Number(valorIngresso),
      date: data as string,
    });
  }

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.backButtonContainer}>
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="left" size={40} color="white" />
        </TouchableOpacity>
      </SafeAreaView>

      <SafeAreaView style={styles.contentContainer}>
        <Title title={type as string} subtitle="Para onde vamos hoje!!" size={30} />

        <View style={styles.filterAndButtonWrapper}>
          <FilterInput
            title={`Pesquise por ${type}`}
            value={searchText}
            onChangeText={setSearchText}
          />

          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.filterButton}>
            <AntDesign name="filter" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {nome && (
          <View style={styles.eventDetails}>
            <Text style={styles.eventTitle}>Evento: {nome}</Text>
            <Text>Descrição: {descricao}</Text>
            <Text>Data: {data}</Text>
            <Text>Tipo: {tipo}</Text>
            <Text>Valor do Ingresso: R$ {valorIngresso}</Text>
          </View>
        )}
      </SafeAreaView>

      <SafeAreaView style={styles.section}>
        <Text style={styles.sectionTitle}>Eventos</Text>
      </SafeAreaView>

      {filteredEvents.map((event, index) => (
        <InputEvent
          key={index}
          title={event.title}
          type={event.type}
          price={event.price}
          date={event.date}
        />
      ))}

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Ordenar por</Text>
            <Pressable onPress={() => { setSortType('recent'); setModalVisible(false); }}>
              <Text style={styles.modalOption}>Data mais recente</Text>
            </Pressable>
            <Pressable onPress={() => { setSortType('cheapest'); setModalVisible(false); }}>
              <Text style={styles.modalOption}>Menor valor</Text>
            </Pressable>
            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={[styles.modalOption, { color: 'blue' }]}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  backButtonContainer: {
    padding: 20,
    paddingTop: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  filterAndButtonWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  filterButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 12,
  },
  eventDetails: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#222',
    borderRadius: 10,
  },
  eventTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  section: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalOption: {
    fontSize: 18,
    marginVertical: 10,
  },
});
