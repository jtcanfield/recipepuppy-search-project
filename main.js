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
          let resultsArray = data.results;
          let parentbody = document.querySelector('body');
          resultsArray.map((i) =>{
            console.log(i);
            let backgroundimg = document.createElement('p');
            backgroundimg.setAttribute("style", "background-image: url("+i.thumbnail+");");
            let spantext = document.createElement('span');
            spantext.innerHTML = i.title + "<br>Ingredients: " + i.ingredients
            parentbody.appendChild(backgroundimg);
            parentbody.appendChild(spantext);
          })
          // for (let i = 0; i < 10; i++){
          //   let result = data.results[i];
          //   let background = document.getElementById('result' +i);
          //   let spanelementid = document.getElementById('resultspan' +i);
          //   spanelementid.innerHTML = result.title + "<br>Ingredients: " + result.ingredients;
          //   background.setAttribute("style", "background-image: url("+result.thumbnail+");");
          //   background.setAttribute("href", result.href);
          // }
        });
      }
    )
    .catch(function(err) {
      console.log("Fetch Error: ", err);
    });
}
