import React, { memo } from "react";
import { FlatList } from 'react-native';
import ListElement from './listElement';

const ActivityList = ({ data }) => {
    const keyExtractor = (item) => `${item.id}`;

    const onPress = () => () => {
        console.log('ufale');
    }

    const renderItem = ({ item }) => (
        <ListElement
            onPress={onPress}
            item={item}
        />
    );

    const render = () => {
        console.log(data);
        return (
            <FlatList
                data={data}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />
        );
    }
    return render();
}

export default memo(ActivityList);