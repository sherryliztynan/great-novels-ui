import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [novels, setNovels] = useState([])
  useEffect(() => {
      fetchNovels()
  }, [])
  
  const fetchNovels = async() => {
       const { data }  = await Axios.get('http://localhost:1337/api/novels')
       setNovels(data)
};

  return (
    <div className="content">
    <div className="title">Great Novels</div>
    <input
        className="searchBox"
        type="text"
        name="search"
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
    />
    {
       novels.filter(novels => novels.title.toLowerCase().includes(searchTerm.toLowerCase())).map(novel => {
          return (<h1 key={novel.id}>{novel.title} by {novel.author.firstName} {novel.author.lastName}</h1>)
       })
    }
    </div>
)
}
export default Search