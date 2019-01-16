var h1 = document.querySelector('h1'),
    btn = document.querySelector('.btn'),
    next = document.querySelector('.next'),
    sentencesContainer = document.querySelector('.story__paragraph'),
    paragraphContainer = document.querySelector('.story__gradient'),
    typing = document.querySelector('.search-type p').textContent;

function showParagraph(num) {
    var featuredSentence = sentencesContainer.lastChild, // get last child/parapgraph from sentence container
        lastChild = sentencesContainer.lastChild,
		paragraphs = document.querySelectorAll('.paragraph__sentence');
    	paragraphContainer.classList.add('hidden');
}

function prevSentence() {

    var paragraphs = document.querySelectorAll('.paragraph__sentence'),
        paragraphActive = document.querySelector('.sentence--active'),
        current = paragraphs[0],
        lastChild = paragraphs[3];

    if (paragraphActive.classList.contains('show')) {
        lastChild.classList.remove('sentence--active', 'show');
        sentencesContainer.insertBefore(lastChild, current); // new, reference element
    } else {
        paragraphs[3].classList.add('sentence--active', 'show');
    }
}

function nextSentence() {

    var paragraphs = document.querySelectorAll('.paragraph__sentence'),
        paragraphActive = document.querySelector('.sentence--active'),
        current = paragraphs[0];

    if (paragraphActive.classList.contains('show')) {
        // if () {

        // } else {
            paragraphActive.classList.remove('sentence--active', 'show');
            sentencesContainer.appendChild(current);
        // }
    } else {
        paragraphs[0].classList.add('sentence--active', 'show');
        showParagraph(currentParagraph);
    }
}

next.addEventListener('click', nextSentence);

var myFullpage = new fullpage('#stories', {
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
	sectionsColor: ['#fff', '#fafafa', '#323539'],
    scrollOverflow: true
});