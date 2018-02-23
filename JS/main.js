$(document).ready(()=> {
  $('#searchForm').on("submit", (e) => {
    let searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();               //stops form from submitting to a file
  });
});

function getMovies(searchText) {
  axios.get('http://www.omdbapi.com/?i=' + searchText + '&apikey=6e954578' )  //?s= is parameter passed in to search
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
}
