import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

const ContactsMenuButtons = [
  {
    type: "starred",
    name: "starred",
  },
  {
    type: "contact",
    name: "Garvit Aggarwal",
    photo: require("../assets/1.jpg"),
  },
  {
    type: "contact",
    name: "Arjun",
    photo: require("../assets/2.jpg"),
  },
  {
    type: "contact",
    name: "Harsh",
    photo: require("../assets/3.jpg"),
  },
];

const ContactsMenu = () => {
  return (
    <View style={styles.container}>
      {/* Contact Container */}
      {ContactsMenuButtons.map((contact, index) => (
        <View key={index} style={styles.row}>
          {/* Image */}
          {contact.type == "starred" ? (
            <View style={styles.starredIcon}>
              <AntDesign name="star" size={30} color="#efefef" />
            </View>
          ) : (
            <Image source={contact.photo} style={styles.image} />
          )}

          {/* Text */}
          <Text style={styles.text}>{contact.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default ContactsMenu;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  starredIcon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "white",
    paddingLeft: 15,
    fontSize: 18,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});
