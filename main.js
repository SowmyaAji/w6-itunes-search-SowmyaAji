








$('#search-button').on('click', function (event) {
    let query = $('#search-song').val()
    console.log(query)


    $.getJSON("https://itunes.apple.com/search?", { term: query }, function (results) {
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
     <p><a href="${tunes.previewUrl}">${tunes.trackName}</a> ${tunes.collectionName} ${tunes.collectionViewUrl} ${tunes.artistViewUrl}</p> `
}













