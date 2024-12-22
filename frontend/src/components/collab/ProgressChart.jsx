import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function ProgressChart({ data }) {
    const chartRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        const newChartInstance = new Chart(canvasRef.current, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [
                    {
                        label: 'Progress',
                        data: data.values,
                        fill: false,
                        backgroundColor: 'rgb(75, 192, 192)',
                        borderColor: 'rgba(75, 192, 192, 0.2)',
                    },
                ],
            },
        });

        chartRef.current = newChartInstance;

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [data]);

    return (
        <div>
            <canvas ref={canvasRef} />
        </div>
    );
}

export default ProgressChart;