import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import {View, TextInput, StyleSheet} from 'react-native';

class SearchBar extends React.Component {
  static propTypes = {
    searchProfiles: PropTypes.func.isRequired,
  };
  state = {
    searchTerm: '',
  };
  debouncedSearchProfiles = debounce(this.props.searchProfiles, 300);
  handleChange = searchTerm => {
    this.setState({searchTerm}, () => {
      this.debouncedSearchProfiles(this.state.searchTerm);
    });
  };
  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder={'Search'}
          onChangeText={this.handleChange}
          autoCorrect={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginHorizontal: 12,
  },
});

export default SearchBar;
