export default async function googleNews() {
  const url = 'https://google-news13.p.rapidapi.com/business?lr=en-US'
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '7146563cc9mshe682c3a14228746p1a662fjsnb1baf3502ff3',
      'x-rapidapi-host': 'google-news13.p.rapidapi.com',
    },
  }

  try {
    const response = await fetch(url, options)
    const result = await response.text()
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}
