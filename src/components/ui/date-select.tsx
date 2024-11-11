"use client"
import { differenceInCalendarYears, format, getDaysInMonth, isLeapYear } from "date-fns";
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

interface DateSelectProps {
	onDateChange: (date: string) => void
}

export function DateSelect({ onDateChange }: DateSelectProps) {
	const [date, setDate] = useState<Date>(new Date())
	const [formattedDate, setFormattedDate] = useState<string>(format(date || new Date(), 'yyyy-MM-dd'))

	// set default state for day, month, year
	const [day, setDay] = useState(date.getDay())
	const [month, setMonth] = useState(date.getMonth())
	const [year, setYear] = useState(date.getFullYear())

	useEffect(() => {
		date.setFullYear(year, month, day);
		setDate(date);
		const newFormattedDate = format(date, 'yyyy-MM-dd');
		setFormattedDate(newFormattedDate);
		onDateChange(newFormattedDate);

		console.log("Date: " + date);
		console.log("Is Leap Year: " + isLeapYear(date));

	}, [date, formattedDate, year, month, day, onDateChange]);

	const firstDate = new Date(1995, 5, 16); // June 16, 1995 i.e. the first APOD

	const totalYears = differenceInCalendarYears(new Date(), new Date(firstDate));

	const Months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	]

	return (
		<div className="flex space-x-2 rounded-md">
			<Select>
				<SelectTrigger className="w-5/12">
					<SelectValue placeholder="Month" />
				</SelectTrigger>
				<SelectContent>
					{Months && Months.map((month, index) => (
						<SelectItem
							value={month}
							key={index}
							onSelect={() => setMonth(index)}
						>{month}</SelectItem>
					))}
				</SelectContent>
			</Select>
			<Select>
				<SelectTrigger className="w-3/12">
					<SelectValue placeholder="Day" />
				</SelectTrigger>
				<SelectContent>
					{Array.from({ length: getDaysInMonth(date) }, (_, index) => (
						<SelectItem
							value={`${index + 1}`}
							key={index}
							onSelect={() => setDay(index)}
						>{index + 1}</SelectItem>
					))}
				</SelectContent>
			</Select>
			<Select>
				<SelectTrigger className="w-4/12">
					<SelectValue placeholder="Year" />
				</SelectTrigger>
				<SelectContent>
					{Array.from({ length: totalYears }, (_, index) => (
						<SelectItem
							value={`${firstDate.getFullYear() + index}`}
							key={index}
							onSelect={() => setYear(index)}
						>{firstDate.getFullYear() + index}</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}
