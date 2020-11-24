'use strict';

var myHeaders = new Headers();
const searchURL = "https://api.github.com/users/"

function formatQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    return queryItems.join('&');
}

function getRepos(userName) {
  /*const params = {
    description:"desc",
    sort:"created"
  };
  */
  const url = `https://api.github.com/users/${userName}/repos`
  
fetch(url)
    .then(response => response.json())
    .then(responseJson => displayRepos(responseJson) )
  
  /*const queryString = formatQueryParams(params)*/
  /*const URL = searchURL + userName + '/repos' + '?' + queryString*/

}

function displayRepos(responseJson) {
  /*console.log(responseJson);*/
  responseJson.forEach(item => {
   var resultsHTML =  `<li><a target = "_blank" href="${item.svn_url}">${item.name} </a></li>`
    $('#results').append(resultsHTML)
    console.log(item.svn_url)
  })
}


function watchForm() {
    $('form').on('submit', function (event) {
        event.preventDefault();
        var userName = $('#username').val();
        $('#username').val('');
       $('#results').empty();
      
        getRepos(userName)
    });
}



function render() {
  $(watchForm)
}
$(render)