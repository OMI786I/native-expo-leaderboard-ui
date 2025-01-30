import { View, Text, StyleSheet, Image, FlatList } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerTitle}>Leader Board</Text>
        <View style={styles.mainCardContainer}>
          {[1, 2, 3].map((item, index) => (
            <View key={index} style={styles.mainCard}>
              <Image
                style={styles.mainCardImage}
                source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
                resizeMode="cover"
              />
              <Text style={styles.mainCardTitle}>Omi</Text>
              <View style={styles.mainCardRankContainer}>
                <Text style={styles.mainCardRankContainerTitle}></Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <View style={styles.cardDataContainer}>
              <Text style={styles.cardIndexing}>{index + 1}</Text>
              <Image
                style={styles.cardImage}
                source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
                resizeMode="cover"
              />
              <Text style={styles.cardTitle}>omi</Text>
            </View>
            <View style={styles.cardRankContainer}>
              <Text style={styles.cardRankTitle}>55555</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272C35",
    paddingTop: 40,
  },
  topContainer: {
    backgroundColor: "#1A1F25",
    paddingTop: 30,
    padding: 20,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    gap: 20,
  },
  headerTitle: {
    textAlign: "center",
    color: "white",
    fontSize: 21,
    fontWeight: "bold",
  },
  mainCard: {
    backgroundColor: "#272C35",
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  mainCardContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  mainCardImage: {
    width: 50, // Set appropriate width
    height: 50, // Set appropriate height
    borderRadius: 5,
  },
  mainCardTitle: {
    color: "white",
    fontSize: 17,
    fontWeight: 600,
  },
  mainCardRankContainer: {
    backgroundColor: "orange",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    position: "absolute",
    bottom: -15,
  },
  mainCardRankContainerTitle: {
    color: "white",
  },
  card: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardIndexing: {
    color: "white",
  },
  cardImage: { width: 40, height: 40, borderRadius: 50, marginLeft: 10 },
  cardText: {},
  cardTitle: {
    color: "white",
    fontSize: 17,
  },
  cardDataContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  cardRankContainer: {},
  cardRankTitle: {
    color: "orange",
  },
});
