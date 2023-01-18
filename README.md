# ts-vite-react-weather-app

This is a weather app for learning purposes and built with React and Vite, written in Typescript.

<br>

## 🐱‍🏍 Skills
React, Vite, TypeScript, @reduxjs/toolkit, Styled-components, SWR.

<br>

## 🚀 <a href="https://nilswg.github.io/ts-react-weather-app/">Demo Website</a>
click link to see demo.

<br>

## ✨ Showcase 
![ts-vite-react-react-weather_1](https://user-images.githubusercontent.com/64550861/212832292-dca37e44-5fde-4711-a806-ad2bbd3589e1.gif)
![ts-vite-react-react-weather_2](https://user-images.githubusercontent.com/64550861/212832300-af2d60f7-b0f5-4afd-b6b6-39642027cdde.gif)

<br>

## 🛫 Quick start

```bash
npm install
```

<br>

First, get your api key from here. 🏛 https://opendata.cwb.gov.tw/user/authkey

The API is provided from Central Weather Service in Taiwan.

So, I think it should be free forever.

<br>

Then, create `.env` file in your project and add api key like below.
```bash
// @file .env
VITE_WEATHER_API_KEY=CWB-89A1C3A1-6A42-45A4-A870-F6A41EFF7BF3
```

<br>

```bash
npm run dev
```

<br>

## 🚀 Deployment

I use gh-pages to deploy my project.

```bash
npm run build
```

```bash
npm run deploy:github
```

<br>

## ⚠ CAUTION

If you wish to use a different project name, be aware of the configuration of the Baseurl.

The links or image that not imported through the `import` method, they need some modifications to become valid path.

(若你希望採用其它專案名稱，則須留意 Baseurl 的配置，因為當連結或是圖片路徑不是透過 import 方式引入，需要進行修正為完整的路徑)

```js
// Base url need fixed.
❌ href="/"
✅ href="/ts-vite-react-weather-app/" 

❌ const res = `/img/weathers/${wx}_${type}.svg`;
✅ const res = `/ts-vite-react-weather-app/img/weathers/${wx}_${type}.svg`; 
```

```ts
// @file: vite.config.ts
export default defineConfig({
  base: '/ts-vite-react-weather-app/', //👈
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src')
    },
  },
  plugins: [react()],
})
```

```ts
const GithubLink = () => {
  return (
    <GithubLinkContainer href="/ts-vite-react-weather-app/">  //👈 
      <AiFillGithub />
    </GithubLinkContainer>
  );
};

```

```ts
const getWeatherImage = (
  weatherIconChineseName: string,
  type: 'day' | 'night' = 'day'
): any => {
  const weatherIcon = weatherIconsMap.get(weatherIconChineseName);
  if (!weatherIcon) {
    throw Error("weather svg doesn't exit.");
  }
  const wx = weatherIcon.Wx;
  const res = `/ts-vite-react-weather-app/img/weathers/${wx}_${type}.svg`;  //👈 
  return new URL(res, import.meta.url).href;
};
```

<br>

## 🤔 SEE MORE
More, you can get more technical notes from <a href="https://gratis-number-79a.notion.site/ts-vite-react-weather-app-890e33ccc3d2486bb23ae58519950870">here</a>


