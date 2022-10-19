import React from "react";

import { StyleSheet, TouchableOpacity } from "react-native";
import Texto from "./Texto";

export default function Botao({title, style}) {
  return (
    <TouchableOpacity style={[style, estilos.botao]}>
      <Texto style={estilos.textoBotao}>{title}</Texto>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
    botao: {
        paddingVertical: 16,
        backgroundColor: "#2A9F85",
        borderRadius: 6
      },
      textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
        lineHeight: 26
      }
})