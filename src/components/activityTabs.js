import React, { memo } from "react";
import {
    Content,
    Text,
    Tab,
    Tabs,
} from "native-base";
import ActivityList from "./activityList";

const data1 = [{title: 'Lavar loza', value: 5, id: 1}, {title: 'Lavar ropa', value: 6, id: 2}, {title: 'Pasear perro', value: 6, id: 3}];
const data2 = [{title: 'Tarde Libre', value: 10, id: 1}, {title: 'Dia libre', value: 15, id: 2}];

const BUTTONS_TAB1 = [
    { text: "ADD" },
    { text: "Cancel" },
];

const BUTTONS_TAB2 = [
    { text: "USE" },
    { text: "Cancel" },
];

const CANCEL_INDEX = 1;

const ActivityTabs = () => {
    const render = () => {
        return (
            <Content padder>
                <Tabs locked>
                    <Tab heading="Dar">
                        <ActivityList data={data1} config={{BUTTONS: BUTTONS_TAB1, CANCEL_INDEX}} />
                    </Tab>
                    <Tab heading="Usar">
                        <ActivityList data={data2} config={{BUTTONS: BUTTONS_TAB2, CANCEL_INDEX}} />
                    </Tab>
                </Tabs>
            </Content>
        );
    }
    return render();
}

export default memo(ActivityTabs);