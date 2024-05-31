import { useState, useEffect } from "react";

const quote_url = "https://api.quotable.io/random";
export default function QuoteFetcher() {
    const [quote, setQuote] = useState({});
    async function fetchQuote() {
        const response = await fetch(quote_url);
        const data = await response.json();
        setQuote(data);
    }
    useEffect(() => {
        fetchQuote();
    }, []);
    return (
        <div>
            <h1>Quote Fetcher</h1>
            <button onClick={fetchQuote}>CLick for a quote</button>
            {quote && <blockquote>{quote.content}</blockquote>}
            {quote && <footer style={{ color: "cyan" }}>{quote.author}</footer>}
        </div>
    );
}
