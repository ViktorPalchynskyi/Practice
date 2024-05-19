'use client';

import { useSearchParams, useRouter, useParams } from 'next/navigation';

export default function DishPage() {
    const router = useRouter();
    const searchParam = useSearchParams();
    const params = useParams();

    console.log(params, searchParam.get('search'));
    return (
        <div>
            <input
                value={searchParam.get('search') || ''}
                onChange={(event) => {
                    const path = `/dish/${(params.dishId || []).join('/')}`;
                    const query = event.target.value ? `search=${event.target.value}` : '';

                    router.push(`${path}?${query}`);
                }}
            />
        </div>
    );
}
