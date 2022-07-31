import './App.css';
import Banner from './Banner/Banner';
import Header from './Header/Header';
import MovieCard from './TrendingMovies/TrendingMovies';
import TopMovies from './TopMovies/TopMovies';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <MovieCard/>
      <TopMovies/>
      <Footer/>
    </div>
  );
}

export default App;
