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
            let result = data.results[i];
            let background = document.getElementById('result' +i);
            let spanelementid = document.getElementById('resultspan' +i);
            spanelementid.innerHTML = result.title + "\nIngredients: " + result.ingredients;
            console.log(result.href);
            background.setAttribute("style", "background-image: url("+result.thumbnail+");");
          }
        });
      }
    )
    .catch(function(err) {
      console.log("Fetch Error: ", err);
    });
}
