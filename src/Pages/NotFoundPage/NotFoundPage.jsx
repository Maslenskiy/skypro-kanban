import { Link } from 'react-router-dom';
import { Wrapper } from '../../global.styled';
import { paths } from '../../routesPath';

export const NotFoundPage = () => {
  return (
    <Wrapper>
      <h1>404</h1>
      <h2>Not found</h2>
      <button>
        <Link to={paths.MAIN}>Прейти на главную</Link>
      </button>
    </Wrapper>
  );
};
