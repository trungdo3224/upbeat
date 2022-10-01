import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const dispatch = useDispatch();
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const {data: artistData, isFetching: isFetchingArtistDetails, error} = useGetArtistDetailsQuery(artistId)

  if (error) return <Error />
  if (isFetchingArtistDetails) return <Loader title="Searching artist details..." />
  return (
    <div>
      <DetailsHeader artistId={artistId} artistData={artistData} />

      <RelatedSongs
      key={artistData?.key}
        data={Object.values(artistData?.songs)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />

    </div>
  )
}

export default ArtistDetails;
