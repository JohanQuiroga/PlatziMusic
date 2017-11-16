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
} from 'react-native';

import Comment from './Comment';

export default class CommentList extends Component<{}> {

  // _keyExtractor = (item) => item.idPublicacion;

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds
    }

  }

  componentDidMount() {
    this.updateDataSource(this.props.comments)
  }

  componentWillReceiveProps(newProps) {
    if (newProps.comments !== this.props.comments) {
      this.updateDataSource(newProps.comments)
    }
  }

  updateDataSource = data => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    })
  }

  render() {
    return (
    // <View>
    //   <FlatList
    //     data={this.state.dataSource}
    //     keyExtractor={this._keyExtractor}
    //     renderItem={({item}) => <ArtistBox artist={item} />}
    //   />
    // </View>
      <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={
          (comment) => {
            return (
              <Comment text={comment.text} avatar={comment.userPhoto} />
            )
          }
        }
      />
    );
  }
}
