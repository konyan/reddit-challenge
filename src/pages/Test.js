import React, { useState, useEffect } from 'react';

const RedditSubreddit = () => {
  const [posts, setPosts] = useState([]);
  const [after, setAfter] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);

      const baseUrl = 'https://www.reddit.com/r/programming/new.json';
      const params = new URLSearchParams({
        limit: 10, // Number of posts per page
        after: after,
      });

      const response = await fetch(`${baseUrl}?${params.toString()}`, {
        headers: {
          'User-Agent': 'YourApp/1.0.0 (https://yourapp.com)',
        },
      });

      if (!response.ok) {
        throw new Error(`Reddit API error! Status: ${response.status}`);
      }

      const data = await response.json();
      setPosts(prevPosts => [...prevPosts, ...data.data.children]);
      setAfter(data.data.after);
    } catch (error) {
      console.error('Error fetching subreddit page:', error.message);
    } finally {
      setLoading(false);
    }
  };
    
  useEffect(() => {
    fetchData();
  }, []); // Only re-run the effect when 'after' changes

  const loadMore = () => {
    fetchData();
  };

  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.data.id}>{post.data.title}</li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
      {after && !loading && (
        <button onClick={loadMore} disabled={loading}>
          Load More
        </button>
      )}
    </div>
  );
};

export default RedditSubreddit;
