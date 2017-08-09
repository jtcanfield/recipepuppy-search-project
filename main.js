var input = document.getElementById("textinput");
input.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {searchSubmit();}
});
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
          let parentbody = document.querySelector('#searchappender');
          parentbody.innerHTML = "";
          resultsArray.map((i) =>{
            console.log(i);
            let parentDiv = document.createElement('div');
            parentbody.appendChild(parentDiv);
            let backgroundimg = document.createElement('p');
            if (i.thumbnail !== ""){
              backgroundimg.setAttribute("style", "background-image: url("+i.thumbnail+");");
            }
            let spantext = document.createElement('a');
            spantext.innerHTML = i.title + "<br>Ingredients: " + i.ingredients + "<br><br><br>";
            spantext.setAttribute("href", i.href);
            parentDiv.appendChild(backgroundimg);
            parentDiv.appendChild(spantext);
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



//BELOW IS USED FOR PROMISE TESTINGs
let testBoolean = false;
function executor( resolve, reject ){
    let respond = function(){
        resolve( 1 );
        reject(" totally failed ");
    };
    // setTimeout(respond, 100 );
    respond();
}
function success( successMessage ){
  console.log( successMessage );
}

function failure( failureMessage){
  console.log( "it failed" );
  console.log( failureMessage );
}
//create the promise
let myPromise = new Promise( executor );
// Add a callback function
// to take the message from resolve
function promiseTest(){
  // console.log(myPromise);
  myPromise.then( success );
  // myPromise.then(failureMessage);
  myPromise.catch( failure );
}
