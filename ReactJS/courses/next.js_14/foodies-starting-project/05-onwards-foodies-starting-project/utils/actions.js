'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/server';


const isInvalidText = (text) => !text || text.trim() === '';
const validateMeal = (meal) =>
    Object.values(meal).some((value) => {
        if (typeof value === 'string') {
            return isInvalidText(value);
        }

        return value?.size === 0;
    });

export const shareMeal = async (formData) => {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        insructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    };

    if (validateMeal(meal)) {
        throw new Error('Invalid input.');
    }

    await saveMeal(meal);
    revalidatePath('/meals');
    redirect('/meals');
};
