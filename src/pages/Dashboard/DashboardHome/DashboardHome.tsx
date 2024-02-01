import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../state/store";
import { useEffect } from "react";
import { Movie, getMovies } from "../../../state/slices/moviesSlice";

const DashboardHome: React.FC = () => {
    const { data: movies, status } = useSelector((state: RootState) => state.movies);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    return (
        <div className="py-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {movies.map((m: Movie) => (
                    <div className="bg-white rounded overflow-hidden shadow-md">
                        <img src={m.Poster} alt={m.Title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{m.Title}</h2>
                            <p className="text-gray-600">{m.Runtime}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardHome;
