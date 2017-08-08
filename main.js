function searchSubmit(){
  let usersearch = $("#textinput").val()
  fetch("http://recipepuppyproxy.herokuapp.com/api/?q=" + usersearch)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log(response.status);
          return;
        }
        response.json().then(function(data) {
          for (let i = 0; i < 10; i++){
            console.log(data.results[i].title);
            console.log(data.results[i].ingredients);
            console.log(data.results[i].href);
            let pictoadd = document.getElementById('result' +i);
            pictoadd.setAttribute("style", "background-image: url("+data.results[i].thumbnail+");");
            console.log(data.results[i].thumbnail);
          }
        });
      }
    )
    .catch(function(err) {
      console.log("Fetch Error: ", err);
    });
}
