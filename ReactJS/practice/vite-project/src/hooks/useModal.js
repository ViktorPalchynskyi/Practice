import { useCallback, useState } from 'react';

export const useModal = (initialValue) => {
    const [isOpen, setIsOpen] = useState(initialValue);

    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);

    return { isOpen, openModal, closeModal };
};
