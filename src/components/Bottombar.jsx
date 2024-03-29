import React, { useEffect, useState } from 'react';
import Card from './Card';

const Bottombar = () => {
    const [arr, setArr] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setArr(data); // Update the state with the fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className='ml-6 mt-4'>Assets</div>
        
            {arr && (
                <div className='ml-6 flex flex-row'>
                    <p >Currency: {arr.chartName}</p>
                    {Object.keys(arr.bpi).map(currencyCode => (
                    <Card 
                        key={currencyCode}
                        code={currencyCode}
                        symbol={arr.bpi[currencyCode].symbol}
                        rate={arr.bpi[currencyCode].rate}
                    />
                ))}

                
                    <p>Bitcoin Price: {arr.bpi?.USD?.rate}</p>
                    {/* You can add more properties as needed */}
                </div>
            )}
        </div>
    );
}

export default Bottombar;
