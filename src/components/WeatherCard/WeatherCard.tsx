import BarChart from './BarChart';
import PieChart from './PieChart';
import './weatherCard.css';

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
    <div className="weather-card">
      <div className="weather-card-left">
        <h2>{weatherName} <span>{`/ 降雨機率: ${rainPosibility}%`}</span></h2>
        <div className="weather-card-left-icon">
          <img src={weatherIcon} alt={`the image of ${weatherName}`} />
          <h1>{`${tempCels}°`}</h1>
        </div>
      </div>
      <div className="weather-card-right">
        <p>{`Humidity`}</p>
        <PieChart value={humidity} />
        <p>{`Min / Max Temp`}</p>
        <div className="weather-card-right-barchart">
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
        </div>
      </div>
    </div>
  );
};

export default Weather;
