import React from 'react';

import './App.css';


class MediaCard extends React.Component{
  
    render() {

      const header = (
        
        <header className="header">
          <img className="gato_min" src={this.props.img} alt=""/>
          <div className="name">
          <h3>{this.props.name}</h3>
          <p className="date">{this.props.date}</p>
          </div>
        </header>
      );
  
    const main = (
      <main>
      <p>{this.props.text}</p>
      </main>
    );
  
    const footer = (
      <footer>
        <p className="leer">Leer mas...</p>
        <div className="like">
          <p className="number">{this.props.likes}</p>
          <i className="fas fa-heart"></i>
        </div>
      </footer>
      );
  
      const all = (
        <div className="card__container">
          {header}
          {main}
          {footer}
        </div>
      );
      
      return all;
    }
  }
  
  export default MediaCard;