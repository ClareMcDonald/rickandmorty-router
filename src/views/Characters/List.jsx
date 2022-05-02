import { Link, useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function List() {
    const history = useHistory();
    const location = useLocation();
    const status = new URLSearchParams(location.search).get('status') ?? 'all';
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

    }, []);

  return (
    <div>List</div>
  )
}
