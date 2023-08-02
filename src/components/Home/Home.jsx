import React from 'react'
import './Home.scss'
import axios from 'axios';
import { useEffect , useState} from 'react';
import { BiPlay } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"

const apiKey = "d79c5d55b09981c7ea356e759370abf3";
const url= "https://api.themoviedb.org/3/movie/";
const imgUrl = "https://image.tmdb.org/t/p/original"
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const TopRated = "top_rated";

//for curly brackets use return else use rounded brackets idiot


const Card = ({img})=>{
  return(
    <img className='card' src={img} alt="A random Pic" />
  )
};


//include [] for arrays wasted an hour on this
const Row = ({title, arr=[]}) => (
    <div className="row">
      <h2>{title}</h2>
      <div className='cards'>
        {arr.map((item,index)=>(
          <Card key={index} img={`${imgUrl}${item.poster_path}`} />
        ))}
    </div>
    </div>
  
)

const Home = () => {

  const [upcomingMovies, setupcomingMovies] = useState([]);
  const [Popular, setPopular] = useState([]);
  const [NowPlaying, setNowPlaying] = useState([]);
  const [topRated, settopRated] = useState([]);

  useEffect(() => {
    
    const fetchUpcoming = async ()=>{
      const {data:{results},} = await axios.get(`${url}${upcoming}?api_key=${apiKey}`);
      setupcomingMovies(results);
    }
    const fetchPopular = async ()=>{
      const {data:{results},} = await axios.get(`${url}${popular}?api_key=${apiKey}`);
      setPopular(results);
      console.log(Popular)
    }
    const fetchNowPlaying = async ()=>{
      const {data:{results},} = await axios.get(`${url}${nowPlaying}?api_key=${apiKey}`);
      setNowPlaying(results);
    }
    const fetchtopRated = async ()=>{
      const {data:{results},} = await axios.get(`${url}${TopRated}?api_key=${apiKey}`);
      settopRated(results);
    }

    fetchUpcoming();
    fetchPopular();
    fetchNowPlaying();
    fetchtopRated();
    // console.log(Popular[0].poster_path)
  })
  

  return (
    <section className='home'>
    <div
                className="banner"
                style={{
                    backgroundImage: Popular[0]
                        ? `url(${`${imgUrl}${Popular[0].poster_path}`})`
                        : "rgb(16, 16, 16)",
                }}
            >
    <div className='header-features'>
    {Popular[0] && <h1>{(Popular[0].original_title)}</h1>}
    {Popular[0] && <p>{Popular[0].overview}</p>}
                    <button><BiPlay /> Play  </button>
                    <button>My List <AiOutlinePlus /> </button>
                </div>
    </div>
        <Row title={"Upcoming Movies on NetFlix"} arr={upcomingMovies}/>
        <Row title={"Popular Movies on NetFlix"} arr={Popular}/>
        <Row title={"Toprated Movies on NetFlix"} arr={topRated}/>
        <Row title={"Now Playing on NetFlix"} arr={NowPlaying}/>
    </section>
  )
}

export default Home