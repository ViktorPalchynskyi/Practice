import { useReducer } from "react";
import { Rating } from "../Rating/Rating";

const initialState = {
    name: '',
    text: '',
    rating: 5,
};

const reducer = (state, action) => {
    switch (action?.type) {
        case 'setName':
            return { ...initialState, name: action?.payload };
        case 'setText':
            return { ...state, text: action?.payload };
        case 'setRating':
            return { ...state, rating: Number(action?.payload) || 5 };
        default:
            return state;
    }
};

export const NewReviewFrom = () => {
  const [formValue, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <div>
            <label>Name</label>
            <input
                type='text' 
                value={formValue.name} 
                onChange={(e) => dispatch({ type: 'setName', payload: e.target.value })}
            />
        </div>
        <div>
            <label>Text</label>
            <input
                type='text' 
                value={formValue.text} 
                onChange={(e) => dispatch({ type: 'setText', payload: e.target.value })}
            />
        </div>
        <div>
            <label>Rating</label>
            <Rating 
                value={formValue.rating} 
                onClick={(rating) => dispatch({ type: 'setRating', payload: rating })}
            />
        </div>
    </div>
  );
};
