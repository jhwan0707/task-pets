import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

import { checkImageURL } from '../../../../utils';

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{ uri: checkImageURL(item.employer_logo)
          ? item.employer_logo
          : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonscout.com%2Fillustrations%2Fonline-course&psig=AOvVaw1J_H84a1qoHOGH7RWwb2mX&ust=1717441110857000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJix4PHMvYYDFQAAAAAdAAAAABAE'
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1} >{item.employer_name}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>

  )
}

export default PopularJobCard