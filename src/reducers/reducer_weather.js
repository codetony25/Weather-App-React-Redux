import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			// Never mutate state (BAD), instead just add on to existing state by concat(GOOD)
			return [ action.payload.data, ...state ];
	}
	return state;
}