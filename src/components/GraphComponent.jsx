import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const GraphComponent = () => {
    const [chartData, setChartData] = useState({});
    const [error, setError] = useState(null); // State to handle errors
    console.log("Chart",chartData)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const json = await response.json();
                console.log("json", json);
                const arr = json.data?.map(item => item.Population);
                const labelsArr = json.data?.map(item => item.Year);
                console.log("arr", arr);
                console.log("labelsArr", labelsArr);
                if (arr && labelsArr) {
                    arr.reverse();
                    labelsArr.reverse();
                    setChartData({
                        labels: labelsArr,
                        datasets: [
                            {
                                label: "Population",
                                data: arr,
                                borderColor: 'green',
                                tension: 0.4,
                                fill: false,
                                pointStyle: 'circle',
                                pointBorderColor: 'white',
                                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                                hoverBorderColor: 'rgba(75,192,192,1)',
                                showLine: true,
                                drawBorder: false
                            }
                        ],
                    });
                } else {
                    throw new Error('Data is empty');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message); // Set error state if there's an error
            }
        };

        fetchData();
    }, []);

    return (
        <div className='ml-8'>
            <h2>Population Over Time</h2>
            {console.log("line",chartData)}
            {error ? (
                <div>Error: {error}</div> // Render error message if there's an error
            ) : 
                chartData.datasets?.length && <Line data={chartData} />
                
            }
        </div>
    );
}

export default GraphComponent;
