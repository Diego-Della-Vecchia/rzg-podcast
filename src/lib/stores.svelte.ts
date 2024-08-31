let state = $state(0);

export const current = {
	get time() {
		return state;
	},
	set time(v: number) {
		state = v;
	},
};
