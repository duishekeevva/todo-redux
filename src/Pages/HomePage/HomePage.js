import React from 'react';
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div className={'todo-users-btn'}>
            <Link className={'homeLink'}  to={'/todo'}>TODO LIST</Link>
            <Link className={'homeLink'}  to={'/users'}>USERS LIST</Link>
        </div>
    );
};

export default HomePage;