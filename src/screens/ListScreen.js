import React from 'react';
import {View, Text, StyleSheet,FlatList} from 'react-native';

const ListScreen = ()=> {
    const friends = [
        {name: 'Friend #1', age:20 },
        {name: 'Friend #2', age:23 },
        {name: 'Friend #3', age:24 },
        {name: 'Friend #4', age:25 },
        {name: 'Friend #5', age:26 },
        {name: 'Friend #7', age:27 }
    ];
    return (
    <FlatList
    //horizontal={true}
   // showsHorizontalScrollIndicator={false}
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({item}) => {
          return <Text style={styles.textStyle}>{item.name} -Age {item.age}</Text>
      }}
      />
      );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 10
    }
});

export default ListScreen;