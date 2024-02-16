import React, { useEffect, useState } from 'react';

const URLList = () => {
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        const fetchURLs = async () => {
            try {
                const response = await fetch('http://localhost:5000/get-urls');
                const data = await response.json();
                setUrls(data.urls.map(urlObj => urlObj.url));
            } catch (error) {
                console.error('Error fetching URLs:', error);
            }
        };

        fetchURLs();
    }, []);

    return (
        <div className='urlLists'>
            <h1>Shortened URls</h1>
            <ul className='urlList'>
                {urls.map((url, index) => (
                    <li key={index} className='url'>
                        <a href={url}>{url}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default URLList;
