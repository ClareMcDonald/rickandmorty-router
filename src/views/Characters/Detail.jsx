import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


export default function Detail() {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetchCharacter() {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

      const characterInfo = await res.json();
      setCharacter(characterInfo);
      setLoading(false);
    };
    fetchCharacter();

  }, []);

  return (
    <div>Detail</div>
  )
}
