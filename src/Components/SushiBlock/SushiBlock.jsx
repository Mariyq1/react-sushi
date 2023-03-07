import React, { useState } from "react";


function SushiBlock ({title, price,imageURL,size,types}){
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize]=useState(0);
    const typeNames = ['normal' , 'spicy']
    return(
        <div className="sushi-block__wrapper">
            <div className="sushi-block">
            <img
             className="sushi-block__image"
             src={imageURL}
             alt="Maki-first"
            />
            <h4 className="sushi-block__title">{title}</h4>
            <div className="sushi-block__selector">
                <ul>
                   {types.map((type)=>(
                    <li 
                        className={activeType===type? 'active':""}
                        onClick={()=>setActiveType(type)}
                        key={type}
                        >{typeNames[type]}
                    </li>
                    ))}
                </ul>
                <ul>
                    {size.map((size, i)=>(
                        <li
                            className={activeSize === i? 'active':""}
                            onClick={()=>setActiveSize(i)}
                            key={size}
                            >{size} pcs
                        </li>
                        ))}
                </ul>
            </div>
            <div className="sushi-block__bottom">
                <div className="sushi-block__price">from {price}$</div>
                <button 
                    className="button button--outline button--add">
                    <span>Add</span>
                    <i>0</i>
                </button>
            </div>
        </div>
        </div>
    )
}
export default SushiBlock;