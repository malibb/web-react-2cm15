import React from 'react';

const Layout = ({children}) => {
    return (
        <div className="App">
            <div className="layout">
                {children}
            </div>
            <div className="footer bg-black min-h-full text-gray-100 flex flex-wrap justify-between p-3">
                <p>FRACTIONS</p>
                <p>TECNOLOGÍAS PARA LA WEB: 2CM15</p>
            </div>
        </div>
    );
};

export default Layout;