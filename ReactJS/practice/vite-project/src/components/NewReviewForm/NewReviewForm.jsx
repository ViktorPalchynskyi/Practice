import React, { useEffect, useLayoutEffect, useReducer, useRef } from 'react';

const FORM_ACTIONS = {
    setName: 'setName',
    setText: 'setText',
    setRating: 'setRating',
};

const reducer = (state, action) => {
    switch (action?.type) {
        case FORM_ACTIONS.setName:
            return { name: action.payload.name, text: '', rating: 0 };
        case FORM_ACTIONS.setText:
            return { ...state, text: action.payload.text };
        case FORM_ACTIONS.setRating:
            return { ...state, rating: action.payload.rating };
        default:
            return state;
    }
};

const initialState = {
    name: 'Tema',
    text: 'text',
    rating: 10,
};

export const NewReviewForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const ref = useRef();

    const onNameChange = (event) =>
        dispatch({ type: FORM_ACTIONS.setName, payload: { name: event.target.value } });
    const onTextChange = (event) =>
        dispatch({ type: FORM_ACTIONS.setName, payload: { name: event.target.value } });
    const onRatingChange = (event) =>
        dispatch({ type: FORM_ACTIONS.setName, payload: { name: event.target.value } });
    const submitHandler = (event) => {
        event.preventDefault();
        const postData = {
            name: state.name,
            text: state.text,
            rating: state.rating,
        };
    };

    useLayoutEffect(() => {
        if (ref.current) ref.current?.focus();

        return () => {};
    }, []);

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="">
                Name:
                <input type="text" value={state.name} onChange={onNameChange} ref={ref} />
            </label>
            <label htmlFor="">
                Text:
                <input type="text" value={state.text} onChange={onTextChange} />
            </label>
            <label htmlFor="">
                Rating:
                <input type="number" value={state.rating} onChange={onRatingChange} />
            </label>
            <button>Submit</button>
        </form>
    );
};
