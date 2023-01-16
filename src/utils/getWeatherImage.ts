import WeatherIcons from '@/data/weathers';
import type { WeatherIconProps } from '@/types';

const weatherIconsMap: Map<string, WeatherIconProps> = WeatherIcons.reduce(
  (prev, weatherIcon) => {
    prev.set(weatherIcon.C, weatherIcon);
    return prev;
  },
  new Map()
);

const getWeatherImage = (
  weatherIconChineseName: string,
  type: 'day' | 'night' = 'day'
): any => {
  const weatherIcon = weatherIconsMap.get(weatherIconChineseName);
  if (!weatherIcon) {
    throw Error("weather svg doesn't exit.");
  }
  const wx = weatherIcon.Wx;
  const res = `/ts-vite-react-weather-app/img/weathers/${wx}_${type}.svg`;
  return new URL(res, import.meta.url).href;
};

export default getWeatherImage;
