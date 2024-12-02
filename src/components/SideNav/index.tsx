import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { Link } from 'react-router';
import { PAGE_COMPONENTS, RoutePath } from '@/routes/path';

const SideNav = () => {
    return (
        <Container>
            {Object.entries(PAGE_COMPONENTS).map(([key, _]) => (
                <Link to={RoutePath[key as keyof typeof RoutePath]}>{key}</Link>
            ))}
        </Container>
    );
};

export default SideNav;

const Container = styled.div`
    min-width: 200px;
    max-width: 200px;
    height: 100vh;
    background-color: ${theme.colors.main};
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 20px;
`;
