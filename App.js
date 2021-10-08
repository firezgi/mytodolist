import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  CheckBox,
  ScrollView
} from "react-native";

export default function App() {
  const [newTask, setNewTask] = useState("");

  const [lists, setList] = useState([
    { item: "First item" },
    { item: "Second item" },
  ]);
  const onChangeText = (type) => {
    setNewTask(type);
  };
  const add = () => {
    setList([...lists,{ item: newTask } ]);
    setNewTask("");
  };
  const handleChange = (index) => {
    const proceed = confirm("Are u sure?");
    proceed && 
    setList(lists.filter((list, i) => i !== index));
};

  return (
    <View style={styles.container}>
<View style={styles.titleWrap}>
<Text style={styles.titleName}>To Do List</Text>

</View>
      
<View style={styles.inBtn}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Add task"
        value={newTask}
      />
<View style={styles.btn}>
<Button  onPress={add} title="Add to do list " color="#841584" />
    </View>
</View>
      
      <ScrollView>
      
      
        {lists.map((task, index) => (
          <View key={index} style={styles.cbTask}>
            <CheckBox
              onValueChange={() => handleChange(index)}
              style={styles.checkbox}
            />
            <Text style={styles.text}>{task.item}</Text>
            
          </View>
        ))}

      <StatusBar style="auto" />
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: 'flex-end',
  },
  titleWrap:{
    backgroundColor:"blue",
    height:"4em",
    width:"100%",
    textAlign:"center",
    marginBottom:10,
    


  },
  
  titleName: {
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 20,
    fontSize:'2em',
    paddingBottom:20,
    fontWeight:900,
    fontFamily:'italic'

  },
  input: {
    backgroundColor: "yellow",
    width:'80%',
    height:'2em',
    padding:20,
    marginBottom:5,
    borderRadius:10,
    fontSize:"1.2em"

  },
  btn:{
    marginBottom:5,
    padding:5

  },
  cbTask:{
    flexDirection:"row",
    // justifyContent:"flex-start"
    // alignSelf:""


  },
  checkbox: {
    alignSelf: "center",
    margin:5
  },
  text:{
    margin:5,
    fontSize:'1.5em',
    fontWeight:100,
    fontFamily:'Serif'
  },
  inBtn:{
    flexDirection:"row"
  }
});



