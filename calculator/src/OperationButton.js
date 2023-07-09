import {ACTIONS} from './App'

export default function OperationButton({dispatch, operator}) {
    return <button onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {operator}})}>{operator}</button>
}