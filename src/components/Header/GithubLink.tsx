// import GithubIcon from '../../assets/github.svg';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';

const GithubLink = () => {
  return (
    <GithubLinkContainer href="/ts-vite-react-weather-app">
      {/* <img src={GithubIcon} alt="github logo" /> */}
      <AiFillGithub />
    </GithubLinkContainer>
  );
};

export default GithubLink;

const GithubLinkContainer = styled.a`
  margin-left: 1rem;
  font-size: 2rem;
  svg {
    color: ${({ theme }) => theme.githubIcon.color};
  }
  &:hover svg {
    color: ${({ theme }) => theme.githubIcon.hoverColor};
  }
`;