var next = document.querySelector('.next'),
    sentencesContainer = document.querySelector('.story__paragraph'),
    typing = document.querySelector('.search-type p').textContent;

function nextSentence() {

    var paragraphs = document.querySelectorAll('.paragraph__sentence'),
        paragraphActive = document.querySelector('.sentence--active'),
        current = paragraphs[0];

    if (paragraphActive.classList.contains('show')) {
        if (paragraphActive.classList.contains('sentence--last')) {
            fullpage_api.moveTo('secondPage');
        } else {
            paragraphActive.classList.remove('sentence--active', 'show');
            sentencesContainer.appendChild(current);
        }
    } else {
        current.classList.add('sentence--active', 'show');
        showParagraph(currentParagraph);
    }
}

next.addEventListener('click', nextSentence);

var myFullpage = new fullpage('#stories', {
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
    sectionsColor: ['#fff', '#fafafa'],
    scrollOverflow: true
});