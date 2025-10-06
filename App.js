import { SafeAreaView, Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function App() {
  const gradePoints = { 'F': 0, 'D': 1.5, 'C': 2, 'C+': 2.75, 'B': 3, 'B+': 3.5, 'A': 4 };

  const [sswd, setSswd] = useState('D');
  const [ob, setOb] = useState('D');
  const [mobileApps, setMobileApps] = useState('D');
  const [digitalMarketing, setDigitalMarketing] = useState('D');
  const [ooaD, setOOAD] = useState('D');
  const [finMgmt, setFinMgmt] = useState('D');

  var gpa = 0;
  var credits = 5;
  var totalPossibleCredits = 30; // 6 modules, each with 5 credits
  var totalGradeScores = 0;

  function clickMe() {
    let totalGradeScores = 0;
    alert("this is the click me button"); // Web alert
    Alert.alert("this is the click me button"); // Phone alert

    totalGradeScores += (gradePoints[sswd.toUpperCase()] * credits);
    totalGradeScores += (gradePoints[ob.toUpperCase()] * credits);
    totalGradeScores += (gradePoints[mobileApps.toUpperCase()] * credits);
    totalGradeScores += (gradePoints[digitalMarketing.toUpperCase()] * credits);
    totalGradeScores += (gradePoints[ooaD.toUpperCase()] * credits);
    totalGradeScores += (gradePoints[finMgmt.toUpperCase()] * credits);

    gpa = totalGradeScores / totalPossibleCredits;
    alert("gpa = " + gpa.toFixed(2));
  }

  const styles = StyleSheet.create({
    container: {
      padding: "5%",
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: "5%",
    },
    label: {
      flex: 1,
      marginRight: "5%",
      fontWeight: "bold",
    },
    textInput: {
      flex: 1,
      borderColor: '#ccc',
      borderWidth: 1,
      padding: "3%",
      marginLeft: "5%",
      marginRight: "5%",
      borderRadius: 4,
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginBottom: "10%" }}>
        <Text style={{ fontWeight: "bold", fontSize: 24, textAlign: "center" }}>GPA Calculator</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Maths</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Grade"
          onChangeText={text => setSswd(text.toUpperCase())}
          value={sswd}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Organisational Behaviour</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Grade"
          onChangeText={text => setOb(text.toUpperCase())}
          value={ob}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Mobile Apps</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Grade"
          onChangeText={text => setMobileApps(text.toUpperCase())}
          value={mobileApps}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Digital Marketing</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Grade"
          onChangeText={text => setDigitalMarketing(text.toUpperCase())}
          value={digitalMarketing}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>OOAD</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Grade"
          onChangeText={text => setOOAD(text.toUpperCase())}
          value={ooaD}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Financial Management</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Grade"
          onChangeText={text => setFinMgmt(text.toUpperCase())}
          value={finMgmt}
        />
      </View>

      <View style={{ marginTop: "5%" }}>
        <Button title="Submit" onPress={clickMe} />
      </View>
    </SafeAreaView>
  );
}
}

