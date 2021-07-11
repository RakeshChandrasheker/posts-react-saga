import { FunctionComponent, useEffect, useState } from "react";
import { useSelect } from "../../hooks/useSelect";
import { downloadPostsAction } from "../../store/actions/posts-action";
import Card from "../card/Card";
import Loader from "../loader/Loader";
import Pagination from "../pagination/Pagination";
import './Posts.scss';

const Posts: FunctionComponent = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(10);

  useEffect(() => {
    downloadPostsAction();
  }, []);

  const { posts, loading } = useSelect();
  if (loading || posts?.length === 0) {
    return <Loader />;
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className='postPaginatorWrapper'>
      <div className='postPaginator'>
        <div className='posts'>
          {currentPosts?.map(post => <Card {...post} key={post.id} />)}
        </div>
      </div>
      <div className='paginator'>
        {posts && <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />}
      </div>
    </div>
  )
}

export default Posts
