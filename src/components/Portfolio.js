import React from 'react'
import amazon2 from '../images/amazon2.png'
import googlemern from '../images/google-mern.png'
import click from '../images/dbz2.png'
import weatherapp from '../images/weatherapp.png'
import burger from '../images/bur.png'
import movies from '../images/movies.png'
import newweather from '../images/newweather.png'
import './Portfolio.css'; 

const Portfolio =()=>{
    return(
        <div className="portfolio">
 
<div className="project">
                <div className="project__image">
                <a href="https://grlara9.github.io/search-movie/">
                    <img src={movies} alt="project image" />
                       
                    </a>
                    <h1>Movie Search App</h1>
                </div>
                <div className="project__specification">
                    <p>React movie app were users can search for movies from a real API and saving to local storage</p>
                </div>
                <div className="project__links">
                   
                    <a href="https://github.com/grlara9/search-movie">
                        <button class="views btn btn-lg btn-outline-secondary">View</button>
                    </a>
                </div>
            </div>

            <div className="project">
                <div className="project__image">
                    <a href="https://googlesearchappp.herokuapp.com/">
                        <img src={googlemern} alt="project image" />
                    </a>
                    <h1>Google Search Book App</h1>
                </div>
                <div className="project__specification">
                    <p>Mern React-based Google Books Search app that displays books on user searches. 
                       Users can save them to review or purchase later.</p>
                </div>
                <div className="project__links">
                   
                    <a href="https://github.com/grlara9/google-book-search-mern">
                        <button class="views btn btn-lg btn-outline-secondary">View</button>
                    </a>
                </div>
            </div>

            <div className="project">
                <div className="project__image">
                <a href="https://ancient-caverns-87467.herokuapp.com/">
                    <img src={click} alt="project image" />
                       
                    </a>
                    <h1>Dragon Ball Z Memory</h1>
                </div>
                <div className="project__specification">
                    <p>A memory challenge game built in React JS. Click on a Dragon ball Z character. But don't click on the same character twice or you lose..</p>
                </div>
                <div className="project__links">
                   
                    <a href="https://github.com/grlara9/ClickyGame">
                        <button class="views btn btn-lg btn-outline-secondary">View</button>
                    </a>
                </div>
            </div>

            <div className="project">
            <div className="project__image">
            <a href="https://fast-woodland-65175.herokuapp.com/">
            <img src={burger} alt="project image" />
                    </a>
                    
                    <h1>Eat Your Burger</h1>
                </div>
                <div className="project__specification">
                    <p>A burger logger with MySQL, Node, Express, Handlebars and using Sequelize.js. Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.</p>
                </div>
                <div className="project__links">
                   
                    <a href="https://github.com/grlara9/sequelizeBurger">
                        <button class="views btn btn-lg btn-outline-secondary">View</button>
                    </a>
                </div>
            </div>

            <div className="project">
            <div className="project__image">
            <a href="https://react-weather-50a75.web.app/">
                    <img src={newweather} alt="project image" />
                       
                    </a>
                    <h1>React Weather App</h1>
                </div>
                <div className="project__specification">
                    <p>This is a full responsive project designed with CSS, React-bootstrap, Js, and Reaxt JS . I used metaweather.com API to enable users to search for weather from their current city or any other place.</p>
                </div>
                <div className="project__links">
                    
                    <a href="https://github.com/grlara9/weather-app-reactjs">
                        <button class="views btn btn-lg btn-outline-secondary">View</button>
                    </a>
                </div>
            </div>


            <div className="project">
            <div className="project__image">
            <a href="https://clone-4aa3d.web.app/">
                    <img src={amazon2} alt="project image" />
                       
                    </a>
                    <h1>Amazon Clone App</h1>
                </div>
                <div className="project__specification">
                    <p>Amazon Clone is a project from cleverprogrammer where you can create a product, add the products to the cart, do a payment, and watch your order history.</p>
                </div>
                <div className="project__links">
                   
                    <a href="https://github.com/grlara9/amazon_clone">
                        <button class="views btn btn-lg btn-outline-secondary">View</button>
                    </a>
                </div>
            </div>
           
        </div>
    )
}
export default Portfolio