import { useEffect, useState } from "react";
import "./App.css";
import { Auth } from "./components/Auth";
import { db } from "./config/firebase-config";
import { getDocs, collection, addDoc } from "firebase/firestore";

function App() {
  const [movieList, setMovieList] = useState([]);
  const moviesCollectionRef = collection(db, "movies");

  //new movie stataes
  const [newMovTitle, setNewMovTitle] = useState("");
  const [newMovRel, setNewMovRel] = useState(0);
  const [newMovRating, setNewMovRating] = useState(0);


  const getMovieList = async () => {
    const data = await getDocs(moviesCollectionRef);
    const filtered = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setMovieList(filtered);
  };

  useEffect(() => {
    
    getMovieList();
  }, []);

  const onSubmitMovie = async () => {
    await addDoc(moviesCollectionRef, {
      title: newMovTitle,
      release: newMovRel,
      ratings: newMovRating,
    });
    getMovieList();

  };

  return (
    <div className="App">
      <Auth />

      <div>
        <input
          onChange={(e) => setNewMovTitle(e.target.value)}
          placeholder="mov title..."
        />
        <input
          onChange={(e) => setNewMovRel(Number(e.target.value))}
          type="number"
          placeholder="mov release..."
        />
        <input
          onChange={(e) => setNewMovRating(Number(e.target.value))}
          type="number"
          placeholder="mov ratings..."
        />
        <button onClick={onSubmitMovie}> Submit movie</button>
      </div>

      <div>
        {movieList.map((movie) => (
          <div>
            <h1> {movie.title}</h1>
            <p>Date:{movie.release}</p>
            <p>ratings: {movie.ratings}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
