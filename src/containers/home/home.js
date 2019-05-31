import React from "react";
import { Container, Content, Text } from "native-base";
import CoupleInfo from "../../components/coupleInfo";
import ActivityTabs from "../../components/activityTabs";

export default class Home extends React.PureComponent {
    componentDidMount = () => {
        console.log('service call');
    }

    render = () => {
        return (
            <Container>
                <Content>
                    <CoupleInfo />
                    <ActivityTabs />
                </Content>
            </Container>
        );
    }
}
