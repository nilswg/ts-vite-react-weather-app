import styled from 'styled-components/macro';

type Props = {
  weathers: {
    date: string;
    weatherName: string;
    weatherIcon: string;
    tempCels: number;
    humidity: number;
    minTempCels: number;
    maxTempCels: number;
  }[];
};

const Forecast = ({ weathers }: Props) => {
  return (
    <ForecastContainer>
      {weathers?.map((w, i) => (
        <ForecastItem key={`forecast_${w.date}_${i}`}>
          <h1>{w.date}</h1>
          <img src={w.weatherIcon} alt={`the image of ${w.weatherName}`} />
          <h2>{w.weatherName}</h2>
        </ForecastItem>
      ))}
    </ForecastContainer>
  );
};

export default Forecast;

const ForecastContainer = styled.div`
  overflow-x: auto;

  display: grid;
  grid-template-columns: repeat(1, max-width);
  row-gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 1536px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

const ForecastItem = styled.div`
  flex-grow: 1;
  background-color: none;
  margin: 0 0.2rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  & > h1 {
    font-size: 1rem;
    letter-spacing: .25rem;
    font-weight: 600;
    color: #4581c5;
  }

  & > img {
    height: 6rem;
    padding: 1rem;
    max-width: 100px;
    background-color: none;
  }

  & > h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #4a6fa1;
    letter-spacing: .25rem;
  }

  & > div {
    margin-top: 0.5em;
    font-size: 1em;
    color: #4a6fa1;
    font-weight: 600;
    letter-spacing: .25rem;
  }
`;
