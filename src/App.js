import logo from './images/logo.png';
import homepage from './images/homepage.png';
import aboutUS from './images/aboutus.png';
import vector from './images/Vector 1.png';
import card1 from './images/grilled-tomatoes.png';
import card2 from './images/snacks-for-travel.png';
import card3 from './images/post-workout.png';
import card4 from './images/grilled-tomatoes-1-846x846 1 (1).png';
import card5 from './images/meal-prep-ideas-846x846 1 (2).png'
import card6 from './images/meal-prep-ideas-846x846 1 (3).png'
import footerlogo from './images/Screenshot_669 2.png'; 
import { useState } from 'react';

const articlesData=[
    {
      name:"Grilled Tomatoes at Home",
      image:card1,
      description:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    },
    {
      name:"Snacks for Travel",
      image:card2,
      description:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    },
    {
      name:"Post-workout Recipes",
      image:card3,
      description:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    },
    {
      name:"How To Grill Corn",
      image:card4,
      description:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    },
    {
      name:"Crunchwrap Supreme",
      image:card5,
      description:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    },
    {
      name:"Broccoli Cheese Soup",
      image:card6,
      description:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    }
];

function App() {
  return (
    <div className="App">
        <Header/>
        <AboutUs/>
        <LatestArtiles/>
        <Footer/>
    </div>
  );
}

export default App;

function Header(){
  return(
    <div className='header'>
        <div className='headerLeft'>
            <img src={logo} alt='logo'/>
            <h1>Discover the <span>Best</span> Food and Drinks</h1>
            <h4>Naturally made Healthcare Products for the better care & support of your body.</h4>
            <button>Explore Now!</button>
        </div>
        <div className='headerRight'>
            <button>Get In Touch</button>
            <img src={vector}/>
        </div>
    </div>
  );
}
function AboutUs(){
  return(
    <div className='about'>
        <img src={aboutUS} alt="about-us"/>
        <div className='aboutSection'>
            <h1>About Us</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
            <button>Read More</button>
        </div>
    </div>
  );
}

function LatestArtiles() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Number of articles to display per page
  const totalArticles = articlesData.length;

  function decreasePage() {
    if (currentPage > 0 ) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }

  function increasePage() {
    if (currentPage < Math.ceil(totalArticles / itemsPerPage) - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }

  // Calculate the range of articles to display based on the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedArticles = articlesData.slice(startIndex, endIndex);

  return (
    <div className="articles">
      <h1>Latest Articles</h1>
      <ul>
        {displayedArticles.map((arg) => (
          <Card obj={arg} key={arg.name} />
        ))}
      </ul>
      <div className="pagination">
        <button onClick={decreasePage}><i className="fa-solid fa-angle-left"></i></button>
        <p><span>{currentPage + 1}</span>/{Math.ceil(totalArticles / itemsPerPage)}</p>
        <button onClick={increasePage}><i className="fa-solid fa-angle-right"></i></button>
      </div>
    </div>
  );
}


// function LatestArtiles(){
//   const [count,setCount]=useState(1);

//   const totalPages=2;

//   function decreaseCount() {
//     if (count > 1) setCount((prevCount) => prevCount - 1);
//   }

//   function increaseCount() {
//     if (count < totalPages) setCount((prevCount) => prevCount + 1);
   
//   }

//   return(
//     <div className='articles'>
//         <h1>Latest Articles</h1>
//         <ul>
//           {articlesData.map((arg)=>(
//             <Card obj={arg} key={arg.name}/>
//           ))}
//         </ul>
//        <div className='pagination'>
//             <button onClick={decreaseCount}><i class="fa-solid fa-angle-left"></i></button>
//             <p><span>{count}</span>/{totalPages}</p>
//             <button onClick={increaseCount}><i class="fa-solid fa-angle-right"></i></button>
//        </div>
//     </div>
//   );
// }
function Card({obj}){
    return(
        <div className='card'>
            <li>
              <img src={obj.image} alt={obj.name}></img>
              <h3>{obj.name}</h3>
              <p>{obj.description}</p>
              <button>Read More</button>
            </li>
        </div>
    );
}
function Footer(){
  return(
    <div className='footer'>
        <img src={footerlogo} alt='logo'/>
        <ul>
            <li><h4>Contact Us</h4></li>
            <li><p>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p></li>
            <li><a href="">example2020@gmail.com</a></li>
            <li><a href="">(904) 443-0343</a></li>
        </ul>
        <ul>
            <li><h4>More</h4></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Products</a></li>
            <li><a href="">Career</a></li>
            <li><a href="">Contact Us</a></li>
        </ul>
        <ul>
          <div className='social-media-links'>
            <li><h4>Social Links</h4></li>
            <div className='socialMedia'>
                <li><a><i class="fa-brands fa-instagram"></i></a></li>
                <li><a><i class="fa-brands fa-twitter"></i></a></li>
                <li><a><i class="fa-brands fa-facebook-f"></i></a></li>
            </div>
          </div>
          <div className='year'>
            <p>&copy; 2022 Food Truck Example</p>
          </div>
        </ul>
    </div>
  );
}

// responsive
// cards section
// get it now button