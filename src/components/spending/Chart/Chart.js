import React, { useState } from 'react';
import myData from '../../../data.json';
import styles from './Chart.module.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';

const Chart = () => {
    const [data, setData] = useState(myData);
    const [activeIndex, setActiveIndex] = useState(null);

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip" style={{
                    backgroundColor: '#382314',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    color: 'white',
                    fontSize: '9px',
                    fontWeight: 'bold'
                }}>
                    <p className="label">${`${payload[0].value}`}</p>
                </div>
            );
        }
        return null;
    };

    const maxAmount = data.reduce((max, item) => item.amount > max ? item.amount : max, data[0].amount);

    return (
        <div className={styles.container}>
            <BarChart
                width={300}
                height={160}
                data={data}
                barGap={10}
                margin={{ top: 20, right: 30, bottom: 5 }}
                onMouseMove={(state) => {
                    if (state.isTooltipActive) {
                        setActiveIndex(state.activeTooltipIndex);
                    } else {
                        setActiveIndex(null);
                    }
                }}
                onMouseLeave={() => setActiveIndex(null)}
            >
                <XAxis
                    dataKey="day"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 14, fill: '#8c979f' }}
                />
                <Tooltip
                    content={<CustomTooltip />}
                    cursor={false}
                    position={{ y: -40 }}  // Adjust this value to move the tooltip closer to the bar
                />
                <Bar
                    dataKey="amount"
                    radius={[4, 4, 4, 4]}
                    barSize={31}
                    fill='hsl(10, 79%, 65%)'
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={entry.amount === maxAmount ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)'}
                            opacity={index === activeIndex ? 0.8 : 1}  // Lower opacity when hovered
                            style={{ cursor: 'pointer' }}

                        />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
}

export default Chart;