import React from 'react';
import MediaCard from './MediaCard';
import gato from './gato.jpg';

class MediaList extends React.Component{
    render() {
        return(
            <section className="section__cards">
                <h1>My Cards</h1>
                <ul className="card__list">
                    <li>
                        <MediaCard name="Alejandra Fernández" date="6 junio 2019" img={gato} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." likes={827} />
                    </li>
                    <li>
                        <MediaCard name="Pepe Pérez" date="6 junio 2019" img={gato} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." likes={37} />
                    </li>
                    <li>
                        <MediaCard name="Cristina Redondo" date="6 junio 2019" img={gato} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." likes={14} />
                    </li>
                </ul>
            </section>
        );
    }
}

export default MediaList;
