import React from 'react';
import classes from "./MyButton.module.css";


const MyButton = ({children, ...props}) => {
    //деструктурізацією дістали проп children
    return (
        <button {... props} className={classes.myBtn}>
            {children}
        </button>//отримати стиль як властивість об'єкта
        //{... props} розгортаємо весть об'єкт в button. Всі probs які передаємо в MyButton летітимуть в цю кнопку
    );
};

export default MyButton;