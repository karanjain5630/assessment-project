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
    let output = '';
      output +=`
      <div class="col-mid-4">
      <div class="well text-center">
         <img src="${response.data.Poster}">
         <h5>${response.data.Title}</h5>
         <h5>${response.data.Year}</h5>
         <a class="btn btn-primary" href="https://www.imdb.com/title/${response.data.imdbID}">Movie Details</a>

       </div>
       </div>
      `;
// "

    $('#movies').html(output);
  })
  .catch((err)=>{
    console.log(err);
  });
}

//Typed.js Effect
var typed = new Typed(".type", {
  strings: ["Movies", "Shows", "Anime"],
  typeSpeed: 150,
  backSpeed: 60,
  loop: true
});


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
