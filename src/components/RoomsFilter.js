import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from './Title';

//get all unique values
const getUnique = (items,value)=>{
    return [...new Set(items.map(item=>item[value]))]
}
export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const { handleChange,type,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets,capacity} = context;
    let types =getUnique(rooms,'type');
    types = ['all',...types]
    types = types.map((type,index)=>{
        return <option key={index} value={type}>{type}</option>
    })

    let people =getUnique(rooms,'capacity');
    people= people.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    })
    return (
       <section className="filter-container">
           <Title title="Search rooms"/>
           <form className="filter-form">
            {/* {selected type} */}
            <div className="form-group">
                <label htmlFor="type">Room Type
                </label>
                <select name="type" id="type" value={type} className="form-control" onChange={handleChange}> 
                {types}
                </select>
            </div>
             {/* { end selected type} */}
              {/* {guest } */}
            <div className="form-group">
                <label htmlFor="capacity">Guests 
                </label>
                <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}> 
                {people}
                </select>
            </div>
             {/* { end guest} */}
             {/* room price  */}
             <div className="form-group">
                 <label htmlFor="price"> room price ${price}</label>
                 <input type="range" name="price" min={minPrice} max={maxPrice}  id="price" value={price} onChange={handleChange} className="form-control"/>
             </div> 
             {/* end room price  */}
             {/* size */}
             <div className="form-group">
                 <label htmlFor="size" >Room Size</label>
                 <div className="size-inputs">
                     <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"/> 
                     <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"/> 
                 </div> 
             </div>
             {/* end of size */}
            {/* extras */}
            <div className="form-group">
                <div className="single-extra">
                    <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                    <label htmlFor="breakfast">breakfast</label>
                </div>
                <div className="single-extra">
                    <input type="checkbox" name="pets" id="breakfast" checked={pets} onChange={handleChange}/>
                    <label htmlFor="breakfast">pets</label>
                </div>
            </div>
            {/* end of extras */}

           </form>
       </section>
    )
}
