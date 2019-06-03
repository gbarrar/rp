import React from "react";
import {
    Container,
    Content,
    Button,
    Text,
} from "native-base";
import CoupleInfo from "../../components/coupleInfo";
import ActivityTabs from "../../components/activityTabs";

export default class Home extends React.PureComponent {
    componentDidMount = () => {
        console.log('service call');
    }

    render = () => {
        const { navigation } = this.props;
        return (
            <Container>
                <Content>
                    <CoupleInfo />
                    <ActivityTabs />
                    <Button
                        onPress={() => navigation.navigate('Add')}>
                        <Text>Crear tarea</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
