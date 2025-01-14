import React from 'react';
import Section from '../layout/section';
import TextLogo from '../ui/text-logo';

function StatisticsSection() {
	const statsData: StatisticBlockProps[] = [
		{
			value: 598,
			label: 'Participants',
		},
		{
			value: 331,
			label: 'First-Timers',
		},
		{
			value: 35,
			label: 'Majors',
			suffix: '+',
		},
		{
			value: 36,
			label: 'Universities',
		},
		{
			value: 30,
			label: 'Nationalities',
			suffix: '+',
		},
		{
			value: 9,
			label: 'States',
		},
	];
	return (
		<Section className="pt-4">
			<div className="grid grid-cols-2">
				<div className="grid grid-cols-2 gap-20">
					{statsData.map((stat) => (
						<StatisticBlock
							key={stat.label}
							value={stat.value}
							label={stat.label}
							suffix={stat.suffix}
						/>
					))}
				</div>
			</div>
		</Section>
	);
}

export default StatisticsSection;

type StatisticBlockProps = {
	value: number;
	label: string;
	suffix?: string;
};

function StatisticBlock({ value, label, suffix }: StatisticBlockProps) {
	return (
		<div className="flex flex-col-reverse items-start gap-2">
			<h3 className="font-mono uppercase">{label}</h3>
			<p className="font-mono text-7xl">
				{value.toString().length < 2
					? `0${value.toString()}`
					: value.toString()}
				{!!suffix && suffix}
			</p>
		</div>
	);
}
