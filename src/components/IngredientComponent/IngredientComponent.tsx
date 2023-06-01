import React from 'react';

interface IIngredientProps {
    name: string;
    count: number;
    clickDelete: React.MouseEventHandler<HTMLButtonElement>;

}

const IngredientComponent: React.FC<IIngredientProps> = (props) => {




    return (
        <div className="aaa">
            <div><p>{props.name}</p></div>
            <div className="count"><p>{props.count}</p></div>
            <button className='btn-delete' onClick={props.clickDelete}>delete</button>
        </div>


    )
};

export default IngredientComponent;











// interface IIngredientProps {
//     INGREDIENTS: character[];
//     name: string;
//     count: number;
//
// }
//
// const IngredientComponent: React.FC<IIngredientProps> = (props) => {
//     const all = props.INGREDIENTS.map((item, index) => {
//         return <Button name={item.image}/>
//     })