import React from 'react'
import axios from 'axios'

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers : {
      Authorization: 'Client-ID 1fqpA7tfEKjy18o-pf6NKD1_w6oO6mYKGNkxVvqmRCA'
    },
    params : {
      query: term,
    }
  });

  return response.data.results;
};

export default searchImages;