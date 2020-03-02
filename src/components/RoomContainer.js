import React from 'react';
import RoomsFilter from "./RoomsFilter";
import RoomList from "./RoomList";
import {RoomConsumer} from '../context';
import Loading from './Loading';

export default function RoomContainer() {
    return (
        <RoomConsumer>
            { value =>{
                const {loading, sortedRooms, rooms} = value;
                if(loading){
                    return <Loading/>
                }

                return (
                <>
                    <RoomsFilter rooms={rooms}/>
                    <RoomList rooms={sortedRooms}/>
                </>
                )
            }}
        </RoomConsumer>
       
    )
}
