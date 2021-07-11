import { FunctionComponent, useState } from "react"
import { IPost } from "../../store/state-types"
import Pencil from '../../assets/icon/pencil.png';
import './Card.scss';
import BasicModal from "../modal/Modal";
import { retrievePostEditAction } from "../../store/actions/posts-action";

const Card: FunctionComponent<IPost> = (props): JSX.Element => {
  const [isModalOpen, setModal] = useState<boolean>(false)
  const { title, description } = props

  const openModal = (): void => {
    retrievePostEditAction(props);
    setModal(true)
  };

  const closeModal = (): void => {
    setModal(false)
  };

  const saveChanges = (): void => {
    setModal(false)
  };

  const modal = (): JSX.Element => {
    return (
      <BasicModal
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        saveChanges={saveChanges}
      />
    );
  };

  return (
    <div className="card">
      <div className='titleWithIcon'>
        <div className='title'>{title}</div>
        <img className='pencilIcon' onClick={openModal} src={Pencil} alt="Pencil icon" />
      </div>
      <div className='description'>{description}</div>
      {isModalOpen && modal()}
    </div>
  )
}

export default Card
