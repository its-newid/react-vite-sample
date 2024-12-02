import styled from 'styled-components';
import { useAtom } from 'jotai';
import reactLogo from '@/assets/react.svg';
import viteLogo from '@/assets/vite.svg';
import { countAtom } from '@/store/app';

const HomePage = () => {
    const [count, setCount] = useAtom(countAtom);

    return (
        <Container>
            <div>
                <a href='https://vite.dev' target='_blank'>
                    <Logo src={viteLogo} className='logo' alt='Vite logo' />
                </a>
                <a href='https://react.dev' target='_blank'>
                    <SpinLogo src={reactLogo} alt='React logo' />
                </a>
            </div>
            <h1>Vite + React + Jotai + Styled-Components</h1>
            <button onClick={() => setCount((count) => count + 1)}>+ 1</button>
            <div>count is {count}</div>
            <p className='read-the-docs'>
                Click on the Vite and React logos to learn more
            </p>
        </Container>
    );
};

export default HomePage;

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.img`
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
    &:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
`;

const SpinLogo = styled(Logo)`
    animation: logo-spin infinite 20s linear;
    &:hover {
        filter: drop-shadow(0 0 2em #61dafbaa);
    }
`;
