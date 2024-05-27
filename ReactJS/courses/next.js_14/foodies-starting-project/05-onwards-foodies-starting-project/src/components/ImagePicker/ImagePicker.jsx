'use client';

import { useRef, useState } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

export const ImagePicker = ({ label, name }) => {
    const [pickedImage, setPickedImage] = useState();
    const imageInput = useRef();

    const handePickClick = () => imageInput.current.click();
    const handeImageChange = (event) => {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => setPickedImage(fileReader.result);

        fileReader.readAsDataURL(file);
    };

    return (
        <div className={styles.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={styles.controls}>
                <div className={styles.preview}>
                    {!pickedImage && <p>No image picked yet</p>}
                    {pickedImage && <Image src={pickedImage} alt={'The image selected by the user.'} fill />}
                </div>
                <input
                    ref={imageInput}
                    className={styles.input}
                    type="file"
                    id={name}
                    accept="image/pgn, image/ jpeg"
                    name={name}
                    onChange={handeImageChange}
                    required
                />
                <button className={styles.button} type="button" onClick={handePickClick}>
                    Pick an image
                </button>
            </div>
        </div>
    );
};
