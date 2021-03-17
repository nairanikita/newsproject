import React from 'react';
import './App';
const News=({title,image,content,url})=>{
    return(
<div className="news">
    <span><h1>{title}</h1></span>
    <img className="Imag" src={image}></img>
    <p>{content} <a href={url}>Read More</a></p>
   
</div>
    );
}
export default News;