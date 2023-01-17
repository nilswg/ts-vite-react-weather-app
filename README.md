# ts-vite-react-weather-app

This is a weather app for learning purposes and built with React and Vite, written in Typescript.


## 🐱‍🏍 Skills
React, Vite, TypeScript, @reduxjs/toolkit, Styled-components, SWR.


## ✨ Showcase 
![ts-vite-react-react-weather_1](https://user-images.githubusercontent.com/64550861/212832292-dca37e44-5fde-4711-a806-ad2bbd3589e1.gif)
![ts-vite-react-react-weather_2](https://user-images.githubusercontent.com/64550861/212832300-af2d60f7-b0f5-4afd-b6b6-39642027cdde.gif)


## 🛫 Quick start

```npm install```

```npm run dev```


## 🚀 Deployment

採用 gh-pages 部署專案。

```npm run  build ```

```npm run deploy:github```


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
