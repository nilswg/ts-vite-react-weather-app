import { useDispatch } from '@/store';
import { setLoading, setCityName } from '@/store';

interface LocationItemProps {
  id: string;
  chName: string;
  enName: string;

  hiddenSearchResult: Function;
}

const LocationItem = (props: LocationItemProps) => {
  const { id, chName, enName, hiddenSearchResult } = props;
  const dispatch = useDispatch();

  const onClick = () => {
    hiddenSearchResult();
    dispatch(setCityName(chName));
  };

  return (
    <a className="search result item" id={id} onClick={onClick}>
      <span>{`${id} - ${chName}`}</span>
      <span>{enName}</span>
    </a>
  );
};

export default LocationItem;
