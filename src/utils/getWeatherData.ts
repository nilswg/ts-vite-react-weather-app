import type { ElementValue, WeatherData, WeatherResponse } from '@/types';

/**
 * 處理後的 WeatherData 範例 :
 *
 * const weatherData = {
 *    startTime: '2023-01-16 00:00:00',
 *    endTime: '2023-01-16 06:00:00',
 *    data: {
 *       PoP12h: { value: '10', measures: '百分比' } ,         // 降雨機率
 *       T: { value: '14', measures: '攝氏度' } ,              // 溫度
 *       RH: { value: '93', measures: '百分比' } ,             // 相對濕度
 *       MinCI: { value: '14', measures: 'NA' } ,             // 最低舒適度
 *       WS: { value: '10', measures: '公尺/秒' } ,            // 風速
 *       MaxAT: { value: '9', measures: '攝氏度' } ,           // 最高體感溫度
 *       Wx: { value: '陰天', measures: '自定義 Wx 文字' } ,    // 天氣現象
 *       MaxCI: { value: '14', measures: 'NA ' } ,            // 最高舒適度
 *       MinT: { value: '14', measures: '攝氏度' } ,           // 最低溫度
 *       UVI: { value: '2', measures: '紫外線指數' } ,          // 紫外線指數
 *       WeatherDescription: {                                // 天氣狀況描述
 *          value: '陰天。降雨機率 10%。溫度攝氏14至14度。寒冷。東北風 風速5級(每秒10公尺)。相對濕度93%。',
 *          measures: 'NA'
 *       } ,
 *       MinAT: { value: '8', measures: '攝氏度' } ,           // 最低體感溫度
 *       MaxT: { value: '14', measures: '攝氏度' } ,           // 最高溫度
 *       WD: { value: '東北風', measures: '8方位' } ,           // 風向
 *       Td: { value: '13', measures: '攝氏度' } ,             // 露點溫度
 *    }
 * }
 *
 * @param data 中央氣象局資料
 * @param idx 代表不同時段的資料
 * @returns 處理後的 weatherData 資料
 */
export const fetcher = async (url: string): Promise<WeatherData[]> => {
  const mp = new Map<string, WeatherData>();
  const data: WeatherResponse = await (await fetch(url)).json();
  const weatherElements = data.records.locations[0].location[0].weatherElement;

  for (let ei = 0; ei < 15; ei++) {
    for (let t = 0; t < 15; t++) {
      const we = weatherElements?.[ei];
      const tm = we.time?.[t];
      /**
       * 可能某些資料筆數非15筆，如 UVI只有早上時段
       */
      if (!we || !tm) continue;
      const ele: WeatherData = mp.get(tm.startTime) ?? {
        startTime: tm.startTime,
        endTime: tm.endTime,
        data: {},
      };
      ele.data[we.elementName] = { ...tm.elementValue[0] };
      mp.set(tm.startTime, ele);
    }
  }

  return Array.from(mp.values());
};
/**
 *
 * @param weatherData 經過 fetcher 處理過後的 weatherData 資料
 * @param keyName 查找的鍵值
 */
export const getValue = (
  weatherData: { data: { [key: string]: ElementValue } },
  keyName: string
): string => weatherData?.data?.[keyName]?.value;
