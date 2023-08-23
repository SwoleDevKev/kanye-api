document.querySelector('button').addEventListener('click', getQuote)

function getQuote () {
    fetch(`https://api.kanye.rest`)
.then(res => res.json())
.then(data => {
    console.log(data)
    document.querySelector('p').innerText = data.quote+'\n \n -Kanye West'
})
}

