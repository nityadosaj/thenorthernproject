import react from 'react';
import Header from './Header';
function Home()
{
    return(
        <div className="stuff">
            <Header/>
            <div className="home">
                <h1>Home</h1>
                <div className="words">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                    proident, sunt in culpa qui ocia deserunt mollit anim id est laborum. 
                    Lorem ipsum dolor sit amet
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;