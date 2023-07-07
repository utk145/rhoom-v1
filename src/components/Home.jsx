import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Inabustlingtheater2 from '../assets/Inabustlingtheater2.jpg';

const Home = () => {
    const [roomCode, setRoomCode] = useState('');
    // console.log(RoomCode);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("works");
        navigate(`/room/${roomCode}`);
    };

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center">
            <div className="relative z-10 text-center text-white">
                <h1 className="text-5xl mb-8">
                    <b>Rhoom</b> - Video Chat App
                </h1>
                <form onSubmit={handleSubmit} className="mx-auto max-w-sm">
                    <label htmlFor="roomCode" className="block text-2xl font-bold mb-4">
                        Enter code to join
                    </label>
                    <div className="flex items-center">
                        <input
                            type="text"
                            id="roomCode"
                            required
                            placeholder="Example: 17826"
                            value={roomCode}
                            onChange={(e) => setRoomCode(e.target.value)}
                            className="flex-grow py-2 px-4 rounded-l-full text-gray-900 placeholder-gray-500 bg-white"
                        />
                        <button
                            type="submit"
                            className="bg-green-700 text-white px-6 py-2 rounded-r-full font-bold"
                        >
                            Enter room
                        </button>
                    </div>
                </form>
            </div>
            <img
                src={Inabustlingtheater2}
                className="object-cover w-full h-full absolute top-0 left-0 opacity-75"
                alt="Inabustlingtheater"
            />
        </div>
    );
};

export default Home;