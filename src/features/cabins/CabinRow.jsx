import styled from "styled-components";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";

import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteCabin } from "./useDeleteCabin";
import CreateCabinForm from "./CreateCabinForm";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  @media (max-width: 1024px) {
    grid-template-columns: 0.7fr 1.6fr 2fr 1.2fr 1.2fr 1fr;
    column-gap: 1.6rem;
    padding: 1rem 1.6rem;
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  border-radius: var(--border-radius-sm);

  @media (max-width: 1024px) {
    width: 5.6rem;
  }
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
  padding-right: 1rem;

  @media (max-width: 1024px) {
    font-size: 1.4rem;
    padding-right: 0.5rem;
  }
`;

const Capacity = styled.div`
  padding-right: 1rem;
  white-space: normal;
  word-break: keep-all;

  @media (max-width: 1024px) {
    padding-right: 0.5rem;
    font-size: 1.3rem;
  }
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 500;
  white-space: nowrap;
  padding-right: 1rem;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
    padding-right: 0.5rem;
  }
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
  white-space: nowrap;
  padding-right: 1rem;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
    padding-right: 0.5rem;
  }
`;

const ActionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;

  @media (max-width: 1024px) {
    padding-right: 0.5rem;
  }
`;

function CabinRow({ cabin }) {
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
  } = cabin;

  const navigate = useNavigate();
  const { isDeleting, deleteCabin } = useDeleteCabin();

  return (
    <TableRow>
      <Img src={image} alt={name} />
      <Cabin>{name}</Cabin>
      <Capacity>Fits up to {maxCapacity} guests</Capacity>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}
      <ActionWrapper>
        <Menus.Menu>
          <Menus.Toggle id={cabinId} />
          <Menus.List id={cabinId}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/cabins/${cabinId}`)}
            >
              See details
            </Menus.Button>
            <Modal>
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>
              <Modal.Window name="edit">
                <CreateCabinForm cabinToEdit={cabin} />
              </Modal.Window>
            </Modal>
            <Modal>
              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
              <Modal.Window name="delete">
                <ConfirmDelete
                  resourceName="cabins"
                  disabled={isDeleting}
                  onConfirm={() => deleteCabin(cabinId)}
                />
              </Modal.Window>
            </Modal>
          </Menus.List>
        </Menus.Menu>
      </ActionWrapper>
    </TableRow>
  );
}

export default CabinRow;
