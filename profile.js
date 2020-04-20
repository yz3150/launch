import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import ProfileList from './profileList';
import SearchBar from './searchBar';
import ProfileDetails from './profileDetails';

const DATA = [
  {
    id: '01',
    name: 'Tim Lavansiki',
    school: 'Teachers College Columbia University',
    interests: ['Early Child Education', 'EdTech', 'Blockchain'],
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dolor rutrum quis sed vestibulum arcu justo, curabitur purus. Feugiat ut mattis morbi tortor, velit aliquam.',
    skills: ['Javascript', 'ux design', 'Resesarch'],
    workingStyles: ['Detail-Oriented', 'Planned'],
    pastProjects: [
      'Mobile Learning',
      'AR Game in Medical School',
      'Early Childhood English',
    ],
    Recommendation: [],
  },
  {
    id: '02',
    name: 'Lancer John',
    school: 'New York University',
    interests: ['Human Cognition', 'FinTech', 'EdTech'],
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dolor rutrum quis sed vestibulum arcu justo, curabitur purus. Feugiat ut mattis morbi tortor, velit aliquam.',
    skills: ['Javascript', 'ux design', 'Resesarch'],
    workingStyles: ['Detail-Oriented', 'Planned'],
    pastProjects: [
      'Mobile Learning',
      'AR Game in Medical School',
      'Early Childhood English',
    ],
    Recommendation: [],
  },
  {
    id: '03',
    name: 'Anne Choi',
    school: 'Parsons School of Design',
    interests: ['Software Development', 'E-commerce'],
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dolor rutrum quis sed vestibulum arcu justo, curabitur purus. Feugiat ut mattis morbi tortor, velit aliquam.',
    skills: ['Javascript', 'ux design', 'Resesarch'],
    workingStyles: ['Detail-Oriented', 'Planned'],
    pastProjects: [
      'Mobile Learning',
      'AR Game in Medical School',
      'Early Childhood English',
    ],
    Recommendation: [],
  },
];
export default class Profile extends React.Component {
  state = {
    profiles: [],
    currentProfileId: null,
    profilesFromSearch: [],
  };
  async componentDidMount() {
    const profiles = DATA;
    this.setState({profiles});
  }
  searchProfiles = searchTerm => {
    let profilesFromSearch = [];
    if (searchTerm) {
      profilesFromSearch = this.state.profiles.filter(profile => {
        const profileData = `${profile.name.toUpperCase()}`;
        const searchData = searchTerm.toUpperCase();
        return profileData.indexOf(searchData) > -1;
      });
      this.setState({profilesFromSearch});
      console.log(profilesFromSearch);
    } else {
      this.setState({profilesFromSearch: []});
    }
  };
  setCurrentProfile = profileId => {
    this.setState({currentProfileId: profileId});
  };
  unsetCurrentProfile = () => {
    this.setState({currentProfileId: null});
    this.setState({profilesFromSearch: []});
  };
  currentProfile = () => {
    return this.state.profiles.find(
      profile => profile.id === this.state.currentProfileId,
    );
  };
  render() {
    if (this.state.currentProfileId) {
      return (
        <ProfileDetails
          initialRealData={this.currentProfile()}
          onBack={this.unsetCurrentProfile}
        />
      );
    }
    const profilesToDisplay =
      this.state.profilesFromSearch.length > 0
        ? this.state.profilesFromSearch
        : this.state.profiles;
    console.log(profilesToDisplay);
    if (profilesToDisplay.length > 0) {
      return (
        <View style={styles.main}>
          <Text style={styles.title}>Discovery</Text>
          <SearchBar searchProfiles={this.searchProfiles} />
          <ProfileList
            profiles={profilesToDisplay}
            onItemPress={this.setCurrentProfile}
          />
        </View>
      );
    }
    return (
      <View style={styles.main}>
        <Text>Hi</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    marginTop: 50,
  },
  title: {
    fontSize: 34,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});