const URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=933c2ce6fb1973f85d50b89eab3b3cf1&format=json'
// const URL = 'http://www.terraquimbaya.com/api/home'

// , {
//   headers: {
//     'Accept': 'application/json'
//   }
// }

function getArtist() {
  return fetch(URL).then(response => response.json())
  .then(data => data.topartists.artist)
  .then(artists => artists.map(artist => ({
      id: artist.mbid,
      name: artist.name,
      // idPublicacion: artist.idPublicacion,
      image: artist.image[3]['#text'],
      likes: 200,
      comments: 140
    })))
}

export { getArtist }
