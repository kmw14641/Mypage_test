import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>This is home.</h1>
            <Link to={'/about'}><div>hi</div></Link>
        </div>
    )
}


export default Home;