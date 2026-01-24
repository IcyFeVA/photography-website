import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, MessageSquare } from 'lucide-react';

const BookingForm: React.FC = () => {
    const [dates, setDates] = useState<Date[]>([]);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    useEffect(() => {
        const getNextDates = (count: number) => {
            const dates: Date[] = [];
            let current = new Date();
            current.setDate(current.getDate() + 1); // Start from tomorrow

            while (dates.length < count) {
                const day = current.getDay();
                // 2 = Tuesday, 5 = Friday
                if (day === 2 || day === 5) {
                    dates.push(new Date(current));
                }
                current.setDate(current.getDate() + 1);
            }
            return dates;
        };
        setDates(getNextDates(6));
    }, []);

    const timeSlots = ["10:00 AM", "1:00 PM", "3:00 PM"];

    return (
        <div className="max-w-3xl mx-auto bg-surface border border-white/10 p-8 md:p-12 rounded-sm">
            <h2 className="font-serif text-3xl text-white mb-8 text-center">Request a Session</h2>

            <form action="https://formspree.io/f/xqeeeqve" method="POST" className="space-y-8">

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-muted flex items-center gap-2">
                            <User className="w-4 h-4" /> Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-muted flex items-center gap-2">
                            <Phone className="w-4 h-4" /> Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                            placeholder="(555) 123-4567"
                        />
                    </div>
                </div>

                {/* Date Selection */}
                <div className="space-y-4">
                    <label className="text-sm font-medium text-muted flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> Select a Date
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {dates.map((date) => {
                            // Ensure we use the local date for the value, not UTC which might be yesterday/tomorrow
                            const year = date.getFullYear();
                            const month = String(date.getMonth() + 1).padStart(2, '0');
                            const day = String(date.getDate()).padStart(2, '0');
                            const dateString = `${year}-${month}-${day}`;

                            const displayDate = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
                            const isSelected = selectedDate === dateString;

                            return (
                                <button
                                    key={dateString}
                                    type="button"
                                    onClick={() => setSelectedDate(dateString)}
                                    className={`
                    p-3 rounded-sm border text-sm transition-all
                    ${isSelected
                                            ? 'bg-white text-black border-white font-medium'
                                            : 'bg-white/5 border-white/10 text-muted hover:bg-white/10'}
                  `}
                                >
                                    {displayDate}
                                </button>
                            );
                        })}
                    </div>
                    {/* Hidden input for form submission */}
                    <input type="hidden" name="date" value={selectedDate || ''} required />
                </div>

                {/* Time Selection - Only show if date is selected */}
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: selectedDate ? 1 : 0.5, height: 'auto' }}
                    className="space-y-4"
                >
                    <label className="text-sm font-medium text-muted flex items-center gap-2">
                        <Clock className="w-4 h-4" /> Select a Time
                    </label>
                    <div className="flex flex-wrap gap-3">
                        {timeSlots.map((time) => {
                            const isSelected = selectedTime === time;
                            return (
                                <button
                                    key={time}
                                    type="button"
                                    disabled={!selectedDate}
                                    onClick={() => setSelectedTime(time)}
                                    className={`
                    px-6 py-2 rounded-full border text-sm transition-all
                    ${isSelected
                                            ? 'bg-white text-black border-white font-medium'
                                            : 'bg-white/5 border-white/10 text-muted hover:bg-white/10'}
                    ${!selectedDate && 'opacity-50 cursor-not-allowed'}
                  `}
                                >
                                    {time}
                                </button>
                            );
                        })}
                    </div>
                    <input type="hidden" name="time" value={selectedTime || ''} required />
                </motion.div>

                {/* Text Area */}
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-muted flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" /> Tell us what you need
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                        placeholder="I'm looking for..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={!selectedDate || !selectedTime}
                    className={`
            w-full font-sans font-medium px-8 py-4 uppercase tracking-widest transition-all rounded-sm
            ${(selectedDate && selectedTime)
                            ? 'bg-white text-black hover:bg-gray-200'
                            : 'bg-white/10 text-muted cursor-not-allowed'}
          `}
                >
                    Send Request
                </button>

            </form>
        </div>
    );
};

export default BookingForm;
