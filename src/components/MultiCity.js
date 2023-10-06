import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import { Calendar } from "react-native-calendars";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

export default function MultiCity() {
  const navigation = useNavigation();
  const [value, setValue] = React.useState(null);
  const [isFocus, setIsFocus] = React.useState(false);
  const [isFocusTwo, setIsFocusTwo] = React.useState(false);
  const [selectedDates, setSelectedDates] = React.useState([]);

  const [isOpen, setIsOpen] = React.useState(false);

  const handleDayPress = (day) => {
    const { dateString } = day;
    let newSelectedDates = [...selectedDates];

    if (newSelectedDates.length === 0 || newSelectedDates.length === 2) {
      newSelectedDates = [dateString];
    } else if (newSelectedDates.length === 1) {
      const startDate = new Date(newSelectedDates[0]);
      const endDate = new Date(dateString);

      if (startDate > endDate) {
        newSelectedDates = [dateString, newSelectedDates[0]];
      } else {
        newSelectedDates.push(dateString);
      }
    }
    setSelectedDates(newSelectedDates);
  };

  const generateMarkedDates = (selectedDates) => {
    const markedDates = {};
    selectedDates.forEach((date, index) => {
      if (index === 0) {
        markedDates[date] = { startingDay: true, color: "blue" };
      } else if (index === selectedDates.length - 1) {
        markedDates[date] = { endingDay: true, color: "blue", text: "white" };
      } else {
        markedDates[date] = { color: "blue" };
      }
    });
    return markedDates;
  };

  const renderWhereFrom = () => {
    if (value || isFocus) {
      return (
        <Text
          style={[
            styles.label,
            isFocus && { top: 30, left: 40, color: "blue" },
          ]}
        >
          Where From
        </Text>
      );
    }
    return null;
  };

  const renderWhereTo = () => {
    if (value || isFocusTwo) {
      return (
        <Text
          style={[
            styles.label,
            isFocusTwo && { top: 105, left: 40, color: "blue" },
          ]}
        >
          Where To
        </Text>
      );
    }
    return null;
  };

  const data = [
    { value: "1", label: "Mobiles" },
    { value: "2", label: "Appliances" },
    { value: "3", label: "Cameras" },
    { value: "4", label: "Computers" },
    { value: "5", label: "Vegetables" },
    { value: "6", label: "Diary Products" },
    { value: "7", label: "Drinks" },
  ];

  return (
    <View className="flex items-center mx-2 h-[700px]  bg-neutral-200 rounded-2xl">
      {renderWhereFrom()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        className="mt-10"
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        containerStyle={styles.container}
        data={data}
        search={false}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Where from" : "..."}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <MaterialCommunityIcons
            style={styles.icon}
            color={isFocus ? "blue" : "black"}
            name="airplane-takeoff"
            size={20}
          />
        )}
      />

      {renderWhereTo()}
      <Dropdown
        style={[styles.dropdown, isFocusTwo && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        containerStyle={styles.container}
        className="mt-4"
        data={data}
        search={false}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocusTwo ? "Where to" : "..."}
        value={value}
        onFocus={() => setIsFocusTwo(true)}
        onBlur={() => setIsFocusTwo(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <MaterialCommunityIcons
            style={styles.icon}
            color={isFocusTwo ? "blue" : "black"}
            name="airplane-landing"
            size={20}
          />
        )}
      />

      <View>
        <Ionicons
          name="calendar-outline"
          size={24}
          color="black"
          onPress={() => setIsOpen(true)}
        />
        <TextInput
          value={`${selectedDates || "selectdate"}`}
          editable={false}
        />
      </View>
      <Modal visible={isOpen}>
        <Calendar
          markingType="period"
          markedDates={generateMarkedDates(selectedDates)}
          onDayPress={handleDayPress}
        />

        <Text
          onPress={() => setIsOpen(false)}
          className="p-6 bg-red-500 items-center text-center"
        >
          Done
        </Text>
      </Modal>

      <View className="flex items-center w-full">
        <TouchableOpacity
          className="w-[401px] p-5 bg-green-400 rounded-lg"
          onPress={() => navigation.navigate("ManageBooking")}
        >
          <Text className="text-center text-black">Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(229,229,229)",
    padding: 16,
    width: 401,
    height: 400,
    marginTop: 14,
    borderRadius: 10,
    elevation: 3,
  },
  dropdown: {
    height: 60,
    width: 400,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 20,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "rgb(229,229,229)",
    left: 22,
    top: 10,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
