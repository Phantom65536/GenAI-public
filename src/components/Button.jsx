import React from 'react';
import ClipboardIcon from "../assets/feather/ClipboardIcon";


const Button = ({title, onClick}) => {
    const buttonStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px',
        borderRadius: '12px',
        cursor: 'pointer',
        borderWidth: '2px',
        borderColor: 'hsl(303, 87%, 55%)'
    }

    const spanStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        color: 'white',
        fontSize: '0.75rem',
        fontFamily: 'monospace'

    }

    const handleClick = () => {
        console.log('Button clicked!');
        if (onClick) {
            // onClick();  // Call the passed onClick function if provided
        }
    };

    return (
        <div>
            <button style={buttonStyle} onClick={handleClick}>
                <span style={spanStyle}>{title}</span>
            </button>
        </div>
    );
};

export default Button;