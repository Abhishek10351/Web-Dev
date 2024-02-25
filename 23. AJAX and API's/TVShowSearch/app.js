const form = document.querySelector('#searchForm');
const imageContainer = document.querySelector('.image-container');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    if (searchTerm === '') {
        return;
    }
    const config = { params: { q: searchTerm } }

    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    form.elements.query.value = '';
})

const makeImages = (shows) => {

    imageContainer.innerHTML = '';
    for (let result of shows) {
        if (result.show.image) {
            let img = document.createElement('IMG');
            img.src = result.show.image.medium;
            imageContainer.append(img)
        }
    }
}

// https://www.tvmaze.com/api