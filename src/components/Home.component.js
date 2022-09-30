import Bills from "./Bills.component";

import './Home.styles.scss'

const Home = () => {
    return (<div className={'home'}>
        <h1>Civix</h1>
        <h2>Bill Tracker</h2>
        <Bills />
    </div>);
}

export default Home;