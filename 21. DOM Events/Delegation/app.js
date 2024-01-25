

const form = document.querySelector("form");
const tweetsContainer = document.querySelector("#tweets");
const tweet = form.elements.tweet;

const addTweet = (username, tweet) => {
    const li = document.createElement("li");
    const bTag = document.createElement("b");

    bTag.append(username);
    li.append(bTag);
    li.append(` - ${tweet}`);
    tweetsContainer.append(li);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (username.value && tweet.value) {
        addTweet(username.value, tweet.value);
        tweet.value = "";
    }
}
);
// - event delegation refers to performing actions on the children of the select object rather than the object itself
tweetsContainer.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove();
})
