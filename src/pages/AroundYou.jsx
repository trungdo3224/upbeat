import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { Error, Loader, SongCard } from "../components";
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

const AroundYou = () => {
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);
    const { isPlaying, activeSong } = useSelector((state) => state.player);

    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_OBv9uqXPvy52bKPLWWEHL1IWmtQfe`)
            .then((res) => setCountry(res?.data?.location?.country))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [country])
    const { data, isFetching, error } = useGetSongsByCountryQuery("DE");
    if (isFetching && loading) return <Loader title="Loading songs..." />
    if (error && country) return <Error />

    return (
        <div className='flex flex-col'>
            <h1 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
                Around You
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

export default AroundYou;
