import { Outlet } from 'react-router';
import styled from 'styled-components';
import SideNav from '@/components/SideNav';
import { theme } from '@/styles/theme';

const Layout = () => {
    return (
        <>
            <SampleCmsNav>CMS Nav Area</SampleCmsNav>
            <Container>
                <SideNav />
                <InnerContainer>
                    <Outlet />
                </InnerContainer>
            </Container>
        </>
    );
};

export default Layout;

const Container = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: calc(100vh - 61.5px);
    display: flex;
`;

const SampleCmsNav = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 61.5px;
    background-color: ${theme.colors.main2};
`;

const InnerContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100dvh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;
