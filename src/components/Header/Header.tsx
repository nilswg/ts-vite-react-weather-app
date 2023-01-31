import SwitchBtn from './SwtchBtn';
import GithubLink from './GithubLink';
import { useDispatch, setDarkMode } from '@/store';
import styled from 'styled-components/macro';

export const Header = () => {
  const dispatch = useDispatch();

  const darkModeSwitchClick = () => {
    dispatch(setDarkMode());
  };

  return (
    <HeaderContainer>
      <HeaderTitle>
        <span>React</span>
        <span>Weather</span>
      </HeaderTitle>
      <HeaderButtons>
        <GithubLink />
        <SwitchBtn
          id="darkmode-btn"
          checked={false}
          onClick={darkModeSwitchClick}
          theme={{
            beforeColor: '#34deeb',
            afterColor: '#235A84',
            width: '3rem',
          }}
        />
      </HeaderButtons>
    </HeaderContainer>
  );
};

export default Header;

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  margin: 0;
  padding: 0;
`;
export const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.appTitleColor};
  font-size: 1.8rem;
  line-height: 2.25rem;

  & > span {
    display: inline-block;
  }

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 1rem;

  @media (min-width: 360px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }

  @media (min-width: 640px) {
    flex-direction: row;
    gap: 1rem;
    font-size: 3.5rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
    font-size: 4rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 2rem;
    font-size: 5rem;
  }
`;

const HeaderButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  /* padding-right: 1rem; */
`
