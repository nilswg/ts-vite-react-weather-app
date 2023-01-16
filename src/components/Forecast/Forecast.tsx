import './forecast.css';

type Props = {
  weathers: {
    date: string;
    weatherName: string;
    weatherIcon: string;
    tempCels:number;
    humidity: number;
    minTempCels: number;
    maxTempCels: number;
  }[];
};

const Forecast = ({ weathers }: Props) => {
  return (
    <div className="forecast-context">
    {weathers?.map((w, i) => (
      <div className="forecast-item" key={`forecast_${w.date}_${i}`}>
        <h3>{w.date}</h3>
        <img src={w.weatherIcon} alt={`the image of ${w.weatherName}`} />
        <h3>{w.weatherName}</h3>
        <div className="forecast-last-item">
          <p>{`T:${Math.trunc(w.maxTempCels)}°/${Math.trunc(
            w.minTempCels
          )}°`}</p>
          <p>{`H: ${w.humidity}%`}</p>
        </div>
      </div>
    ))}
  </div>
  )
};

export default Forecast;
