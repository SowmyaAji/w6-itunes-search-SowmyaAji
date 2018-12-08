








$('#search-button').on('click', function (event) {
    let query = $('#search-song').val()
    console.log(query)


    $.getJSON("https://itunes.apple.com/search?", { media: 'music', term: query }, function (results) {
        console.log(results)

        let resultsOnPage = $('#search-results')
        resultsOnPage
            .empty()
            .append(
                $('<p>')

                    .append(results.results.map(tunesHtml)))

    })
})


function tunesHtml(tunes) {
    return `
     <p class="title"><a href="${tunes.previewUrl}" class="result-link">${tunes.trackName}</a></p><img src="${tunes.artworkUrl100}"></p>
     <p class"Album"> ${tunes.collectionName}></p>
     <p class="singer"> ${tunes.artistName}</p>
    <p class="singersite">${tunes.artistViewUrl}></p> `
}

// $('#play').on('click', function (event) {
//     console.log(event)
//     $(event.currentTarget).attr("src", tunes.previewUrl);
// })




document.getElementById('musicbox').addEventListener("click", function (event) {
    if (event.target.classList.contains('results-link')) {
        console.log(event.target.href)
        event.preventDefault()
        var clickedItem = event.target.id;
        document.getElementById('play').src = event.target.href;



    }
})











