import "../styles/homepageStyle.css";
import {useState} from "react";

function Favorite(){
    const [isfav, setFav] = useState(true);
    const favs = localStorage.getItem('favs');
    console.log(isfav);

    return(
        <div>
            {favs ? 
                <div>
                    <div className="clear">
                        <h1 style={{textAlign:'center'}}>Favorite Items</h1>
                        <button onClick={() =>{
                            localStorage.removeItem('favs');
                            setFav(false);
                        }}>Clear</button>
                    </div>

                    <div className="gallery">

                        {JSON.parse(favs).map((fav, index)=>{

                            return(<div key={index} className="gal">
                                    <img src={fav.images.original.url} alt="gif" style={{height:'15vw', width:'15vw'}}/>
                                </div>
                                
                            )}
                        )} 
                    </div>
                </div>
                :
                <h1 style={{textAlign:'center', color:'red'}}>NO  ITEM  IN  FAVORITE</h1>
            }
        </div>
    );
}
export default Favorite;