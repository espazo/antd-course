import request from '../util/request';

const delay = (millisecond) => {
    return new Promise((resolve) => {
        setTimeout(resolve, millisecond);
    });
};

const data = {
    id: 1,
    setup: 'Did you hear about the two silk worms in a race?',
    punchline: 'It ended in a tie',
};

export default {
    namespace: 'puzzlecards', state: {
        data: [], counter: 0,
    }, effects: {
        * queryInitCards(_, sagaEffects) {
            const {call, put} = sagaEffects;
            const endPointURI = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke';

            // const puzzle = yield call(request, endPointURI);
            yield put({type: 'addNewCard', payload: data});

            yield call(delay, 3000);

            // const puzzle2 = yield call(request, endPointURI);
            yield put({type: 'addNewCard', payload: data});
        }
    }, reducers: {
        addNewCard(state, {payload: newCard}) {
            const nextCounter = state.counter + 1;
            const newCardWithId = {...newCard, id: nextCounter};
            const nextData = state.data.concat(newCardWithId);
            return {
                data: nextData, counter: nextCounter,
            };
        }
    }
};