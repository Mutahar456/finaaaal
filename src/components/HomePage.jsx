import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories,setError } from '../Store/Slices/slice';
import { Link } from 'react-router-dom';

function HomePage() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    fetch('https://emojihub.yurace.pro/api/all')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch.');
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setCategories(data));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });
  }, [dispatch]);

  return (
    <div>
  <h1>Emoji Metrics</h1>
  {categories.length === 0 ? (
    <p>Loading...</p>
  ) : (
    categories.map((category) => (
      <div key={category.id}>
        <Link to={`/details/${category.id}`}>
          {category.name} - {category.metric}
        </Link>
      </div>
    ))
  )}
</div>

  );
}

export default HomePage;
