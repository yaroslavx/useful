import React from 'react'
import Search from '../Search'

type SearchResultProps = {
    params: {
        query: string
    }
}

const search = async (query: string) => {
    const res = await fetch("https://serpapi.com/search.json?q=${query}&api_key=${process.env.API_KEY}")
    const data = await res.json()

    return data
}

async function SearchResult({ params: { query } }: SearchResultProps) {
    const res = await search(query)
    return (
        <div>SearchResult</div>
    )
}

export default SearchResult 