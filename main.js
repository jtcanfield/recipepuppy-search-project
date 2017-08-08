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
            let pelementid = document.getElementById('result' +i);
            pelementid.innerHTML = result.title + "\nIngredients: " + result.ingredients;
            console.log(result.ingredients);
            console.log(result.href);

            pelementid.setAttribute("style", "background-image: url("+result.thumbnail+");");
          }
        });
      }
    )
    .catch(function(err) {
      console.log("Fetch Error: ", err);
    });
}
