import React from 'react';

const date = new Date();
const greeting = () => {
    const hourpassed = date.getHours();
    if (hourpassed >= 0 && hourpassed <= 12) {
        return 'Good Morning';
    } else if (hourpassed > 12 && hourpassed <= 18) {
        return 'Good Afternoon';
    }

    return 'Good Evening';
};
const greetingNote = greeting();
function UpperBody() {
    return (
        <div className="content1">
            <h1 className="greetings">{greetingNote}
            </h1>
            <h2>Hey ,Its Abhishek</h2>
        </div>
    );
}
export default UpperBody;
