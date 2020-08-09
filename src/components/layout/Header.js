import React from 'react';

function Header(){
    var d = new Date();
    return(
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <h2 style={h2Custom}>{d.toDateString()}</h2>
        </header>
    )
}

const headerStyle = {
    background: 'black',
    color: '#07cb79',
    textAlign: 'center',
    padding: '10px'
}
const h2Custom = {
    color: "#fff"
}



export default Header;