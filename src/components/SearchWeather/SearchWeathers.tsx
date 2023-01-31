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
        <WeatherTitle>{`Weather Today ${selected.date} - ${cityName}`}</WeatherTitle>
        <WeatherCard {...selected} rainPosibility={rainPosibility}/>
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
  width: 100%;
  height: 100%;
  background-color: var(--weatherbgColor);
  margin-top: 20px;
  padding: 1rem;
  border-radius: 1rem;
`;

const WeatherTitle = styled.h1`
  margin: 0 0 1rem 1rem;
  font-weight: 500;
  font-size: 1.125rem;
  color: var(--weatherTitleColor);
`;

const ForecastContainer = styled.div`
  --forecastbgColor: ${({ theme }) => theme.forecast.bgColor};
  --forecastTitleColor: ${({ theme }) => theme.forecast.title};

  width: 100%;
  background-color: var(--forecastbgColor);
  border-radius: 1rem;
  padding: 1rem;
  margin-top: 1rem;
`;

const ForeCastDays = styled.h1`
  margin: 0 0 1rem 1rem;
  font-weight: 300;
  font-size: 1.125rem;
  color: var(--forecastTitleColor);
`;

export default SearchWeathers;
