import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import {ArtistCard, Loader, Error} from "../components";

const TopArtists = () => {
    const { data, isFetching, error } = useGetTopChartsQuery();
    if (isFetching && loading) return <Loader title="Loading songs..." />
    if (error && country) return <Error />

    return (
        <div className='flex flex-col'>
            <h1 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
                Top Artists
            </h1>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data.map((track, i) => (
                    <ArtistCard
                        key={track.key}
                        track={track}
                    />
                ))}
            </div>
        </div>
    )
}

export default TopArtists;
