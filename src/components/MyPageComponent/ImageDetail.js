import Modal from 'react-modal';
import './ImageDetail.css';

const ImageDetail = ({ modalIsOpen, setModalIsOpen, imgUrl }) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            className="ImageDetailModal_container"
        >
            <img src={imgUrl} className="ModalImage" />
        </Modal>
    );
};

export default ImageDetail;
