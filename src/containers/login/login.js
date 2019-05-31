import { memo } from "react";
import { Container, Content, Text } from "native-base";

const Login = navigation => {
    const render = () => {
        return (
            <Container>
                <Content>
                    <Text>Login</Text>
                </Content>
            </Container>
        );
    }
    return render();
}

export default memo(Login);