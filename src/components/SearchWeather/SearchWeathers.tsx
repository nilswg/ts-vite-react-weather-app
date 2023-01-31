import Forecast from '../Forecast/Forecast';
import WeatherCard from '../WeatherCard/WeatherCard';
import useSWR from 'swr';
import getWeatherImage from '@/utils/getWeatherImage';
import getDate from '@/utils/getDate';
import { fetcher, getValue } from '@/utils/getWeatherData';
import styled from 'styled-components/macro';
import RocketLoading from '../RocketLoading/RocketLoading';

type Props = {
  cityName: string;
};

const SearchWeathers = ({ cityName }: Props) => {
  const auth = import.meta.env.VITE_WEATHER_API_KEY;
  const url = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=${auth}&locationName=${cityName}`;
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) return <RocketLoading />;
  if (error) return <h1>Something went wrong!</h1>;
  if (!data) return <h1>No Data Fetch!</h1>;

  /**
   * 第 0 時段，可以看作該地區，當天此刻的天氣狀況。
   * 第 1 ~ 14 的時段，早上時段與晚上時段為一天。
   * 所以一週預測的內容，可以取 1、3、5、7、9、11、13 時段，共 7 筆，代表未來 7 天天氣預測。
   */
  const numOfTime = 15;

  const weathers: Array<{
    date: string;
    weatherName: string;
    weatherIcon: string;
    tempCels: number;
    humidity: number;
    minTempCels: number;
    maxTempCels: number;
  }> = [];
  for (let i = 0; i < numOfTime; i++) {
    if (i % 2 === 0) continue;
    const wd = data[i];
    const date = getDate(wd.startTime);
    const weatherName = getValue(wd, 'Wx');
    const weatherIcon = getWeatherImage(weatherName);
    const tempCels = parseFloat(getValue(wd, 'T'));
    const humidity = parseFloat(getValue(wd, 'RH'));
    const minTempCels = parseFloat(getValue(wd, 'MinT'));
    const maxTempCels = parseFloat(getValue(wd, 'MaxT'));

    weathers.push({
      date,
      weatherName,
      weatherIcon,
      tempCels,
      humidity,
      minTempCels,
      maxTempCels,
    });
  }

  const selected = weathers[0];
  const rainPosibility = getValue(data[0], 'PoP12h');
  // Only Debug

  // return (
  //   <div>
  //     <p>{JSON.stringify(data)}</p>
  //     {/* <p>{JSON.stringify(day)}</p> */}
  //   </div>
  // );

  return (
    <div>
      <WeatherContainer>
        <WeatherToday>{`Weather Today`}</WeatherToday>
        <div>
          <WeatherLocation>{`${cityName}`}</WeatherLocation>
          <WeatherDate>{`${selected.date}`}</WeatherDate>
        </div>
        <WeatherCard {...selected} rainPosibility={rainPosibility} />
      </WeatherContainer>
      <ForecastContainer>
        <ForeCastDays>{`Following 7 Days Forecast`}</ForeCastDays>
        <Forecast weathers={weathers} />
      </ForecastContainer>
    </div>
  );
};

const WeatherContainer = styled.div`
  --weatherbgColor: ${({ theme }) => theme.weather.bgColor};
  --weatherTitleColor: ${({ theme }) => theme.weather.title};
  --pieChartbgColor: ${({ theme }) => theme.weather.pie.bgColor};
  --barChartbgColor: ${({ theme }) => theme.weather.bars.bgColor};

  height: 100%;
  background-color: var(--weatherbgColor);
  margin-top: 20px;
  padding: 1rem;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
`;

const WeatherToday = styled.h1`
  width: 100%;
  display: inline-block;
  margin: 3rem 0 6rem;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: var(--weatherTitleColor);
  text-transform: uppercase;
  letter-spacing: 0.5rem;

  @media (min-width: 360px) {
    font-size: 2rem;
  }
  @media (min-width: 640px) {
    font-size: 2.5rem;
  }
  @media (min-width: 768px) {
    font-size: 2.75rem;
  }
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
  @media (min-width: 1536px) {
    font-size: 3.5rem;
  }
`;

const WeatherLocation = styled.h1`
  margin-top: 2rem;
  font-weight: 600;
  font-size: 1.75rem;
  letter-spacing: 0.35rem;
  color: var(--weatherTitleColor);
`;

const WeatherDate = styled.h1`
  margin-bottom: 2rem;
  font-weight: 600;
  font-size: 1.25rem;
  letter-spacing: 0.25rem;
  color: var(--weatherTitleColor);
`;

const ForecastContainer = styled.div`
  --forecastbgColor: ${({ theme }) => theme.forecast.bgColor};
  --forecastTitleColor: ${({ theme }) => theme.forecast.title};

  background-color: var(--forecastbgColor);
  border-radius: 1rem;
  padding: 1rem;
  margin-top: 1rem;
`;

const ForeCastDays = styled.h1`
  display: inline-block;
  margin: 3rem 0 6rem;
  font-weight: 600;
  max-width: 16rem;
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: var(--forecastTitleColor);
  text-transform: uppercase;
  letter-spacing: 0.25rem;

  @media (min-width: 360px) {
    max-width: 16rem;
    font-size: 2rem;
    line-height: 2.5rem;
  }
  @media (min-width: 640px) {
    max-width: 20rem;
    font-size: 2.5rem;
    line-height: 3rem;
  }
  @media (min-width: 768px) {
    max-width: 20rem;
    font-size: 2.75rem;
    line-height: 3.25rem;
  }
  @media (min-width: 1024px) {
    max-width: 36rem;
    font-size: 3rem;
    line-height: 4.25rem;
  }
  @media (min-width: 1536px) {
    max-width: 64rem;
    font-size: 3.5rem;
    line-height: 4.25rem;
  }
`;

export default SearchWeathers;
