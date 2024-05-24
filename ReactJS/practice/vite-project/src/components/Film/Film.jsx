import React from 'react';
import { FilmDetails } from '../FilmDetails/FilmDetails';
import { NewReviewForm } from '../NewReviewForm/NewReviewForm';

export const Film = () => {
    // return React.createElement('div', {
    //     children: [
    //         React.createElement('span', { children: 'Hello' }),
    //         React.createElement('span', { children: ' my friend' }),
    //     ],
    // });

    return (
        <div>
            <header></header>
            <div>
                <FilmDetails title={'ReZero'} genre={'drama'} seasonsCount={3} />
                <NewReviewForm />
            </div>
            <footer></footer>
        </div>
    );
};
