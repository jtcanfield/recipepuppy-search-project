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
            spanelementid.innerHTML = result.title + "<br>Ingredients: " + result.ingredients;
            background.setAttribute("style", "background-image: url("+result.thumbnail+");");
            background.setAttribute("href", result.href);
          }
        });
      }
    )
    .catch(function(err) {
      console.log("Fetch Error: ", err);
    });
}
/* MAP? MAYBE? I DONT EVEN KNOW
          let results = data.results;
          function createProfile() {
              return results.map(function() {
                    let result = data.results;
                    let background = document.getElementById('result');
                    let spanelementid = document.getElementById('resultspan');
                    spanelementid.innerHTML = result.title + "<br>Ingredients: " + result.ingredients;
                    background.setAttribute("style", "background-image: url("+result.thumbnail+");");
                    background.setAttribute("href", result.href);

                  }
                  )
              ;
          }
          let pageContent = createProfile(results);
          document.body.innerHTML = pageContent;
/*
