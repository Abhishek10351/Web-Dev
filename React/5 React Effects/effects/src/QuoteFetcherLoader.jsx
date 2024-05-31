import { useState, useEffect } from "react";

const quote_url = "https://api.quotable.io/random";
export default function QuoteFetcherLoader() {
    const [quote, setQuote] = useState({});
    const [loading, setLoading] = useState(true);
    async function fetchQuote() {
        const response = await fetch(quote_url);
        const data = await response.json();
        setQuote(data);
        setLoading(false);
    }
    useEffect(() => {
        fetchQuote();
    }, []);
    return (
        <div>
            <h1>Quote Fetcher</h1>
            <button onClick={fetchQuote}>CLick for a quote</button>
            <p className="loader" style={{ opacity: loading?1:0 }}></p>
            {quote && <blockquote>{quote.content}</blockquote>}
            {quote && <footer style={{ color: "cyan" }}>{quote.author}</footer>}
        </div>
    );
}
