export const useIsAuthorized = () => {
    const rand = Math.round(Math.random() * 10);

    return rand > 5;
};
