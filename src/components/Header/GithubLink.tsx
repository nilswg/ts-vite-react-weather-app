// import GithubIcon from '../../assets/github.svg';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';

const GithubLink = () => {
  return (
    <GithubLinkContainer href="https://github.com/nilswg/ts-vite-react-weather-app">
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

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;