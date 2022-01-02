import * as actions from "./actionTypes";

export function taskCompleted(id) {
  return {
    type: actions.taskUpdated,
    payload: { id: id, completed: true },
  };
}
export function titleChanged(id) {
  return {
    type: actions.taskUpdated,
    payload: { id: id, title: `New title for ${id}` },
  };
}

export function taskDeleted(id) {
  return {
    type: actions.taskDelete,
    payload: { id: id },
  };
}
