import { FunctionComponent, useEffect, useState } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { useSelect } from '../../hooks/useSelect';
import { IPost } from '../../store/state-types';
import { editPostAction } from "../../store/actions/posts-action";
import './Modal.scss';

export interface IModal {
  isModalOpen: boolean;
  closeModal: () => void;
  saveChanges: () => void;
}

const BasicModal: FunctionComponent<IModal> = (props) => {

  const { currentPost } = useSelect();
  useEffect(() => {
    if (currentPost) {
      setpost(currentPost);
    }

  }, [currentPost]);

  const { isModalOpen, closeModal, saveChanges } = props;
  const [post, setpost] = useState<IPost>({
    title: '',
    description: ''
  });

  const enableButton = (): boolean => {
    if (post.description === currentPost?.description &&
      post.title === currentPost?.title) {
      return true
    }
    if (
      post.description === '' ||
      post.title === '') {
      return true
    }
    return false;
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setpost({
      ...post,
      [event.currentTarget.name]: event.currentTarget.value,
    });
    enableButton()
  };

  const save = (): void => {
    editPostAction(post);
    saveChanges();
  }

  return (
    <Modal
      open={isModalOpen}
      size={'tiny'}>
      <Modal.Header>Edit Fields</Modal.Header>
      <Modal.Content >
        <Modal.Description>
          <form className='form'>
            <input type='text' className='inputField' value={post.title} name='title' placeholder='Title' onChange={handleChange} />
            <textarea className='inputField' value={post.description} name='description' placeholder='Description' onChange={handleChange} />
          </form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => closeModal()}>
          Cancel
        </Button>
        <Button disabled={enableButton()}
          color='green' onClick={() => save()}>
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default BasicModal;