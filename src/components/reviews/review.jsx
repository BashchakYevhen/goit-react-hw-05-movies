import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from 'service/fetch';

const Review = () => {
  const { id } = useParams();
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetchReview(id)
      .then(response => {
        console.log(response.data.results);
        setReview(response.data.results);
      })
      .catch(error => console.log(error));
  }, [id]);
  return (
    <ul>
      {review.length > 0 ? (
        review.map(({ id, author, content }) => (
          <li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <p>No rewiews</p>
      )}
    </ul>
  );
};
export default Review;
