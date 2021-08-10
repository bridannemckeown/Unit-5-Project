
const searchFilter = () => {
    const search = document.getElementById('search').value.toLowerCase();
    const caption = document.getElementsByTagName('a');
    for (i = 0; i < caption.length; i++) {
        const text = caption[i].getAttribute('data-caption').toLowerCase();
        if (!text.includes(search)) {
            caption[i].style.display = "none";
        } else {
            caption[i].style.display = "block";
        }
    }
}


// const search = document.querySelector('#search');
// const captions = document.querySelectorAll('[data-caption]');

// const searchBar = event => {
//     const searchTerm = event.target.value.toLowerCase();
//     captions.forEach(captions => {
//         const text = captions.textContent.toLowerCase();
//         const imageLink = captions.parentElement;
//         if(text.includes(searchTerm)) {
//             imageLink.style.display = "block";
//         } else {
//             imageLink.style.display = "none";
//         }
//     });
// }

// search.addEventListener('keyup', searchBar);

baguetteBox.run('.gallery');
