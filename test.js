const axios = require('axios');

async function fetchData() {
  try {
    const data = await axios.get('http://localhost:5000/api/LKJHGFDS789T01HML');

  } catch (error) {
    console.error('Error fetching data:', error.response.data.model);
  }
}

fetchData();