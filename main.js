








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
    <div data-url="${tunes.previewUrl}">
     <p class="title"><a href="${tunes.previewUrl}" class="results-link">${tunes.trackName}</a></p>
    <p> <img src="${tunes.artworkUrl100}"></p>
     <p class"Album"> ${tunes.collectionName}></p>
     <p class="singer"> ${tunes.artistName}</p>
    <p class="singersite">${tunes.artistViewUrl}></p>
    </div> `
}

// $('#play').on('click', function (event) {
//     console.log(event)
//     $(event.currentTarget).attr("src", tunes.previewUrl);
// })



document.getElementById('musicbox').addEventListener("click", function (event) {
    let dataUrl = $(event.target).parents("div")[0].dataset["url"];
    if (dataUrl) {
        event.preventDefault()
        document.getElementById('play').src = dataUrl;
        document.getElementById('play').play()

    }
})











