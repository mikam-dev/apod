"use client"
import { differenceInCalendarYears } from "date-fns";
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./select";

interface DateSelectProps {
	onDateChange: (date: string) => void
}

export function DateSelect({ onDateChange }: DateSelectProps) {
	const [date, setDate] = useState<Date>(new Date())

	// set default state for day, month, year
	const [day, setDay] = useState(date.getDay())
	const [month, setMonth] = useState<string>(Months[date.getMonth()])
	const [year, setYear] = useState(date.getFullYear())

	useEffect(() => {
		console.log('month: ' + month)
	}, [month, onDateChange])

	logFirstDateValues()

	return (
		<div className="flex space-x-2 rounded-md">
			<Select onValueChange={(value) => {
				if (value) {
					setMonth(value)
				}
			}}>
				<SelectTrigger className="w-5/12">
					<SelectValue
						placeholder="Month"
						defaultValue={month}
					/>
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{Months && Months.map((month, index) => (
							<SelectItem
								value={Months[index]}
								key={index}
							>{month}</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
			<Select>
				<SelectTrigger className="w-3/12">
					<SelectValue placeholder="Day" defaultValue={day} />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>

					</SelectGroup>
				</SelectContent>
			</Select>
			<Select>
				<SelectTrigger className="w-4/12">
					<SelectValue placeholder="Year" defaultValue={year} />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value="1995">1995</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	)
}

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



const firstDate = new Date(1995, 5, 16); // June 16, 1995 i.e. the first APOD
const Years = differenceInCalendarYears(new Date(), new Date(firstDate))

const logFirstDateValues = () => {
	console.log('MONTH: ' + firstDate.getMonth())
	console.log('DAY: ' + firstDate.getDay())
	console.log('YEAR: ' + firstDate.getFullYear())
}
