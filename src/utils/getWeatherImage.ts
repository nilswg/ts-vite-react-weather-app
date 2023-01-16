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
  return `/img/weathers/${wx}_${type}.svg`;
};

export default getWeatherImage;
