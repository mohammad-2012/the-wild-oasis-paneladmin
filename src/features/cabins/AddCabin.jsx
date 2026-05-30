import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import styled from "styled-components";

const AddCabinWrapper = styled.div`
  margin-top: 1.6rem;

  @media (max-width: 768px) {
    margin-top: 1.2rem;
  }

  @media (max-width: 480px) {
    margin-top: 1rem;

    button {
      width: 100%;
    }
  }
`;

function AddCabin() {
  return (
    <AddCabinWrapper>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </AddCabinWrapper>
  );
}

export default AddCabin;

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }
