import React, { useState, useEffect } from 'react';

function Calendar({ name, updateProgress }) {
    const [selectedDates, setSelectedDates] = useState([]);
    const today = new Date().getDate();

    const handleDateClick = (date) => {
        if (date >= today) {
            if (selectedDates.includes(date)) {
                setSelectedDates(selectedDates.filter(d => d !== date));
            } else {
                setSelectedDates([...selectedDates, date]);
            }
        }
    };

    useEffect(() => {
        updateProgress(name, selectedDates.length);
    }, [selectedDates, name, updateProgress]);

    const renderCalendar = () => {
        const daysInMonth = new Date(2024, 12, 0).getDate(); // December 2024
        const calendarDays = [];

        for (let day = 1; day <= daysInMonth; day++) {
            calendarDays.push(
                <div
                    key={day}
                    className={`p-2 border text-center cursor-pointer relative ${selectedDates.includes(day) ? 'bg-blue-200' : ''} ${day < today ? 'bg-gray-200 cursor-not-allowed' : ''}`}
                    onClick={() => handleDateClick(day)}
                >
                    {day}
                    {selectedDates.includes(day) && <span className="absolute top-1 right-1 text-green-500">✔</span>}
                </div>
            );
        }

        return calendarDays;
    };

    return (
        <div className="grid grid-cols-7 gap-1 border border-gray-300 p-2 rounded-lg">
            {renderCalendar()}
        </div>
    );
}

export default Calendar;