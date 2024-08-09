import { useState } from 'react';

function useCookie(cookieName) {
    // Helper function to get the value of a cookie
    const getCookie = (name) => {
        const matches = document.cookie.match(
            new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)')
        );
        return matches ? decodeURIComponent(matches[1]) : undefined;
    };

    // Initialize the cookie value state
    const [cookieValue, setCookieValue] = useState(() => getCookie(cookieName));

    // Function to set a new cookie
    const setCookie = (value, options = {}) => {
        options = {
            path: '/',
            ...options,
        };

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        let updatedCookie =
            encodeURIComponent(cookieName) + '=' + encodeURIComponent(value);

        for (let optionKey in options) {
            updatedCookie += '; ' + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += '=' + optionValue;
            }
        }

        document.cookie = updatedCookie;
        setCookieValue(value);
    };

    // Function to delete the cookie
    const deleteCookie = () => {
        setCookie('', { 'max-age': -1 });
        setCookieValue(undefined);
    };

    return [cookieValue, setCookie, deleteCookie];
}

export default useCookie;
