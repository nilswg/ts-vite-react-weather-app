// https://opendata.cwb.gov.tw/dist/opendata-swagger.html#/預報/get_v1_rest_datastore_F_D0047_091

import { LocationData } from '@/types';
import infoCountry from '@/data/countries';

const reqLocations = async (input: string) => {
  const locations = infoCountry.map((x, i) => ({
    id: x.TID,
    cityName: x.Name.C,
  }));

  return locations.slice(0, 6);
};

export default reqLocations;
