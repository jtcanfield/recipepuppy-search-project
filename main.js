fetch("http://recipepuppyproxy.herokuapp.com/api/?q=", {mode: 'cors'})
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {
        console.log(data);
      });
    }
  )
  .catch(function(err) {
    console.log("Fetch Error: ", err);
  });
function searchSubmit(){
  console.log($("#textinput").val());
}
