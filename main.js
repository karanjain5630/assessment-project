$(document).ready(()=>{
  $('#searchForm').on('submit',(e)=>{
    let searchText=$('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});

function getMovies(searchText){
  axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=2898f5f7&t='+searchText)
  .then((response)=> {
    console.log(response);
    let movies = response.data;
    let output = '';
    $.each(movies,(index,movie)=>{
      output +=`
      <div class="col-mid-4">
      <div class="well text-center">
         <img src="${movies.Poster}">
         <h5>${movies.Title}</h5>
         <h5>${movies.Year}</h5>
         <a onclick="movieSelected('${movies.imdbID}')" class="btn btn-primary" href="https://www.imdb.com/title/${movies.imdbID}">Movie Details</a>

       </div>
       </div>
      `;
// "
    });

    $('#movies').html(output);
  })
  .catch((err)=>{
    consol.log(err);
  });
}

function movieSelected(id){
  sessionStorage.setItem('movieId',id);
  window.location='movie.html';
  return false;
}

function getMoviee()
{
/*  let movieId=sessionStorage.getItem('movieId');
  axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=2898f5f7&t='+searchText)
  .then((response)=> {
    console.log(response);
    let movies=response.data;

    let output=`
        <div class="row">
        <div class="col-mid-4">
          <img src="${movies.Poster}" class="thumbnail">
        </div>
        <div class="col-md-8">
         <h2>${movies.Title}</h2>
         <ul class="list-group-item">
            <li class="list-group-item"><strong>Genre:</strong>${movies.Genre}</li>
            <li class="list-group-item"><strong>Released:</strong>${movies.Released}</li>
            <li class="list-group-item"><strong>Rated:</strong>${movies.Rated}</li>
            <li class="list-group-item"><strong>IMDB Rating:</strong>${movies.imdbRating}</li>
            <li class="list-group-item"><strong>Director:</strong>${movies.Director}</li>
            <li class="list-group-item"><strong>Writer:</strong>${movies.Writer}</li>
            <li class="list-group-item"><strong>Actors:</strong>${movies.Actors}</li>
            </ul>
            </div>
            </div>
            <div class="row">
            <div class="well">
            <h3>Plot</h3>
            ${movies.Plot}
            <hr><a href="http://imdb.com/title.${movies.imdbID}" target="blank" class="btn btn-primary">View IMDB</a>
            <a href="index.html" class="btn btn-default">Go back to search</a>
            </div>
            </div>
    `;
  })
  .catch((err)=>{
    consol.log(err);
  }); */

  axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=2898f5f7&t='+searchText)
  .then((response)=> {
    console.log(response);
    let movies = response.data;
    let output = '';
    $.each(movies,(index,movie)=>{
      output +=`
      <div class="col-md-3">
      <div class="well text-center">
         <img src="${movies.Poster}">
         <h5>${movies.Title}</h5>
         <h5>${movies.Year}</h5>
         <a onclick="movieSelected('${movies.imdbID}')" class="btn btn-primary" href="movie.html">Movie Details</a>

       </div>
       </div>
      `;
  // "https://www.imdb.com/title/${movies.imdbID}
    });

    $('#movies').html(output);
  })
  .catch((err)=>{
    consol.log(err);
  });
}

function fetchData(){
	xhr= new XMLHttpRequest();
	var data;
	xhr.onreadystatechange = function()
	{
   		if (this.readyState == 4 && this.status == 200)
   		{
   			data=JSON.parse(this.responseText);
   			viewData(data);
   		}
   	};
   	xhr.open("GET","https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=3469d3968fd444f2ae49a4cafd341f71");

xhr.send();
}

function viewData(data)
{
	console.log(data);
	for(var i=0;i<data.articles.length;i++)
	{
		$("#news").append(
      `<div class='col-3 mb-5 ml-4 mr-4'>
            <div class="card bg-info text-light" style="width: 18rem;height:35rem">
            <img src=${data.articles[i].urlToImage} class="card-img-top" style="width:18rem;height:15rem">
                    <div class="card-body">
                        <h4>${data.articles[i].title}</h4>
                        <h6 class="card-subtitle">Source : ${data.articles[i].source.name}</h2>
                        <hr>
                        <a href=${data.articles[i].url} class="btn btn-danger">Read Full News</a>
                    </div>
                </div>
            </div>
        </div>
      `)
	}
}
