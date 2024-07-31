export type Poll = {
	id: string;
	question: string;
	answers: string[];
	created: Date;
	done: boolean;
};
