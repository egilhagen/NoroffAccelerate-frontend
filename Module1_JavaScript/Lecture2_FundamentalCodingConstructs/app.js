fetch('https://jokeapi.dev/')
.then(jokeResponse=>{
    return jokeResponse.json()
})
.then(jokedJson=>{
    console.log(jokedJson)
})