import React from 'react';

const TestComp: React.FC<{ name: string }> = ({ name }) => {
    return (
        <div>
            <p>Test Component</p>
            <h1>This is a {name} component.</h1>
        </div>
    );
};

export default TestComp;