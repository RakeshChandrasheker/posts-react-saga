export enum PostsActionTypes {
  BEGIN_POSTS_DOWNLOAD = '@@BEGIN_POSTS_DOWNLOAD',
  POSTS_DOWNLOAD_OK = '@@POSTS_DOWNLOAD_OK',
  POSTS_DOWNLOAD_ERROR = '@@POSTS_DOWNLOAD_ERROR',

  RETRIEVE_POST_EDIT = '@@RETRIEVE_POST_EDIT',
  BEGIN_EDIT_POST = '@@BEGIN_EDIT_POST',
  POST_EDITED_OK = '@@POST_EDITED_OK',
  POST_EDITED_ERROR = '@@POST_EDITED_ERROR'
}