import React, { useEffect, useState } from 'react';

const URLShortener = ({ url }) => {
    const [shortenedUrl, setShortenedUrl] = useState('');

    useEffect(() => {
        const shortenURL = async () => {
            const API_KEY = 'f005471349msh59ae2d901ca2e31p171ea8jsnf07cca1de97e';

            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-RapidAPI-Key': API_KEY,
                    'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
                },
                body: JSON.stringify({
                    url: url
                })
            };

            try {
                const response = await fetch('https://url-shortener-service.p.rapidapi.com/shorten', requestOptions);
                const data = await response.json();
                console.log(data);
                setShortenedUrl(data.result_url);
                
                
                if (data.result_url) {
                    await fetch('http://localhost:5000/save-url', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ url: data.result_url })
                    });
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        shortenURL();
    }, [url]);

    return (
        <div className='main'>
            <p className='urlDisplay'>
                <a href={shortenedUrl}>{shortenedUrl}</a>
            </p>
        </div>
    );
};

export default URLShortener;