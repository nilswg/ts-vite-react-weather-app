/**
 * 透過中央氣象局提供的 API 所取回的完整數據。
 * (僅供參考，請不要直接拿來使用)
 *
 * (1) result是欄位描述，使用上，取下段 records 部分使用。
 * (2) weatherElement: 為各項氣象因子(共 15 項)。
 * (3) weatherElement: 其中又再分別以不同時段來區分不同天，剛好為一週預測結果。
 */
const example_data = {
  success: 'true',
  result: {
    resource_id: 'F-D0047-091',
    fields: [
      {
        id: 'contentDescription',
        type: 'String',
      },
      {
        id: 'datasetDescription',
        type: 'String',
      },
      {
        id: 'locationsName',
        type: 'String',
      },
      {
        id: 'dataid',
        type: 'String',
      },
      {
        id: 'locationName',
        type: 'String',
      },
      {
        id: 'geocode',
        type: 'Double',
      },
      {
        id: 'lat',
        type: 'Double',
      },
      {
        id: 'lon',
        type: 'Double',
      },
      {
        id: 'elementName',
        type: 'String',
      },
      {
        id: 'description',
        type: 'String',
      },
      {
        id: 'startTime',
        type: 'Timestamp',
      },
      {
        id: 'endTime',
        type: 'Timestamp',
      },
      {
        id: 'dataTime',
        type: 'Timestamp',
      },
      {
        id: 'value',
        type: 'String',
      },
      {
        id: 'measures',
        type: 'String',
      },
    ],
  },
  records: {
    locations: [
      {
        datasetDescription: '臺灣各縣市鄉鎮未來1週逐12小時天氣預報',
        locationsName: '台灣',
        dataid: 'D0047-091',
        location: [
          {
            locationName: '花蓮縣',
            geocode: '10015000',
            lat: '23.983897',
            lon: '121.598641',
            weatherElement: [
              {
                elementName: 'PoP12h',
                description: '12小時降雨機率',
                time: [
                  {
                    startTime: '2023-01-15 18:00:00',
                    endTime: '2023-01-16 06:00:00',
                    elementValue: [
                      {
                        value: '10',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 06:00:00',
                    endTime: '2023-01-16 18:00:00',
                    elementValue: [
                      {
                        value: '10',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 18:00:00',
                    endTime: '2023-01-17 06:00:00',
                    elementValue: [
                      {
                        value: '10',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 06:00:00',
                    endTime: '2023-01-17 18:00:00',
                    elementValue: [
                      {
                        value: '10',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 18:00:00',
                    endTime: '2023-01-18 06:00:00',
                    elementValue: [
                      {
                        value: '10',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 06:00:00',
                    endTime: '2023-01-18 18:00:00',
                    elementValue: [
                      {
                        value: '20',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 18:00:00',
                    endTime: '2023-01-19 06:00:00',
                    elementValue: [
                      {
                        value: '30',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 06:00:00',
                    endTime: '2023-01-19 18:00:00',
                    elementValue: [
                      {
                        value: ' ',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 18:00:00',
                    endTime: '2023-01-20 06:00:00',
                    elementValue: [
                      {
                        value: ' ',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 06:00:00',
                    endTime: '2023-01-20 18:00:00',
                    elementValue: [
                      {
                        value: ' ',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 18:00:00',
                    endTime: '2023-01-21 06:00:00',
                    elementValue: [
                      {
                        value: ' ',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 06:00:00',
                    endTime: '2023-01-21 18:00:00',
                    elementValue: [
                      {
                        value: ' ',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 18:00:00',
                    endTime: '2023-01-22 06:00:00',
                    elementValue: [
                      {
                        value: ' ',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 06:00:00',
                    endTime: '2023-01-22 18:00:00',
                    elementValue: [
                      {
                        value: ' ',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 18:00:00',
                    endTime: '2023-01-23 06:00:00',
                    elementValue: [
                      {
                        value: ' ',
                        measures: '百分比',
                      },
                    ],
                  },
                ],
              },
              {
                elementName: 'T',
                description: '平均溫度',
                time: [
                  {
                    startTime: '2023-01-15 18:00:00',
                    endTime: '2023-01-16 06:00:00',
                    elementValue: [
                      {
                        value: '16',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 06:00:00',
                    endTime: '2023-01-16 18:00:00',
                    elementValue: [
                      {
                        value: '16',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 18:00:00',
                    endTime: '2023-01-17 06:00:00',
                    elementValue: [
                      {
                        value: '15',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 06:00:00',
                    endTime: '2023-01-17 18:00:00',
                    elementValue: [
                      {
                        value: '18',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 18:00:00',
                    endTime: '2023-01-18 06:00:00',
                    elementValue: [
                      {
                        value: '17',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 06:00:00',
                    endTime: '2023-01-18 18:00:00',
                    elementValue: [
                      {
                        value: '19',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 18:00:00',
                    endTime: '2023-01-19 06:00:00',
                    elementValue: [
                      {
                        value: '18',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 06:00:00',
                    endTime: '2023-01-19 18:00:00',
                    elementValue: [
                      {
                        value: '20',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 18:00:00',
                    endTime: '2023-01-20 06:00:00',
                    elementValue: [
                      {
                        value: '19',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 06:00:00',
                    endTime: '2023-01-20 18:00:00',
                    elementValue: [
                      {
                        value: '20',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 18:00:00',
                    endTime: '2023-01-21 06:00:00',
                    elementValue: [
                      {
                        value: '18',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 06:00:00',
                    endTime: '2023-01-21 18:00:00',
                    elementValue: [
                      {
                        value: '20',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 18:00:00',
                    endTime: '2023-01-22 06:00:00',
                    elementValue: [
                      {
                        value: '19',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 06:00:00',
                    endTime: '2023-01-22 18:00:00',
                    elementValue: [
                      {
                        value: '21',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 18:00:00',
                    endTime: '2023-01-23 06:00:00',
                    elementValue: [
                      {
                        value: '19',
                        measures: '攝氏度',
                      },
                    ],
                  },
                ],
              },
              {
                elementName: 'RH',
                description: '平均相對濕度',
                time: [
                  {
                    startTime: '2023-01-15 18:00:00',
                    endTime: '2023-01-16 06:00:00',
                    elementValue: [
                      {
                        value: '91',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 06:00:00',
                    endTime: '2023-01-16 18:00:00',
                    elementValue: [
                      {
                        value: '77',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 18:00:00',
                    endTime: '2023-01-17 06:00:00',
                    elementValue: [
                      {
                        value: '87',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 06:00:00',
                    endTime: '2023-01-17 18:00:00',
                    elementValue: [
                      {
                        value: '80',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 18:00:00',
                    endTime: '2023-01-18 06:00:00',
                    elementValue: [
                      {
                        value: '88',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 06:00:00',
                    endTime: '2023-01-18 18:00:00',
                    elementValue: [
                      {
                        value: '84',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 18:00:00',
                    endTime: '2023-01-19 06:00:00',
                    elementValue: [
                      {
                        value: '89',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 06:00:00',
                    endTime: '2023-01-19 18:00:00',
                    elementValue: [
                      {
                        value: '89',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 18:00:00',
                    endTime: '2023-01-20 06:00:00',
                    elementValue: [
                      {
                        value: '92',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 06:00:00',
                    endTime: '2023-01-20 18:00:00',
                    elementValue: [
                      {
                        value: '90',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 18:00:00',
                    endTime: '2023-01-21 06:00:00',
                    elementValue: [
                      {
                        value: '94',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 06:00:00',
                    endTime: '2023-01-21 18:00:00',
                    elementValue: [
                      {
                        value: '89',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 18:00:00',
                    endTime: '2023-01-22 06:00:00',
                    elementValue: [
                      {
                        value: '94',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 06:00:00',
                    endTime: '2023-01-22 18:00:00',
                    elementValue: [
                      {
                        value: '90',
                        measures: '百分比',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 18:00:00',
                    endTime: '2023-01-23 06:00:00',
                    elementValue: [
                      {
                        value: '92',
                        measures: '百分比',
                      },
                    ],
                  },
                ],
              },
              {
                elementName: 'MinCI',
                description: '最小舒適度指數',
                time: [
                  {
                    startTime: '2023-01-15 18:00:00',
                    endTime: '2023-01-16 06:00:00',
                    elementValue: [
                      {
                        value: '14',
                        measures: 'NA',
                      },
                      {
                        value: '寒冷',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 06:00:00',
                    endTime: '2023-01-16 18:00:00',
                    elementValue: [
                      {
                        value: '14',
                        measures: 'NA',
                      },
                      {
                        value: '寒冷',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 18:00:00',
                    endTime: '2023-01-17 06:00:00',
                    elementValue: [
                      {
                        value: '14',
                        measures: 'NA',
                      },
                      {
                        value: '寒冷',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 06:00:00',
                    endTime: '2023-01-17 18:00:00',
                    elementValue: [
                      {
                        value: '15',
                        measures: 'NA',
                      },
                      {
                        value: '寒冷',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 18:00:00',
                    endTime: '2023-01-18 06:00:00',
                    elementValue: [
                      {
                        value: '17',
                        measures: 'NA',
                      },
                      {
                        value: '稍有寒意',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 06:00:00',
                    endTime: '2023-01-18 18:00:00',
                    elementValue: [
                      {
                        value: '17',
                        measures: 'NA',
                      },
                      {
                        value: '稍有寒意',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 18:00:00',
                    endTime: '2023-01-19 06:00:00',
                    elementValue: [
                      {
                        value: '17',
                        measures: 'NA',
                      },
                      {
                        value: '稍有寒意',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 06:00:00',
                    endTime: '2023-01-19 18:00:00',
                    elementValue: [
                      {
                        value: '17',
                        measures: 'NA',
                      },
                      {
                        value: '稍有寒意',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 18:00:00',
                    endTime: '2023-01-20 06:00:00',
                    elementValue: [
                      {
                        value: '18',
                        measures: 'NA',
                      },
                      {
                        value: '稍有寒意',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 06:00:00',
                    endTime: '2023-01-20 18:00:00',
                    elementValue: [
                      {
                        value: '18',
                        measures: 'NA',
                      },
                      {
                        value: '稍有寒意',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 18:00:00',
                    endTime: '2023-01-21 06:00:00',
                    elementValue: [
                      {
                        value: '17',
                        measures: 'NA',
                      },
                      {
                        value: '稍有寒意',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 06:00:00',
                    endTime: '2023-01-21 18:00:00',
                    elementValue: [
                      {
                        value: '17',
                        measures: 'NA',
                      },
                      {
                        value: '稍有寒意',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 18:00:00',
                    endTime: '2023-01-22 06:00:00',
                    elementValue: [
                      {
                        value: '18',
                        measures: 'NA',
                      },
                      {
                        value: '稍有寒意',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 06:00:00',
                    endTime: '2023-01-22 18:00:00',
                    elementValue: [
                      {
                        value: '18',
                        measures: 'NA',
                      },
                      {
                        value: '稍有寒意',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 18:00:00',
                    endTime: '2023-01-23 06:00:00',
                    elementValue: [
                      {
                        value: '18',
                        measures: 'NA',
                      },
                      {
                        value: '稍有寒意',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                ],
              },
              {
                elementName: 'WS',
                description: '最大風速',
                time: [
                  {
                    startTime: '2023-01-15 18:00:00',
                    endTime: '2023-01-16 06:00:00',
                    elementValue: [
                      {
                        value: '5',
                        measures: '公尺/秒',
                      },
                      {
                        value: '3',
                        measures: '蒲福風級',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 06:00:00',
                    endTime: '2023-01-16 18:00:00',
                    elementValue: [
                      {
                        value: '5',
                        measures: '公尺/秒',
                      },
                      {
                        value: '3',
                        measures: '蒲福風級',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 18:00:00',
                    endTime: '2023-01-17 06:00:00',
                    elementValue: [
                      {
                        value: '4',
                        measures: '公尺/秒',
                      },
                      {
                        value: '3',
                        measures: '蒲福風級',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 06:00:00',
                    endTime: '2023-01-17 18:00:00',
                    elementValue: [
                      {
                        value: '5',
                        measures: '公尺/秒',
                      },
                      {
                        value: '3',
                        measures: '蒲福風級',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 18:00:00',
                    endTime: '2023-01-18 06:00:00',
                    elementValue: [
                      {
                        value: '4',
                        measures: '公尺/秒',
                      },
                      {
                        value: '3',
                        measures: '蒲福風級',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 06:00:00',
                    endTime: '2023-01-18 18:00:00',
                    elementValue: [
                      {
                        value: '2',
                        measures: '公尺/秒',
                      },
                      {
                        value: '2',
                        measures: '蒲福風級',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 18:00:00',
                    endTime: '2023-01-19 06:00:00',
                    elementValue: [
                      {
                        value: '1',
                        measures: '公尺/秒',
                      },
                      {
                        value: '<= 1',
                        measures: '蒲福風級',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 06:00:00',
                    endTime: '2023-01-19 18:00:00',
                    elementValue: [
                      {
                        value: '2',
                        measures: '公尺/秒',
                      },
                      {
                        value: '2',
                        measures: '蒲福風級',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 18:00:00',
                    endTime: '2023-01-20 06:00:00',
                    elementValue: [
                      {
                        value: '1',
                        measures: '公尺/秒',
                      },
                      {
                        value: '<= 1',
                        measures: '蒲福風級',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 06:00:00',
                    endTime: '2023-01-20 18:00:00',
                    elementValue: [
                      {
                        value: '3',
                        measures: '公尺/秒',
                      },
                      {
                        value: '2',
                        measures: '蒲福風級',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 18:00:00',
                    endTime: '2023-01-21 06:00:00',
                    elementValue: [
                      {
                        value: '1',
                        measures: '公尺/秒',
                      },
                      {
                        value: '<= 1',
                        measures: '蒲福風級',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 06:00:00',
                    endTime: '2023-01-21 18:00:00',
                    elementValue: [
                      {
                        value: '2',
                        measures: '公尺/秒',
                      },
                      {
                        value: '2',
                        measures: '蒲福風級',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 18:00:00',
                    endTime: '2023-01-22 06:00:00',
                    elementValue: [
                      {
                        value: '1',
                        measures: '公尺/秒',
                      },
                      {
                        value: '<= 1',
                        measures: '蒲福風級',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 06:00:00',
                    endTime: '2023-01-22 18:00:00',
                    elementValue: [
                      {
                        value: '2',
                        measures: '公尺/秒',
                      },
                      {
                        value: '2',
                        measures: '蒲福風級',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 18:00:00',
                    endTime: '2023-01-23 06:00:00',
                    elementValue: [
                      {
                        value: '1',
                        measures: '公尺/秒',
                      },
                      {
                        value: '<= 1',
                        measures: '蒲福風級',
                      },
                    ],
                  },
                ],
              },
              {
                elementName: 'MaxAT',
                description: '最高體感溫度',
                time: [
                  {
                    startTime: '2023-01-15 18:00:00',
                    endTime: '2023-01-16 06:00:00',
                    elementValue: [
                      {
                        value: '17',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 06:00:00',
                    endTime: '2023-01-16 18:00:00',
                    elementValue: [
                      {
                        value: '17',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 18:00:00',
                    endTime: '2023-01-17 06:00:00',
                    elementValue: [
                      {
                        value: '14',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 06:00:00',
                    endTime: '2023-01-17 18:00:00',
                    elementValue: [
                      {
                        value: '19',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 18:00:00',
                    endTime: '2023-01-18 06:00:00',
                    elementValue: [
                      {
                        value: '19',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 06:00:00',
                    endTime: '2023-01-18 18:00:00',
                    elementValue: [
                      {
                        value: '21',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 18:00:00',
                    endTime: '2023-01-19 06:00:00',
                    elementValue: [
                      {
                        value: '20',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 06:00:00',
                    endTime: '2023-01-19 18:00:00',
                    elementValue: [
                      {
                        value: '24',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 18:00:00',
                    endTime: '2023-01-20 06:00:00',
                    elementValue: [
                      {
                        value: '21',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 06:00:00',
                    endTime: '2023-01-20 18:00:00',
                    elementValue: [
                      {
                        value: '23',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 18:00:00',
                    endTime: '2023-01-21 06:00:00',
                    elementValue: [
                      {
                        value: '21',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 06:00:00',
                    endTime: '2023-01-21 18:00:00',
                    elementValue: [
                      {
                        value: '23',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 18:00:00',
                    endTime: '2023-01-22 06:00:00',
                    elementValue: [
                      {
                        value: '22',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 06:00:00',
                    endTime: '2023-01-22 18:00:00',
                    elementValue: [
                      {
                        value: '26',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 18:00:00',
                    endTime: '2023-01-23 06:00:00',
                    elementValue: [
                      {
                        value: '22',
                        measures: '攝氏度',
                      },
                    ],
                  },
                ],
              },
              {
                elementName: 'Wx',
                description: '天氣現象',
                time: [
                  {
                    startTime: '2023-01-15 18:00:00',
                    endTime: '2023-01-16 06:00:00',
                    elementValue: [
                      {
                        value: '陰天',
                        measures: '自定義 Wx 文字',
                      },
                      {
                        value: '07',
                        measures: '自定義 Wx 單位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 06:00:00',
                    endTime: '2023-01-16 18:00:00',
                    elementValue: [
                      {
                        value: '陰天',
                        measures: '自定義 Wx 文字',
                      },
                      {
                        value: '07',
                        measures: '自定義 Wx 單位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 18:00:00',
                    endTime: '2023-01-17 06:00:00',
                    elementValue: [
                      {
                        value: '多雲時陰',
                        measures: '自定義 Wx 文字',
                      },
                      {
                        value: '05',
                        measures: '自定義 Wx 單位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 06:00:00',
                    endTime: '2023-01-17 18:00:00',
                    elementValue: [
                      {
                        value: '多雲',
                        measures: '自定義 Wx 文字',
                      },
                      {
                        value: '04',
                        measures: '自定義 Wx 單位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 18:00:00',
                    endTime: '2023-01-18 06:00:00',
                    elementValue: [
                      {
                        value: '多雲',
                        measures: '自定義 Wx 文字',
                      },
                      {
                        value: '04',
                        measures: '自定義 Wx 單位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 06:00:00',
                    endTime: '2023-01-18 18:00:00',
                    elementValue: [
                      {
                        value: '多雲',
                        measures: '自定義 Wx 文字',
                      },
                      {
                        value: '04',
                        measures: '自定義 Wx 單位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 18:00:00',
                    endTime: '2023-01-19 06:00:00',
                    elementValue: [
                      {
                        value: '陰時多雲短暫雨',
                        measures: '自定義 Wx 文字',
                      },
                      {
                        value: '10',
                        measures: '自定義 Wx 單位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 06:00:00',
                    endTime: '2023-01-19 18:00:00',
                    elementValue: [
                      {
                        value: '多雲短暫雨',
                        measures: '自定義 Wx 文字',
                      },
                      {
                        value: '08',
                        measures: '自定義 Wx 單位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 18:00:00',
                    endTime: '2023-01-20 06:00:00',
                    elementValue: [
                      {
                        value: '多雲時陰短暫雨',
                        measures: '自定義 Wx 文字',
                      },
                      {
                        value: '09',
                        measures: '自定義 Wx 單位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 06:00:00',
                    endTime: '2023-01-20 18:00:00',
                    elementValue: [
                      {
                        value: '陰時多雲短暫雨',
                        measures: '自定義 Wx 文字',
                      },
                      {
                        value: '10',
                        measures: '自定義 Wx 單位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 18:00:00',
                    endTime: '2023-01-21 06:00:00',
                    elementValue: [
                      {
                        value: '陰時多雲短暫雨',
                        measures: '自定義 Wx 文字',
                      },
                      {
                        value: '10',
                        measures: '自定義 Wx 單位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 06:00:00',
                    endTime: '2023-01-21 18:00:00',
                    elementValue: [
                      {
                        value: '陰時多雲短暫雨',
                        measures: '自定義 Wx 文字',
                      },
                      {
                        value: '10',
                        measures: '自定義 Wx 單位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 18:00:00',
                    endTime: '2023-01-22 06:00:00',
                    elementValue: [
                      {
                        value: '多雲短暫雨',
                        measures: '自定義 Wx 文字',
                      },
                      {
                        value: '08',
                        measures: '自定義 Wx 單位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 06:00:00',
                    endTime: '2023-01-22 18:00:00',
                    elementValue: [
                      {
                        value: '多雲時晴',
                        measures: '自定義 Wx 文字',
                      },
                      {
                        value: '03',
                        measures: '自定義 Wx 單位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 18:00:00',
                    endTime: '2023-01-23 06:00:00',
                    elementValue: [
                      {
                        value: '多雲',
                        measures: '自定義 Wx 文字',
                      },
                      {
                        value: '04',
                        measures: '自定義 Wx 單位',
                      },
                    ],
                  },
                ],
              },
              {
                elementName: 'MaxCI',
                description: '最大舒適度指數',
                time: [
                  {
                    startTime: '2023-01-15 18:00:00',
                    endTime: '2023-01-16 06:00:00',
                    elementValue: [
                      {
                        value: '18',
                        measures: 'NA ',
                      },
                      {
                        value: '稍有寒意',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 06:00:00',
                    endTime: '2023-01-16 18:00:00',
                    elementValue: [
                      {
                        value: '17',
                        measures: 'NA ',
                      },
                      {
                        value: '稍有寒意',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 18:00:00',
                    endTime: '2023-01-17 06:00:00',
                    elementValue: [
                      {
                        value: '16',
                        measures: 'NA ',
                      },
                      {
                        value: '稍有寒意',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 06:00:00',
                    endTime: '2023-01-17 18:00:00',
                    elementValue: [
                      {
                        value: '19',
                        measures: 'NA ',
                      },
                      {
                        value: '稍有寒意',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 18:00:00',
                    endTime: '2023-01-18 06:00:00',
                    elementValue: [
                      {
                        value: '18',
                        measures: 'NA ',
                      },
                      {
                        value: '稍有寒意',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 06:00:00',
                    endTime: '2023-01-18 18:00:00',
                    elementValue: [
                      {
                        value: '19',
                        measures: 'NA ',
                      },
                      {
                        value: '稍有寒意',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 18:00:00',
                    endTime: '2023-01-19 06:00:00',
                    elementValue: [
                      {
                        value: '18',
                        measures: 'NA ',
                      },
                      {
                        value: '稍有寒意',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 06:00:00',
                    endTime: '2023-01-19 18:00:00',
                    elementValue: [
                      {
                        value: '21',
                        measures: 'NA ',
                      },
                      {
                        value: '舒適',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 18:00:00',
                    endTime: '2023-01-20 06:00:00',
                    elementValue: [
                      {
                        value: '19',
                        measures: 'NA ',
                      },
                      {
                        value: '稍有寒意',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 06:00:00',
                    endTime: '2023-01-20 18:00:00',
                    elementValue: [
                      {
                        value: '20',
                        measures: 'NA ',
                      },
                      {
                        value: '舒適',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 18:00:00',
                    endTime: '2023-01-21 06:00:00',
                    elementValue: [
                      {
                        value: '19',
                        measures: 'NA ',
                      },
                      {
                        value: '稍有寒意',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 06:00:00',
                    endTime: '2023-01-21 18:00:00',
                    elementValue: [
                      {
                        value: '21',
                        measures: 'NA ',
                      },
                      {
                        value: '舒適',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 18:00:00',
                    endTime: '2023-01-22 06:00:00',
                    elementValue: [
                      {
                        value: '19',
                        measures: 'NA ',
                      },
                      {
                        value: '稍有寒意',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 06:00:00',
                    endTime: '2023-01-22 18:00:00',
                    elementValue: [
                      {
                        value: '22',
                        measures: 'NA ',
                      },
                      {
                        value: '舒適',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 18:00:00',
                    endTime: '2023-01-23 06:00:00',
                    elementValue: [
                      {
                        value: '20',
                        measures: 'NA ',
                      },
                      {
                        value: '舒適',
                        measures: '自定義 CI 文字',
                      },
                    ],
                  },
                ],
              },
              {
                elementName: 'MinT',
                description: '最低溫度',
                time: [
                  {
                    startTime: '2023-01-15 18:00:00',
                    endTime: '2023-01-16 06:00:00',
                    elementValue: [
                      {
                        value: '14',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 06:00:00',
                    endTime: '2023-01-16 18:00:00',
                    elementValue: [
                      {
                        value: '14',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 18:00:00',
                    endTime: '2023-01-17 06:00:00',
                    elementValue: [
                      {
                        value: '14',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 06:00:00',
                    endTime: '2023-01-17 18:00:00',
                    elementValue: [
                      {
                        value: '15',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 18:00:00',
                    endTime: '2023-01-18 06:00:00',
                    elementValue: [
                      {
                        value: '17',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 06:00:00',
                    endTime: '2023-01-18 18:00:00',
                    elementValue: [
                      {
                        value: '17',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 18:00:00',
                    endTime: '2023-01-19 06:00:00',
                    elementValue: [
                      {
                        value: '17',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 06:00:00',
                    endTime: '2023-01-19 18:00:00',
                    elementValue: [
                      {
                        value: '17',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 18:00:00',
                    endTime: '2023-01-20 06:00:00',
                    elementValue: [
                      {
                        value: '18',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 06:00:00',
                    endTime: '2023-01-20 18:00:00',
                    elementValue: [
                      {
                        value: '18',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 18:00:00',
                    endTime: '2023-01-21 06:00:00',
                    elementValue: [
                      {
                        value: '17',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 06:00:00',
                    endTime: '2023-01-21 18:00:00',
                    elementValue: [
                      {
                        value: '17',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 18:00:00',
                    endTime: '2023-01-22 06:00:00',
                    elementValue: [
                      {
                        value: '18',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 06:00:00',
                    endTime: '2023-01-22 18:00:00',
                    elementValue: [
                      {
                        value: '18',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 18:00:00',
                    endTime: '2023-01-23 06:00:00',
                    elementValue: [
                      {
                        value: '18',
                        measures: '攝氏度',
                      },
                    ],
                  },
                ],
              },
              {
                elementName: 'UVI',
                description: '紫外線指數',
                time: [
                  {
                    startTime: '2023-01-16 06:00:00',
                    endTime: '2023-01-16 18:00:00',
                    elementValue: [
                      {
                        value: '2',
                        measures: '紫外線指數',
                      },
                      {
                        value: '低量級',
                        measures: '曝曬級數',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 06:00:00',
                    endTime: '2023-01-17 18:00:00',
                    elementValue: [
                      {
                        value: '3',
                        measures: '紫外線指數',
                      },
                      {
                        value: '中量級',
                        measures: '曝曬級數',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 06:00:00',
                    endTime: '2023-01-18 18:00:00',
                    elementValue: [
                      {
                        value: '3',
                        measures: '紫外線指數',
                      },
                      {
                        value: '中量級',
                        measures: '曝曬級數',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 06:00:00',
                    endTime: '2023-01-19 18:00:00',
                    elementValue: [
                      {
                        value: '3',
                        measures: '紫外線指數',
                      },
                      {
                        value: '中量級',
                        measures: '曝曬級數',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 06:00:00',
                    endTime: '2023-01-20 18:00:00',
                    elementValue: [
                      {
                        value: '3',
                        measures: '紫外線指數',
                      },
                      {
                        value: '中量級',
                        measures: '曝曬級數',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 06:00:00',
                    endTime: '2023-01-21 18:00:00',
                    elementValue: [
                      {
                        value: '3',
                        measures: '紫外線指數',
                      },
                      {
                        value: '中量級',
                        measures: '曝曬級數',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 06:00:00',
                    endTime: '2023-01-22 18:00:00',
                    elementValue: [
                      {
                        value: '4',
                        measures: '紫外線指數',
                      },
                      {
                        value: '中量級',
                        measures: '曝曬級數',
                      },
                    ],
                  },
                ],
              },
              {
                elementName: 'WeatherDescription',
                description: '天氣預報綜合描述',
                time: [
                  {
                    startTime: '2023-01-15 18:00:00',
                    endTime: '2023-01-16 06:00:00',
                    elementValue: [
                      {
                        value:
                          '陰天。降雨機率 10%。溫度攝氏14至18度。寒冷至稍有寒意。偏北風 風速3級(每秒5公尺)。相對濕度91%。',
                        measures: 'NA',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 06:00:00',
                    endTime: '2023-01-16 18:00:00',
                    elementValue: [
                      {
                        value:
                          '陰天。降雨機率 10%。溫度攝氏14至18度。寒冷至稍有寒意。偏北風 風速3級(每秒5公尺)。相對濕度77%。',
                        measures: 'NA',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 18:00:00',
                    endTime: '2023-01-17 06:00:00',
                    elementValue: [
                      {
                        value:
                          '多雲時陰。降雨機率 10%。溫度攝氏14至16度。寒冷至稍有寒意。偏北風 風速3級(每秒4公尺)。相對濕度87%。',
                        measures: 'NA',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 06:00:00',
                    endTime: '2023-01-17 18:00:00',
                    elementValue: [
                      {
                        value:
                          '多雲。降雨機率 10%。溫度攝氏15至19度。寒冷至稍有寒意。偏北風 風速3級(每秒5公尺)。相對濕度80%。',
                        measures: 'NA',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 18:00:00',
                    endTime: '2023-01-18 06:00:00',
                    elementValue: [
                      {
                        value:
                          '多雲。降雨機率 10%。溫度攝氏17至18度。稍有寒意。偏北風 風速3級(每秒4公尺)。相對濕度88%。',
                        measures: 'NA',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 06:00:00',
                    endTime: '2023-01-18 18:00:00',
                    elementValue: [
                      {
                        value:
                          '多雲。降雨機率 20%。溫度攝氏17至20度。稍有寒意。東北風 風速2級(每秒2公尺)。相對濕度84%。',
                        measures: 'NA',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 18:00:00',
                    endTime: '2023-01-19 06:00:00',
                    elementValue: [
                      {
                        value:
                          '陰時多雲短暫雨。降雨機率 30%。溫度攝氏17至19度。稍有寒意。東北風 風速<= 1級(每秒1公尺)。相對濕度89%。',
                        measures: 'NA',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 06:00:00',
                    endTime: '2023-01-19 18:00:00',
                    elementValue: [
                      {
                        value:
                          '多雲短暫雨。溫度攝氏17至21度。稍有寒意至舒適。偏北風 風速2級(每秒2公尺)。相對濕度89%。',
                        measures: 'NA',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 18:00:00',
                    endTime: '2023-01-20 06:00:00',
                    elementValue: [
                      {
                        value:
                          '多雲時陰短暫雨。溫度攝氏18至20度。稍有寒意。偏北風 風速<= 1級(每秒1公尺)。相對濕度92%。',
                        measures: 'NA',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 06:00:00',
                    endTime: '2023-01-20 18:00:00',
                    elementValue: [
                      {
                        value:
                          '陰時多雲短暫雨。溫度攝氏18至21度。稍有寒意至舒適。東北風 風速2級(每秒3公尺)。相對濕度90%。',
                        measures: 'NA',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 18:00:00',
                    endTime: '2023-01-21 06:00:00',
                    elementValue: [
                      {
                        value:
                          '陰時多雲短暫雨。溫度攝氏17至19度。稍有寒意。東北風 風速<= 1級(每秒1公尺)。相對濕度94%。',
                        measures: 'NA',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 06:00:00',
                    endTime: '2023-01-21 18:00:00',
                    elementValue: [
                      {
                        value:
                          '陰時多雲短暫雨。溫度攝氏17至21度。稍有寒意至舒適。東北風 風速2級(每秒2公尺)。相對濕度89%。',
                        measures: 'NA',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 18:00:00',
                    endTime: '2023-01-22 06:00:00',
                    elementValue: [
                      {
                        value:
                          '多雲短暫雨。溫度攝氏18至20度。稍有寒意。偏北風 風速<= 1級(每秒1公尺)。相對濕度94%。',
                        measures: 'NA',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 06:00:00',
                    endTime: '2023-01-22 18:00:00',
                    elementValue: [
                      {
                        value:
                          '多雲時晴。溫度攝氏18至23度。稍有寒意至舒適。偏西風 風速2級(每秒2公尺)。相對濕度90%。',
                        measures: 'NA',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 18:00:00',
                    endTime: '2023-01-23 06:00:00',
                    elementValue: [
                      {
                        value:
                          '多雲。溫度攝氏18至21度。稍有寒意至舒適。東北風 風速<= 1級(每秒1公尺)。相對濕度92%。',
                        measures: 'NA',
                      },
                    ],
                  },
                ],
              },
              {
                elementName: 'MinAT',
                description: '最低體感溫度',
                time: [
                  {
                    startTime: '2023-01-15 18:00:00',
                    endTime: '2023-01-16 06:00:00',
                    elementValue: [
                      {
                        value: '13',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 06:00:00',
                    endTime: '2023-01-16 18:00:00',
                    elementValue: [
                      {
                        value: '13',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 18:00:00',
                    endTime: '2023-01-17 06:00:00',
                    elementValue: [
                      {
                        value: '13',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 06:00:00',
                    endTime: '2023-01-17 18:00:00',
                    elementValue: [
                      {
                        value: '14',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 18:00:00',
                    endTime: '2023-01-18 06:00:00',
                    elementValue: [
                      {
                        value: '17',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 06:00:00',
                    endTime: '2023-01-18 18:00:00',
                    elementValue: [
                      {
                        value: '18',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 18:00:00',
                    endTime: '2023-01-19 06:00:00',
                    elementValue: [
                      {
                        value: '19',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 06:00:00',
                    endTime: '2023-01-19 18:00:00',
                    elementValue: [
                      {
                        value: '19',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 18:00:00',
                    endTime: '2023-01-20 06:00:00',
                    elementValue: [
                      {
                        value: '19',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 06:00:00',
                    endTime: '2023-01-20 18:00:00',
                    elementValue: [
                      {
                        value: '19',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 18:00:00',
                    endTime: '2023-01-21 06:00:00',
                    elementValue: [
                      {
                        value: '19',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 06:00:00',
                    endTime: '2023-01-21 18:00:00',
                    elementValue: [
                      {
                        value: '19',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 18:00:00',
                    endTime: '2023-01-22 06:00:00',
                    elementValue: [
                      {
                        value: '20',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 06:00:00',
                    endTime: '2023-01-22 18:00:00',
                    elementValue: [
                      {
                        value: '20',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 18:00:00',
                    endTime: '2023-01-23 06:00:00',
                    elementValue: [
                      {
                        value: '20',
                        measures: '攝氏度',
                      },
                    ],
                  },
                ],
              },
              {
                elementName: 'MaxT',
                description: '最高溫度',
                time: [
                  {
                    startTime: '2023-01-15 18:00:00',
                    endTime: '2023-01-16 06:00:00',
                    elementValue: [
                      {
                        value: '18',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 06:00:00',
                    endTime: '2023-01-16 18:00:00',
                    elementValue: [
                      {
                        value: '18',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 18:00:00',
                    endTime: '2023-01-17 06:00:00',
                    elementValue: [
                      {
                        value: '16',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 06:00:00',
                    endTime: '2023-01-17 18:00:00',
                    elementValue: [
                      {
                        value: '19',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 18:00:00',
                    endTime: '2023-01-18 06:00:00',
                    elementValue: [
                      {
                        value: '18',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 06:00:00',
                    endTime: '2023-01-18 18:00:00',
                    elementValue: [
                      {
                        value: '20',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 18:00:00',
                    endTime: '2023-01-19 06:00:00',
                    elementValue: [
                      {
                        value: '19',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 06:00:00',
                    endTime: '2023-01-19 18:00:00',
                    elementValue: [
                      {
                        value: '21',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 18:00:00',
                    endTime: '2023-01-20 06:00:00',
                    elementValue: [
                      {
                        value: '20',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 06:00:00',
                    endTime: '2023-01-20 18:00:00',
                    elementValue: [
                      {
                        value: '21',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 18:00:00',
                    endTime: '2023-01-21 06:00:00',
                    elementValue: [
                      {
                        value: '19',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 06:00:00',
                    endTime: '2023-01-21 18:00:00',
                    elementValue: [
                      {
                        value: '21',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 18:00:00',
                    endTime: '2023-01-22 06:00:00',
                    elementValue: [
                      {
                        value: '20',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 06:00:00',
                    endTime: '2023-01-22 18:00:00',
                    elementValue: [
                      {
                        value: '23',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 18:00:00',
                    endTime: '2023-01-23 06:00:00',
                    elementValue: [
                      {
                        value: '21',
                        measures: '攝氏度',
                      },
                    ],
                  },
                ],
              },
              {
                elementName: 'WD',
                description: '風向',
                time: [
                  {
                    startTime: '2023-01-15 18:00:00',
                    endTime: '2023-01-16 06:00:00',
                    elementValue: [
                      {
                        value: '偏北風',
                        measures: '8方位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 06:00:00',
                    endTime: '2023-01-16 18:00:00',
                    elementValue: [
                      {
                        value: '偏北風',
                        measures: '8方位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 18:00:00',
                    endTime: '2023-01-17 06:00:00',
                    elementValue: [
                      {
                        value: '偏北風',
                        measures: '8方位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 06:00:00',
                    endTime: '2023-01-17 18:00:00',
                    elementValue: [
                      {
                        value: '偏北風',
                        measures: '8方位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 18:00:00',
                    endTime: '2023-01-18 06:00:00',
                    elementValue: [
                      {
                        value: '偏北風',
                        measures: '8方位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 06:00:00',
                    endTime: '2023-01-18 18:00:00',
                    elementValue: [
                      {
                        value: '東北風',
                        measures: '8方位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 18:00:00',
                    endTime: '2023-01-19 06:00:00',
                    elementValue: [
                      {
                        value: '東北風',
                        measures: '8方位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 06:00:00',
                    endTime: '2023-01-19 18:00:00',
                    elementValue: [
                      {
                        value: '偏北風',
                        measures: '8方位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 18:00:00',
                    endTime: '2023-01-20 06:00:00',
                    elementValue: [
                      {
                        value: '偏北風',
                        measures: '8方位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 06:00:00',
                    endTime: '2023-01-20 18:00:00',
                    elementValue: [
                      {
                        value: '東北風',
                        measures: '8方位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 18:00:00',
                    endTime: '2023-01-21 06:00:00',
                    elementValue: [
                      {
                        value: '東北風',
                        measures: '8方位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 06:00:00',
                    endTime: '2023-01-21 18:00:00',
                    elementValue: [
                      {
                        value: '東北風',
                        measures: '8方位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 18:00:00',
                    endTime: '2023-01-22 06:00:00',
                    elementValue: [
                      {
                        value: '偏北風',
                        measures: '8方位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 06:00:00',
                    endTime: '2023-01-22 18:00:00',
                    elementValue: [
                      {
                        value: '偏西風',
                        measures: '8方位',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 18:00:00',
                    endTime: '2023-01-23 06:00:00',
                    elementValue: [
                      {
                        value: '東北風',
                        measures: '8方位',
                      },
                    ],
                  },
                ],
              },
              {
                elementName: 'Td',
                description: '平均露點溫度',
                time: [
                  {
                    startTime: '2023-01-15 18:00:00',
                    endTime: '2023-01-16 06:00:00',
                    elementValue: [
                      {
                        value: '15',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 06:00:00',
                    endTime: '2023-01-16 18:00:00',
                    elementValue: [
                      {
                        value: '12',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-16 18:00:00',
                    endTime: '2023-01-17 06:00:00',
                    elementValue: [
                      {
                        value: '13',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 06:00:00',
                    endTime: '2023-01-17 18:00:00',
                    elementValue: [
                      {
                        value: '14',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-17 18:00:00',
                    endTime: '2023-01-18 06:00:00',
                    elementValue: [
                      {
                        value: '15',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 06:00:00',
                    endTime: '2023-01-18 18:00:00',
                    elementValue: [
                      {
                        value: '16',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-18 18:00:00',
                    endTime: '2023-01-19 06:00:00',
                    elementValue: [
                      {
                        value: '16',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 06:00:00',
                    endTime: '2023-01-19 18:00:00',
                    elementValue: [
                      {
                        value: '18',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-19 18:00:00',
                    endTime: '2023-01-20 06:00:00',
                    elementValue: [
                      {
                        value: '17',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 06:00:00',
                    endTime: '2023-01-20 18:00:00',
                    elementValue: [
                      {
                        value: '18',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-20 18:00:00',
                    endTime: '2023-01-21 06:00:00',
                    elementValue: [
                      {
                        value: '17',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 06:00:00',
                    endTime: '2023-01-21 18:00:00',
                    elementValue: [
                      {
                        value: '18',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-21 18:00:00',
                    endTime: '2023-01-22 06:00:00',
                    elementValue: [
                      {
                        value: '18',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 06:00:00',
                    endTime: '2023-01-22 18:00:00',
                    elementValue: [
                      {
                        value: '19',
                        measures: '攝氏度',
                      },
                    ],
                  },
                  {
                    startTime: '2023-01-22 18:00:00',
                    endTime: '2023-01-23 06:00:00',
                    elementValue: [
                      {
                        value: '18',
                        measures: '攝氏度',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
