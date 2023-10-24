import React,{useState} from "react";
import items from "./Items";

console.log(items[0].image)
function Display(){
    let [card,setCard] = useState(items);
    let [showmore,setShowmore] = useState(false);
    let [reload,setReload] = useState(false);
    let [isEmpty,setEmpty] = useState(false);
    function handleShowmore(){
        console.log(showmore)
        if(showmore === false){
            setShowmore(true);
            setCard(card.slice(0,3));
        }
        else{
            setShowmore(false);
            setCard(items)
        }
    }
    function handleDelete(index){
        const updated = card.filter((item,i) => i !== index)
        setCard(updated)
        console.log(card.length)
        if(card.length <= 1){
            setEmpty(true);
        }
    }
    function handleRefesh(){
        if(card.length === 0 && reload === false){
            window.location.reload();
            setReload(true);
        }
        else{
            setReload(true);
        }
    }

    return (
        <div className="tour-list">
            <h1 className="title">Tours</h1>
            <button id="tour-item-para-rec6d6T3q5EBIdCfD" onClick={handleShowmore} className="show-more">Show more/See less</button>
            <button onClick={handleRefesh} className="btn">Refresh</button>
            {
                 reload ? (
                    <p>Loading...</p>
                 ):
                 (
                   !isEmpty ? ( card.map((item,index) =>{
                        return (
                            <div className="single-tour">
                                <img src={item.image}></img>
                                <p>{item.name}</p>
                                <p className="tour-info">{item.info}</p>
                                <p className="tour-price">{item.price}</p>
                                <button id="delete-btn-rec6d6T3q5EBIdCfD" onClick={()=>{
                                    handleDelete(index)
                                }} className="delete-btn">Delete</button>
                            </div>
                        )
                    })
                   ):
                   (
                    <p>No more tours</p>
                   )
                    
                 )
                
            }
        </div>
    )
}
export default Display;