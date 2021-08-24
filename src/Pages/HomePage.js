import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import "../styles/homepageStyle.css";
import { useEffect, useState } from "react";

function HomePage(){
    const [galleryGifs, setGalleryGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [input, setInput] = useState("");
    const [selection, setSelection] = useState("all");
    const [hover, setHover] = useState("");
    //localStorage.removeItem('favs');

    
    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?limit=20&api_key=dCGrnKPTBrjaXvCsR4QGoY1qRVxg3Qij&q=${encodeURI(selection)}`)
        .then((response)=>{
            return(response.json())
        })
        .then((data)=>{
            setIsLoading(false);
            let obj = [...data.data];
            setGalleryGifs(obj);
        })
      }, [selection]);
      if (isLoading) {
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <CircularProgress color="secondary" />
          </div>
        );
      }
    


    return <div>
        <div className="search">
            <TextField id="outlined-basic" label="Search Gifs" variant="outlined" value={input}
            onChange={(event)=>{
                setInput(event.target.value);
            }} />
            <Button variant="contained" color="primary" href="#contained-buttons" onClick={()=>{
                setSelection(input);
                setIsLoading(true);
            }}>
                Search
            </Button>
            
            
        </div>

        <div className="gallery" >
            
            {galleryGifs.map((gif, index)=>{
                return(<div key={index} className="gal" onMouseOver={(e)=>{
                  
                  setHover(index);
                }}>
                <img src={gif.images.original.url} alt="gif" style={{height:'15vw', width:'15vw'}}/>
                    {hover === index ? <div className="addToFav">

                        <button onClick={(e)=>{
                          let favs = localStorage.getItem('favs');

                          if(favs){
                            favs = JSON.parse(favs);
                            if(favs.filter((fav)=>{
                                return fav.id === gif.id;
                            }).length === 0){
                              favs = [...favs, gif];
                              localStorage.setItem('favs',JSON.stringify(favs));
                            }
                          }
                          else{
                            favs = [gif];
                            localStorage.setItem('favs',JSON.stringify(favs));
                          }

                          console.log(favs);
                        }}>Add to favourite</button>

                      </div> : <div></div>}
                </div>)
            })}
        </div>

    </div>
}
export default HomePage;