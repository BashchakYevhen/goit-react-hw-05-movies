import { useState } from 'react';
import { fetch } from 'service/fetch';

export const TrendGallery = () => {
  const [trends, setTrends] = useState(fetch());
  console.log(trends);

  return <>{trends}</>;
};
