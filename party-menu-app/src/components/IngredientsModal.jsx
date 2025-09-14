import React from "react";

function IntegredientsModal({dish,onClose}){
    if (!dish) return null;
    
    return(
        <div className="modal">
            <div className="modal-content">
                <h2>{dish.name}</h2>
                <p>{dish.description}</p>
                <h4>Ingredients:</h4>
                <ul>
                    {dish.ingredients && dish.ingredients.map((ing,idx) => (<li key={idx}>{ing.name} - {ing.quantity}</li>))}
                </ul>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default IngredientsModal;