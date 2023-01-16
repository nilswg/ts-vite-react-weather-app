import Header from '@/components/Header/Header';
import RocketLoading from '@/components/RocketLoading/RocketLoading';
import Search from '@/components/Search/Search';
import { useSelector } from 'react-redux';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import SearchWeathers from './components/SearchWeather/SearchWeathers';
import { selectCityName, selectDarkMode, selectLoading } from './store';
import { darkTheme, lightTheme } from './theme';
import './App.css';

function App() {
  const darkMode = useSelector(selectDarkMode);
  const loading = useSelector(selectLoading);
  const cityName = useSelector(selectCityName);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      {loading && <RocketLoading />}
      <Header />
      <Search />
      {cityName && <SearchWeathers cityName={cityName} />}
    </ThemeProvider>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`
  body{
    background: ${({ theme }) =>
      `url(${theme.backgroundImage}) no-repeat center 120%, 
       linear-gradient(${theme.backgroundGradient[0]} 0%, ${theme.backgroundGradient[1]} 100%)`};
  }
`;
