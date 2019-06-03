import React, { memo } from 'react';
import {
    Button,
    Content,
    Form,
    Input,
    Item,
    Label,
    Text,
} from 'native-base';

const Add = () => {
    const render = () => {
        return (
            <Content padder>
                <Form>
                    <Item floatingLabel>
                        <Label>Nombre tarea</Label>
                        <Input 
                            maxLength={10}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>Valor en puntos</Label>
                        <Input
                            maxLength={3}
                        />
                    </Item>
                </Form>
                <Button success>
                    <Text>Agregar</Text>
                </Button>
                <Button danger>
                    <Text>Cancelar</Text>
                </Button>
            </Content>
        );
    }

    return render();
}

export default memo(Add);