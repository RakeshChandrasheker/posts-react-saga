import { useSelector } from 'react-redux';
import { IPostState } from '../store/state-types';

export const useSelect = () => {

  const { posts, currentPost, loading, error } = useSelector(
    ({ PostsReducer }: { PostsReducer: IPostState }) => ({
      posts: PostsReducer.posts,
      loading: PostsReducer.loading,
      error: PostsReducer.error,
      currentPost: PostsReducer.currentPost,
    })
  );

  return { posts, currentPost, loading, error } as const;
};
