import React, { memo } from "react";
import {
    ListItem,
    Left,
    Right,
    Text,
    Icon,
    ActionSheet,
} from "native-base";

const ListElement = ({ item, onPress, config }) => {

    const actionEvaluator = index => {
        if (index === 0) {
            onPress();
        }
    }

    const actionPop = () => () => {
        ActionSheet.show({
            options: config.BUTTONS,
            cancelButtonIndex: config.CANCEL_INDEX,
            title: "Selecciona una opción",
        },
        buttonIndex => {
            actionEvaluator(buttonIndex);
        });
    }

    const render = () => {
        return (
            <ListItem
                onPress={actionPop()}
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