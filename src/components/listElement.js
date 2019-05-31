import React, { memo } from "react";
import {
    ListItem,
    Left,
    Right,
    Text,
    Icon,
} from "native-base";

const ListElement = ({ item, onPress }) => {
    const render = () => {
        return (
            <ListItem
                onPress={onPress()}
            >
                <Left>
                    <Text>
                        {item.title}
                    </Text>  
                </Left>
                <Right>
                    <Icon name="ios-add" />
                </Right>
            </ListItem>
        );
    }
    return render();
}

export default memo(ListElement);