import { useState } from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';

const courseTypes = ["Leaderboards", "Shop", "Achievements"]

const Welcome = () => {
  const router = useRouter();
  const [activeCourseType, setActiveCourseType] = useState('Full-time')
  
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Harry,</Text>
        <Text style={styles.welcomeMessage}>Find the right course for you!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={courseTypes}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.tab(activeCourseType, item)}
              onPress={() => {
                setActiveCourseType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeCourseType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small}}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome