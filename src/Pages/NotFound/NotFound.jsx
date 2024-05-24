import { Link } from "react-router-dom";
import { appRoutes } from "../../App";

export default function NotFound() {
  return (
    <div>
      <h1>Страница не найдена! Ошибка 404</h1>
      <Link to={appRoutes.MAIN}>Вернуться на главную</Link>
    </div>
  );
}
