function searchSubmit(){
  console.log($("#textinput").val());
  fetch("http://recipepuppyproxy.herokuapp.com/api/?q=")
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log(response.status);
          return;
        }
        response.json().then(function(data) {
          for (let i = 0; i < 10; i++)
          console.log(data.results[i]);
        });
      }
    )
    .catch(function(err) {
      console.log("Fetch Error: ", err);
    });
}
