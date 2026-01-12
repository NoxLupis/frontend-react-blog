import './Home.css';
import billboardImage from '../../assets/billboard-logo.png'

function Home() {
    return (
        <>
            <h1>Bij Blogventure geloven we in de kracht van woorden*</h1>
            <div className="image-wrapper-2">
                <img src={billboardImage} alt="afbeelding billboard" />
                <p className="image-caption">* En in billboards. Die zijn niet te missen namelijk.</p>
            </div>
        </>
    );
}

export default Home;