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
                source={{ uri: "" }}
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
                source={{ uri: "" }}
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
    justifyContent: "center",
    alignItems: "center",
  },
  topContainer: {},
  headerTitle: {},
  mainCard: {},
  mainCardContainer: {},
  mainCardImage: {},
  mainCardTitle: {},
  mainCardRankContainer: {},
  mainCardRankContainerTitle: {},
  card: {},
  cardIndexing: {},
  cardImage: {},
  cardText: {},
  cardTitle: {},
  cardDataContainer: {},
  cardRankContainer: {},
  cardRankTitle: {},
});
