

const form = document.querySelector("form");
const tweetContainer = document.querySelector("#tweets");
const username = form.elements.username;
const tweet = form.elements.tweet;

const addTweet = (username, tweet) => {
    const li = document.createElement("li");
    const bTag = document.createElement("b");

    bTag.append(username);
    li.append(bTag);
    li.append(` - ${tweet}`);
    tweetContainer.append(li);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (username.value && tweet.value) {
        addTweet(username.value, tweet.value);
        tweet.value = "";
    }
}
);