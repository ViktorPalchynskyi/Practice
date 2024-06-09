'use client';

import { useRouter } from 'next/navigation';

export const Backdrop = () => {
    const router = useRouter();

    return <div className="modal-backdrop" onClick={router.back} />;
};
