export * from './weatherResponse';

export type LocationData = {
  id: string;
  cityName: string;
};

export type WeatherData = {
  startTime: string;
  endTime: string;
  data: {
    [x: string]: ElementValue;
    // PoP12h?: ElementValue;
    // T?: ElementValue;
    // RH?: ElementValue;
    // MinCI?: ElementValue;
    // WS?: ElementValue;
    // MaxAT?: ElementValue;
    // Wx?: ElementValue;
    // MaxCI?: ElementValue;
    // MinT?: ElementValue;
    // UVI?: ElementValue;
    // WeatherDescription?: ElementValue;
    // MinAT?: ElementValue;
    // MaxT?: ElementValue;
    // WD?: ElementValue;
    // Td?: ElementValue;
  };
};

export type ElementValue = {
  value: string;
  measures: string;
};

/**
 *
 * Wx: string; // 天氣圖示代號
 *
 * C: string; // 天氣圖示描述(中文)
 *
 * E: string; // 天氣圖示描述(英文)
 *
 */
export type WeatherIconProps = {
  Wx: string;
  C: string;
  E: string;
};

/**
 *  ID : 城市代號
 *
 *  Area : 城市地區
 *
 *  TID : 完整的城市地區編號，共 7 碼
 *
 *  Name: 城市名稱 : {C:中文名稱、E:英文名稱}
 */
export type CountryProps = {
  ID: string;
  Area: 'N' | 'C' | 'S' | 'E' | 'I';
  TID: string;
  Name: { C: string; E: string };
};
