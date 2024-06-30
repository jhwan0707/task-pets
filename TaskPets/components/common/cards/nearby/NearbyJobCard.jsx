import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'

import { checkImageURL } from '../../../../utils';

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{ uri: checkImageURL(job.employer_logo)
          ? job.employer_logo
          : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonscout.com%2Fillustrations%2Fonline-course&psig=AOvVaw1J_H84a1qoHOGH7RWwb2mX&ust=1717441110857000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJix4PHMvYYDFQAAAAAdAAAAABAE'
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>

  )
}

export default NearbyJobCard