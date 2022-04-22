import { Fragment, useState } from 'react';
import NavBar from '../../components/navBar/navBar'
import PokeDex from '../../components/pokeDex/pokeDex';
import Footer from '../../components/footer/footer';

function Home() {
    const [searchParam, setSearchParam] = useState('');

    function addSearchParam(param) {
        setSearchParam(param);
    }

    return (
        <Fragment>
            <NavBar onAddSearchParam={addSearchParam} />
            <PokeDex query={searchParam} />
            <Footer />
        </Fragment>
    );
}

export default Home;