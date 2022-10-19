import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Detalhes from "./componentes/Detalhes";
import Topo from "./componentes/Topo";

function Cesta({topo, detalhes}) {
  return (
    <ScrollView>
      <Topo {...topo}/>
      <View style={estilos.cesta}>
        <Detalhes {...detalhes}/>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default Cesta;
