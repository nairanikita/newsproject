
import './App.css';
import React,{useEffect,useState}from "react";
import News from './news';
const App=()=>{
const APIkey="2334e3adad3c48708c5780e4a4e31cf7";


const [newsdata,setnews]=useState([]);
const [search,setsearch]=useState("");
const [query,setquery]=useState('');
const [time,settime]=useState('2021-02-20');
const [querytime,setquerytime]=useState('');
const [filter,setfilter]=useState('');

const getindia=async()=>{
  
  const response =await fetch(`http://newsapi.org/v2/top-headlines?country=in&apiKey=${APIkey}`);
  const dataindia=await response.json();
  console.log(dataindia.articles);
  setnews(dataindia.articles);
  } 
 const [headline,sethead]=useState("In India");
useEffect(()=>{
  if(query=='')
  {
  
    getindia();
  }
  else{
  getnews();
  }
},[query]);

const getnews=async()=>{
 
  sethead("about "+ query);
  
const response =await fetch(`http://newsapi.org/v2/everything?q=${query}+${filter}&from=${querytime}&sortBy=${newsdata.title}&apiKey=${APIkey}`);
const data=await response.json();
console.log(data.articles);
setnews(data.articles);

//console.log({t});

} 
const update=e=>{
  setsearch(e.target.value);
  console.log({search});
}
const getsearch=e=>{
  e.preventDefault();
  setquery(search);
  setquerytime(time);
  
  setsearch('');

}
const updatetime=e=>{
  e.preventDefault();
  settime(e.target.value);
  
}
const updatefilter=e=>{
  e.preventDefault();

const val=e.target.value;
  
  setfilter(e.target.value);
  console.log({filter});
}
  return (
    <div className="main">
<form className="form" onSubmit={getsearch}>
  <input className="inputbutton" type="text"  value={search} onChange={update}></input>
  <input className="inputbutton" type="date" value={time}   onChange={updatetime}></input>
  <select className="inputbutton" onChange={updatefilter}>
    <option value="all">all </option>
    <option value="food">food </option>
    <option value="technology">technology </option>
    <option value="business">business </option>
  </select>
  <button className="submit" type="submit">
    Search
  </button>
</form>
<br/>
<h1 className="heading">Top news {headline}</h1>
<div className="Display">
  {newsdata.map(para=>(
<News  title={para.title}
image={para.urlToImage}
content={para.content}
url={para.url}/>
))}

</div>
    </div>
  );
}

export default App;
