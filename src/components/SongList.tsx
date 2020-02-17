import React, { useState } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

interface Props {
    
}

interface Songs {
    title: string,
    id: string | number
}

const SongList: React.FC<Props> = () => {
    const [songs, setSongs] = useState<Songs[]>([
        { title: 'Almost Home', id: 1 },
        { title: 'Memory Gospel', id: 2 },
        { title: 'This Wild Darkness', id: 3 }
    ]);

    const [age, setAge] = useState(20);

    const addSong = (title: string) => {
        setSongs([...songs, { title, id: uuid() }]);
    };
    
    return (
        <div className="song-list" style={{ display: 'flex', alignContent: 'center', flexDirection: 'column' }}>
            <ul>
                {songs.map(song => {
                    return <li key={song.id}>{song.title}</li>
                })}
            </ul>
            <NewSongForm addSong={addSong} />    
            <button onClick={() => setAge(age + 1)} style={{ 
                maxWidth: '50%', alignSelf: 'center', height: '40px'
            }}>Add 1 to age: {age}</button>        
        </div>
    );
};

export default SongList;
