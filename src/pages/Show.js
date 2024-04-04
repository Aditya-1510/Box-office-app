/* eslint-disable no-undef */

import { useParams } from 'react-router-dom';
import ShowMainData from '../components/show/ShowMainData';
import Details from '../components/show/Details';
import Season from '../components/show/Seasons';
import Cast from '../components/show/Cast';
import { InfoBlock, ShowPageWrapper } from './Show.styled';
import { useShows } from '../misc/custome-hooks';

function Show() {
  const { id } = useParams();

  const { show, isLoading, error } = useShows(id);

  if (isLoading) {
    return <div>Data is being Loading</div>;
  }
  if (error) {
    return <div>Error occured:{error}</div>;
  }

  return (
    <ShowPageWrapper>
      <ShowMainData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />

      <InfoBlock>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </InfoBlock>

      <InfoBlock>
        <h2>Season</h2>
        <Season seasons={show._embedded.seasons} />
      </InfoBlock>
      <InfoBlock>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
}

export default Show;
