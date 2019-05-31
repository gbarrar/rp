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

const ActivityTabs = () => {
    const render = () => {
        return (
            <Content padder>
                <Tabs>
                    <Tab heading="Dar">
                        <ActivityList data={data1} />
                    </Tab>
                    <Tab heading="Usar">
                        <ActivityList data={data2} />
                    </Tab>
                </Tabs>
            </Content>
        );
    }
    return render();
}

export default memo(ActivityTabs);