import { useState } from "react";
import {v4 as uuid} from "uuid";
const getRandomEmoji = () => {
    const emojis = ["😀", "😂", "😎", "😍", "😜", "😡", "😱"];
    const randIndex = Math.floor(Math.random() * emojis.length - 1) + 1;
    return emojis[randIndex];
};

export default function EmojiClicker() {
    const [emojiList, setEmojis] = useState([{ id: uuid(), emoji: "😀" }]);
    const changeEmoji = () => {
        setEmojis((oldEmojiList) => [...oldEmojiList, { id: uuid(), emoji: getRandomEmoji()}]);
    };
    const removeEmoji = (id) => {
        setEmojis(oldEmojiList => oldEmojiList.filter(emoji => emoji.id !== id));
    };
    const makeHearts = () => {
        setEmojis(oldEmojiList => oldEmojiList.map(
            (item) => ({...item, emoji: "💖" })
        ))
    };
    return (
        <>
            <div>
                {emojiList.map((e) => (
                    <span key={e.id} onClick={() => {
                        removeEmoji(e.id);
                    }} style={{ fontSize: "24px" }}>{e.emoji}</span>
                ))}
            </div>
            <button onClick={changeEmoji}>Change Emoji</button>
            <button onClick={makeHearts}>Make all hearts</button>
        </>
    );
}
