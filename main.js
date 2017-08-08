fetch("http://www.recipepuppy.com/api/")
  .then(\
    function(response) {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {
        console.log("Here is the data:", data);
      });
    }
  )
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });
function searchSubmit(){
  console.log($("#textinput").val());
}
