import {Link} from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1>This is about.</h1>
            <Link to={'/'}><div>back</div></Link>
        </div>
    )
}

export default About;