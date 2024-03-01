"use client"
import { addDays, format, isSameDay, parseISO } from "date-fns";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from 'react';

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

interface DatePickerProps {
	onDateChange: (date: string) => void
}

export function DatePicker({ onDateChange }: DatePickerProps) {
	const [date, setDate] = useState<Date>(new Date())
	const [formattedDate, setFormattedDate] = useState<string>(format(date || new Date(), 'yyyy-MM-dd'))

	useEffect(() => {
		if (date) {
			const newFormattedDate = format(date, 'yyyy-MM-dd');
			setFormattedDate(newFormattedDate);
			onDateChange(newFormattedDate);
		}
	}, [date, formattedDate, onDateChange]);

	return (
		<div className="flex w-full max-w-md justify-evenly items center">
			<Button
				variant={"outline"}
				onClick={() => setDate(prevDate => addDays(prevDate, -1))}
				disabled={isSameDay(date, parseISO('1995-06-16'))}
			>
				<ChevronLeft className="h-6 w-6" />
			</Button>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						variant={"outline"}
						className={cn(
							"min-w-fit w-[240px] justify-start text-left font-normal",
							!date && "text-muted-foreground"
						)}
					>
						<CalendarIcon className="mr-2 h-4 w-4" />
						{format(parseISO(formattedDate), 'MMMM dd, yyyy')}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto shadow space-y-2 p-2">
					<Select
						onValueChange={(value) =>
							setDate(addDays(new Date(), parseInt(value)))
						}
					>
						<SelectTrigger>
							<SelectValue placeholder="Select" />
						</SelectTrigger>
						<SelectContent position="popper">
							<SelectItem value="0">Today</SelectItem>
							<SelectItem value="1">Tomorrow</SelectItem>
							<SelectItem value="3">In 3 days</SelectItem>
							<SelectItem value="7">In a week</SelectItem>
						</SelectContent>
					</Select>
					<div className="rounded-md border">
						<Calendar
							mode="single"
							selected={date}
							onSelect={(selectedDate) => {
								if (selectedDate) {
									setDate(selectedDate);
								}
							}}
							disabled={(date) =>
								date > new Date() || date < new Date("1995-06-16")
							}
							initialFocus
						/>
					</div>
				</PopoverContent>
			</Popover>
			<Button
				variant={"outline"}
				onClick={() => setDate(prevDate => addDays(prevDate, 1))}
				disabled={isSameDay(date, new Date())}
			>
				<ChevronRight className="h-6 w-6" />
			</Button>
		</div>
	)
}
