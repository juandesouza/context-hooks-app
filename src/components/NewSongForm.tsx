import React, { useState, ChangeEvent, FormEvent } from 'react'

interface Props {
    addSong(title: string): void
}

const NewSongForm: React.FC<Props> = ({ addSong }) => {

    const [title, setTitle] = useState('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addSong(title);
        setTitle('');
    };

    return (
        <form style={{ display: 'flex', margin: 10 }} onSubmit={onSubmitHandler}>
            <label>Song name: </label>
            <input type="text" value={title} required onChange={onChangeHandler} />
            <input type="submit" value="addsong" style={{ marginLeft: 10 }} />
        </form>
    )
}

export default NewSongForm;
