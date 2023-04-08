import React from 'react'
import Search from '../Search'
import { link } from 'fs'

type SearchResultProps = {
    params: {
        query: string
    }
}

type SearchResult = {
    organic_results: {
        position: number
        title: string
        link: string
        thumbnail: string
        snippet: string
    }[]
}

const search = async (query: string) => {
    const res = await fetch("https://serpapi.com/search.json?q=${query}&api_key=${process.env.API_KEY}")
    const data = await res.json()

    return data
}

async function SearchResult({ params: { query } }: SearchResultProps) {
    const results: SearchResult = await search(query)
    return (
        <div>
            <p className="text-gray-500 text-sm">You searched for: {query}</p>

            <ol className='space-y-5 p-5'>
                {results.organic_results.map(res => (<li key={res.position} className='list-decimal'>
                    <p className='font-bold'>{res.title}</p>
                    <p>{res.snippet}</p>
                </li>))}
            </ol>
        </div>
    )
}

export default SearchResult 