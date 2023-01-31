import SwitchBtn from "./SwtchBtn";
import GithubLink from "./GithubLink";
import { useDispatch, setDarkMode } from "@/store";
import styled from "styled-components/macro";

export const Header = () => {
  const dispatch = useDispatch();

  const darkModeSwitchClick = () => {
    dispatch(setDarkMode());
  };

  return (
    <HeaderContainer>
      <HeaderTitle>React Weather</HeaderTitle>
      <HeaderIconsContainer>
        <SwitchBtn
          id="darkmode-btn"
          checked={false}
          onClick={darkModeSwitchClick}
          theme={{
            beforeColor: "#34deeb",
            afterColor: "#235A84",
            width: "3rem",
          }}
        />
        <GithubLink />
      </HeaderIconsContainer>
    </HeaderContainer>
  );
};

export default Header;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
`;
export const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.appTitleColor};
  font-size: 2.2rem;
`;
export const HeaderIconsContainer = styled.div`
  display: flex;
  align-items: center;
`;
