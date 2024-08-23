import { Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateTimePickerProps {
  onDateTimeChange: (date: Date) => void;
  initialDateTime?: Date;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  onDateTimeChange,
  initialDateTime,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    initialDateTime || new Date(),
  );

  const handleChange = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
      onDateTimeChange(date);
    }
  };

  const [startDate, setStartDate] = useState(new Date());

  let handleColor = (time: any) => {
    return time.getHours() > 12 ? 'text-success' : 'text-error';
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleChange}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      dateFormat="MMMM d, yyyy h:mm aa"
      timeCaption="time"
      placeholderText="start date"
      timeClassName={handleColor}
    />
  );
};

export default DateTimePicker;
