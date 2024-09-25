import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const SettingsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nuevas Noticias muy nuevas!</Text>
      <Text style={styles.paragraph}>
       El nuevo juego de Zelda ya esta para emular y aun no sale por parte de nintendooo
      </Text>

      <Text style={styles.paragraph}>
        antes de su lanzamiento, el juego fue filtrado y ahora ya puede ser jugado por los pc gamers
      </Text>

      <Image
        source={require('../src/assets/imagen1.png')} // Segunda imagen de ejemplo
        style={styles.image}
      />

      <Text style={styles.paragraph}>
        bye vuelva mañana
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, // Ajusta los márgenes laterales y superior
    backgroundColor: '#f5f5f5',
    
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  image: {
    width: '50%', // Ajusta el ancho de la imagen
    height: 700,  // Ajusta la altura de la imagen
    borderRadius: 10, // Bordes redondeados en la imagen
    marginBottom: 70,
    resizeMode: 'contain', // O usa 'cover' dependiendo de tu preferencia
  },  
  paragraph: {
    fontSize: 16,
    lineHeight: 28,
    textAlign: 'justify', // Justifica el texto
    marginBottom: 20, // Espacio entre párrafos
    color: '#444', // Color del texto
  },
});

export default SettingsScreen;

