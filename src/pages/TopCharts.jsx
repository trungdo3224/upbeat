import React from 'react';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from "../components";
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopCharts = () => {
    const { isPlaying, activeSong } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetTopChartsQuery();
    if (isFetching && loading) return <Loader title="Loading songs..." />
    if (error && country) return <Error />

    return (
        <div className='flex flex-col'>
            <h1 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
                Top Charts
            </h1>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data?.map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        i={i}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                    />
                ))}
            </div>
        </div>
    )
}

export default TopCharts;
