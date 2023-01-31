import styled from 'styled-components/macro';
import BarChart from './BarChart';
import PieChart from './PieChart';

type Props = {
  date: string;
  weatherName: string;
  weatherIcon: string;
  tempCels: number;
  humidity: number;
  minTempCels: number;
  maxTempCels: number;
  rainPosibility: string;
};

const Weather = ({
  date,
  weatherName,
  weatherIcon,
  tempCels,
  humidity,
  minTempCels,
  maxTempCels,
  rainPosibility,
}: Props) => {
  return (
    <WeatherCard>
      <CardLeft>
        <WeatherNow>{weatherName}</WeatherNow>
        <CardLeftContent>
          <Preview>
            <img src={weatherIcon} alt={`the image of ${weatherName}`} />
          </Preview>
          <Temprature>
            <h1>{`${tempCels}°`}</h1>
          </Temprature>
        </CardLeftContent>
      </CardLeft>
      <CardRight>
        <CardRightSection>
          <h1>{`Rain Possibility`}</h1>
          <RainPossibility>
            <h1>
              <span>{rainPosibility}</span>
            </h1>
          </RainPossibility>
        </CardRightSection>
        <CardRightSection>
          <h1>{`Humidity`}</h1>
          <PieChart value={humidity} />
        </CardRightSection>
        <CardRightSection>
          <h1>{`Min / Max Temp`}</h1>
          <BarChart
            min={{
              distance: Math.trunc(minTempCels),
              colors: ['#add9c0', '#4a6fa1'],
            }}
            max={{
              distance: Math.trunc(maxTempCels),
              colors: ['#ff47ab', '#e0064e'],
            }}
          />
        </CardRightSection>
      </CardRight>
    </WeatherCard>
  );
};

export default Weather;

const WeatherCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem 0;
  gap: 5rem;
`;

const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const WeatherNow = styled.h1`
  color: #396bae;
  font-size: 1.75rem;
  margin-top: 1rem;
  letter-spacing: 0.25rem;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-top: 5rem;
  }
`;

const CardLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 2.5rem;
  }
`;

const Preview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 10rem;

  & > img {
    height: 90%;
  }

  @media (min-width: 768px) {
    height: 12rem;
  }

  @media (min-width: 1280px) {
    height: 18rem;
  }
`;

const Temprature = styled.div`
  color: rgb(123, 152, 178);
  font-size: 2.25rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    font-size: 4rem;
    height: 12rem;
  }

  @media (min-width: 1280px) {
    font-size: 5rem;
    height: 18rem;
  }
`;

const CardRight = styled.div`
  margin-bottom: 3rem;
  background-color: none;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;

  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 10rem;
    margin-bottom: 5rem;
  }
`;

const CardRightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > h1 {
    color: rgb(123, 152, 178);
    font-size: 1rem;
  }

  /* Possibility、PieChart、BarChart */
  & > div {
    min-height: 5rem;
  }

  @media (min-width: 1280px) {
    margin-bottom: 5rem;

    & > h1 {
      font-size: 1.25rem;
    }

    & > div {
      min-height: 15rem;
    }
  }
`;

const RainPossibility = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 0;

  & > h1 {
    color: #396bae;
    font-size: 5rem;
  }

  & > h1::after {
    content: '%';
    color: #396bae;
    font-size: 1.5rem;
  }
`;
