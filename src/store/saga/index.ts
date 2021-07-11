import { PostsActionTypes } from '../action-types/index';
import { put, takeEvery, all, call } from 'redux-saga/effects';
import { downloadPostsErrorAction, downloadPostsOkAction, editPostErrorAction, editPostOkAction } from '../actions/posts-action';
import { editPostDB, retrievePostsDB } from '../api-calls';
import { displayToastMessage } from '../../components/notification/Notification';

// Retrieve posts
// worker saga
function* retrievePosts() {
  try {
    const { data } = yield call(retrievePostsDB);
    yield downloadPostsOkAction(data);
  } catch (error) {
    yield put(downloadPostsErrorAction());
    displayToastMessage('error', 'An error ocurred')
  }
}

// watcher saga
function* retrievePostsSaga() {
  yield takeEvery(PostsActionTypes.BEGIN_POSTS_DOWNLOAD, retrievePosts);
}

// Edit post
// worker saga
function* editPost(action: any) {
  const { post } = action;
  try {
    yield call(editPostDB, post);
    yield editPostOkAction(post);
    displayToastMessage('success', 'Post edited successfully!')
  } catch (error) {
    yield editPostErrorAction();
    displayToastMessage('error', 'An error ocurred')
  }
}

// watcher saga
function* editPostSaga() {
  yield takeEvery(PostsActionTypes.BEGIN_EDIT_POST, editPost);
}

export default function* rootSaga() {
  yield all([
    retrievePostsSaga(),
    editPostSaga()
  ]);
}
