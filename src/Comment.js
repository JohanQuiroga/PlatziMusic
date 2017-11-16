import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const DEFAULT_AVATAR = 'https://www.timeshighereducation.com/sites/default/files/byline_photos/default-avatar.png'
const AVATAR_SIZE = 32

export default class Comment extends Component<{}> {
  render() {
    return (
      <View style={styles.comment}>
        {
          this.props.avatar ?
            <Image style={styles.avatar} source={{uri: this.props.avatar}}/> :
            <Image style={styles.avatar} source={{uri: DEFAULT_AVATAR}}/>
        }
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  comment: {
    backgroundColor: '#ecf0f1',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE/2
  }
})
