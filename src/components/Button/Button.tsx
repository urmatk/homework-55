import React from 'react';

interface IButtonProps {
    image: string;
    click: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: React.FC<IButtonProps>= props => {
    return (
        <div>
            <button className='btn' onClick={props.click} style={{ backgroundImage:`url(${props.image}`}} ></button>
        </div>
    );
};

export default Button;