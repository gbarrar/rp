import React, { memo } from "react";
import {
    Card,
    Content,
    Text,
    CardItem,
    Body,
    Right,
    Left,
    Thumbnail,
} from "native-base";

const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

const Points = () => {
    const render = () => {
        return (
            <Content padder>
                <Card>
                    <CardItem bordered>
                        <Left>
                            <Thumbnail small source={{ uri: uri }} />
                            <Body>
                                <Text>Mario Muñoz</Text>
                                <Text>Puntos: 10</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Text>Diego Jaume</Text>
                            <Text>Puntos: 10</Text>
                        </Body>
                        <Right>
                            <Thumbnail small source={{ uri: uri }} />
                        </Right>
                    </CardItem>
                </Card>
            </Content>
        );
    }
    return render();
}

export default memo(Points);