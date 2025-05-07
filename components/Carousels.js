import { Text, View, FlatList, Dimensions } from "react-native";

const Carousel = () => {
  const name = [
    { name: " basava madhu", age: 89 },
    { name: " kathipalli madhu", age: 21 },
    { name: " basava madhu", age: 89 },
    { name: " basava madhu", age: 89 },
    { name: " basava madhu", age: 89 },
    { name: " basava madhu", age: 89 },
  ];
  const { width, height } = Dimensions.get("screen");

  return (
    <>
      <View
        style={{
          borderColor: "black",
          borderWidth: 1,

          gap: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <FlatList
          data={name}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          onScroll={(event) => {
           const value= Math.round(event.nativeEvent.contentOffset.x / width);
          }}
          renderItem={({ item }) => (
            <View
              style={{
                width: width,
                height: 200,
                borderWidth: 1,
                borderColor: "black",
                borderRadius: 10,
                padding: 10,
                gap: 10,
                backgroundColor: "green",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20 }}>{item.name}</Text>
              <Text style={{ fontSize: 20 }}>{item.age}</Text>
            </View>
          )}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {name.map((item, index) => (
            <>
              <Text style={{ fontSize: 50, fontWeight: "100"  }} key={index}>
                .
              </Text>
            </>
          ))}
        </View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: 200,
        }}
      ></View>
    </>
  );
};

export default Carousel;
