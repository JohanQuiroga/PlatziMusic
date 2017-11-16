/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';

import ArtistBox from './ArtistBox';

import { Actions } from 'react-native-router-flux';

export default class ArtistList extends Component<{}> {

  _keyExtractor = (item) => item.id;

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds
    }

  }

  componentDidMount() {
    this.updateDataSource(this.props.artists)
  }

  componentWillReceiveProps(newProps) {
    if (newProps.artists !== this.props.artists) {
      this.updateDataSource(newProps.artists)
    }
  }

  updateDataSource = (data) => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
      // dataSource: data
    })
  }

  handlePress(artist) {
    Actions.artistDetail({ artist })
  }

  render() {
    return (
      // <View>
      //   <FlatList
      //     data={this.props.artists}
      //     keyExtractor={this._keyExtractor}
      //     renderItem={
      //       ({artist}) => {
      //         return (
      //           <TouchableOpacity onPress={() => this.handlePress(artist)}>
      //               <ArtistBox artist={artist} />
      //           </TouchableOpacity>
      //         )
      //       }
      //     }
      //   />
      // </View>
      <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={
          (artist) => {
            return (
              <TouchableOpacity
              onPress={() => this.handlePress(artist)}>
                <ArtistBox artist={artist} />
              </TouchableOpacity>
            )
          }
        }
      />
    );
  }
}
