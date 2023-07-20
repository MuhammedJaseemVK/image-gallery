import React, { useState, useEffect } from 'react';
// import logo from '../assets/logo512.png'

function Card() {
    const [images, setimages] = useState([]);

    useEffect(() => {

        const fetchImages = () => {
            const data = [
                {
                    id: 1,
                    url: 'https://www.rd.com/wp-content/uploads/2023/04/Hilarious-Cat-Memes-3.jpg?fit=700,700',
                    title: 'Flirting cat'
                },
                {
                    id: 2,
                    url: 'https://i.pinimg.com/originals/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg',
                    title: 'Happy cat'
                },
                {
                    id: 3,
                    url: 'https://i.pinimg.com/564x/98/fc/88/98fc8863c7e68df57cd7ad7442f0ec18.jpg',
                    title: 'Sad cat'
                },
                {
                    id: 4,
                    url: 'https://i.ytimg.com/vi/Q6Nsvrnnug8/maxresdefault.jpg',
                    title: 'Flirting cat'
                },
                {
                    id: 5,
                    url: 'https://www.rd.com/wp-content/uploads/2023/04/Hilarious-Cat-Memes-FT.jpg?resize=700,700',
                    title: 'Angry cat'
                }
            ]
            setimages(data);
        }
        fetchImages();
    }, [])



    return (
        <div>
            <div className='gallery-card'>
                {
                    images.map((image) => (
                        <div className='image-card' key={image.id}>
                            <img src={image.url} />
                            <div className='image-details'>
                                <h3>{image.title}</h3>
                                <button>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Card