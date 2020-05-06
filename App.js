import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import Header from './components/header';
import User from './components/user';

//fonte de dados puxando de arquivo JSON
const DATA = require('./data/pacientes.json');

//função que gera cada elemento
function Item({
  nome,
  sexo,
  data_nasc,
  data_atendimento,
  sintomas,
  doenca_preexitente,
  statuscovid,
}) {
  return (
    <View style={styles.item}>
      <User nome={nome} />
      <User sexo={sexo} />
      <User data_nasc={data_nasc} />
      <User data_atendimento={data_atendimento} />
      <User sintomas={sintomas} />
      <User doenca_preexitente={doenca_preexitente} />
      <User statuscovid={statuscovid} />
    </View>
  );
}

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item
              nome={item.nome}
              sexo={item.sexo}
              data_nasc={item.data_nasc}
              data_atendimento={item.data_atendimento}
              sintomas={item.sintomas}
              doenca_preexitente={item.doenca_preexitente}
              statuscovid={item.statuscovid}
            />
          )}
          ListHeaderComponent={
            <Header headerText="Hospital São Michael" />
          }
          stickyHeaderIndices={[0]}
        />
      </SafeAreaView>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
  item: {
    padding: 10,
  },
});
