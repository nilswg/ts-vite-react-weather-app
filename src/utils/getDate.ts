/**
 * 範例:
 *    2020-08-05 11:32:13
 * -> 2020-08-05
 */
const getDate = (dateStr: string) => {
  return dateStr.split(' ')[0];
};

export default getDate;
