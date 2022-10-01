import { useNavigate } from "react-router-dom";

const ArtistCard = ({track}) => {
  const navigate = useNavigate();

  const handleNavigateArtist = () => {
    navigate(`/artists/${track?.artists[0]?.adamid}`)
  }

  return (
    <div className="flex flex-col w-[250px] p-4 
    bg-white/5 bg-opacity-80 backdropbackdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
    onClick={handleNavigateArtist}
    >
      <img alt="artist" src={track?.images?.coverart} className="w-ful h-56 rounded-lg" />
      <p className="text-white text-lg mt-4 font-semibold truncate">{track?.subtitle}</p>
    </div>
  )
};

export default ArtistCard;
