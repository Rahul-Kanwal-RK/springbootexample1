import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function IdComponent() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://springbootapp1.us-east-1.elasticbeanstalk.com/user?id${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return <div>No data found</div>;

  return (
    <div>
      <h2>Data for ID: {id}</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default IdComponent;
