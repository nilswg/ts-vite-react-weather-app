import InfoCounty from '@/data/countries';
import LocationItem from './LocationItem';
import { useMemo } from 'react';
import { CountryProps } from '@/types';
type Props = {
  searchInput?: string;
  hiddenSearchResult: Function;
};
const Locations = ({ searchInput = '', hiddenSearchResult }: Props) => {
  if (!searchInput) return <></>;
  const results = useMemo(
    () =>
      InfoCounty.filter(
        ({ ID, Area, TID, Name: { C, E } }) =>
          ID.includes(searchInput) ||
          Area.includes(searchInput) ||
          TID.includes(searchInput) ||
          C.includes(searchInput) ||
          E.includes(searchInput)
      ),
    [searchInput]
  );

  return (
    <div className="search result list">
      {results.map((props: CountryProps, i) => {
        return (
          <LocationItem
            key={`location_${props.TID}`}
            id={props.TID}
            enName={props.Name.E}
            chName={props.Name.C}
            hiddenSearchResult={hiddenSearchResult}
          />
        );
      })}
    </div>
  );
};
export default Locations;
