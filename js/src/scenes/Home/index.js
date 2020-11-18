import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      Home
      <br />
      <Link to="/jokes">List</Link>
    </>
  );
}
