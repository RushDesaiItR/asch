import Axios from "axios"
import React,{ useState,createContext, useEffect} from "react"
import axios from "axios"
export const NewsContext = createContext()

export const NewsContextProvider = (props) =>{
    const [news, setNews]=useState([])
    const apiKey = "d03604e934ed4d939aabfb6dc9bc3dff"
    useEffect(() => {
       axios.get(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`)
       .then( (response) => {
       
           setNews(response.data.articles)
   
       })
    }, [news])
    return (
        <NewsContext.Provider value={{ news }}>
           {
               props.children
           }
        </NewsContext.Provider>
    )
}