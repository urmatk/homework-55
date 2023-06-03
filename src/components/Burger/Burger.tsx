import React from 'react';
import {stringNumber} from "../../Types";

interface IBurgerProps {
    filling: stringNumber[],

}

const Burger: React.FC<IBurgerProps> = props => {

    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {props.filling.map(element => {
                const ingArr = [];
                        for (let i = 0; i < element.count; i++) {
                            ingArr.push(<div className={element.name} key={element.name+i}></div>)
                        }
                        return ingArr;
                    })}
            <div className="BreadBottom"></div>
        </div>
    );
};

export default Burger;