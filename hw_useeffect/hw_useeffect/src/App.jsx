import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
import "./App.css";

const movies = [
  {
    id: "1",
    title: "Интерстеллар",
    description:
      "Эпическая история о космических путешествиях и тайнах вселенной.",
  },
  {
    id: "2",
    title: "Начало",
    description: "Фильм о путешествиях в глубины подсознания через мир снов.",
  },
  {
    id: "3",
    title: "Темный рыцарь",
    description: "Бэтмен против Джокера в напряженной битве за Готэм.",
  },
  {
    id: "4",
    title: "Матрица",
    description: "Фантастическая история о борьбе людей с системами контроля.",
  },
  {
    id: "5",
    title: "Гарри Поттер",
    description: "Приключения юного волшебника в мире магии и чудес.",
  },
];

const MoviesList = () => {
  return (
    <div className="container">
      <h1 className="title">Галерея фильмов</h1>
      <ul className="list">
        {movies.map((movie) => (
          <li key={movie.id} className="listItem">
            <Link to={`/movie/${movie.id}`} className="link">
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return (
      <div className="container">
        <h2 className="title">Фильм не найден</h2>
        <button className="button" onClick={() => navigate(-1)}>
          Назад
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">{movie.title}</h1>
      <p>{movie.description}</p>
      <button className="button" onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  );
};

const NotFound = () => {
  return (
    <div className="container">
      <h1 className="title">Ошибка 404</h1>
      <p>Страница не найдена.</p>
      <Link to="/" className="link">
        Вернуться на главную
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
