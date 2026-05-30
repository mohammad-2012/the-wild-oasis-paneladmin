import styled from "styled-components";
import { HiArrowUpOnSquare, HiEye, HiTrash } from "react-icons/hi2";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Tag from "../../ui/Tag";
import { formatCurrency } from "../../utils/helpers";
import { useCheckout } from "../check-in-out/useCheckout";
import { useDeleteBooking } from "./useDeleteBooking";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    font-size: 1.2rem;
    color: var(--color-grey-500);
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: flex-end;
`;

const DesktopRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  @media (max-width: 1024px) {
    grid-template-columns: 0.8fr 1.8fr 2.2fr 1.3fr 0.9fr 0.8rem;
    column-gap: 1.6rem;
    padding: 1rem 1.6rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileRow = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-md);
    padding: 1.6rem;
    margin-bottom: 1.2rem;
  }
`;

const MobileItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:last-child {
    border-bottom: none;
  }

  & .label {
    font-weight: 600;
    font-size: 1.3rem;
    color: var(--color-grey-500);
  }

  & .value {
    font-size: 1.4rem;
    color: var(--color-grey-700);
    text-align: right;
  }
`;

const MobileActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 0.8rem;
  border-top: 1px solid var(--color-grey-100);
`;

function BookingRow({ booking }) {
  const navigate = useNavigate();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();

  const {
    id: bookingId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  } = booking;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  const statusText = status.replace("-", " ");

  const renderDesktop = () => (
    <DesktopRow>
      <Cabin>{cabinName}</Cabin>
      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>
      <Stacked>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
        <span>{numNights} nights</span>
      </Stacked>
      <Tag type={statusToTagName[status]}>{statusText}</Tag>
      <Amount>{formatCurrency(totalPrice)}</Amount>
      <ActionButtons>
        <Menus.Menu>
          <Menus.Toggle id={bookingId} />
          <Menus.List id={bookingId}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/bookings/${bookingId}`)}
            >
              See details
            </Menus.Button>
            {status === "unconfirmed" && (
              <Menus.Button
                icon={<HiArrowUpOnSquare />}
                onClick={() => navigate(`/checkin/${bookingId}`)}
              >
                Check in
              </Menus.Button>
            )}
            <Modal>
              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
              <Modal.Window name="delete">
                <ConfirmDelete
                  resourceName="booking"
                  disabled={isDeleting}
                  onConfirm={() => deleteBooking(bookingId)}
                />
              </Modal.Window>
            </Modal>
          </Menus.List>
        </Menus.Menu>
        {status === "checked-in" && (
          <button
            onClick={() => checkout(bookingId)}
            disabled={isCheckingOut}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.4rem",
            }}
          >
            <HiArrowUpOnSquare />
          </button>
        )}
      </ActionButtons>
    </DesktopRow>
  );

  const renderMobile = () => (
    <MobileRow>
      <MobileItem>
        <span className="label">Cabin</span>
        <span className="value">{cabinName}</span>
      </MobileItem>
      <MobileItem>
        <span className="label">Guest</span>
        <span className="value">{guestName}</span>
      </MobileItem>
      <MobileItem>
        <span className="label">Email</span>
        <span className="value">{email}</span>
      </MobileItem>
      <MobileItem>
        <span className="label">Dates</span>
        <span className="value">
          {format(new Date(startDate), "MMM dd yyyy")} -{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
          <br />
          <span style={{ fontSize: "1.2rem", color: "var(--color-grey-500)" }}>
            ({numNights} nights)
          </span>
        </span>
      </MobileItem>
      <MobileItem>
        <span className="label">Status</span>
        <span className="value">
          <Tag type={statusToTagName[status]}>{statusText}</Tag>
        </span>
      </MobileItem>
      <MobileItem>
        <span className="label">Amount</span>
        <span className="value">{formatCurrency(totalPrice)}</span>
      </MobileItem>
      <MobileActions>
        <button
          onClick={() => navigate(`/bookings/${bookingId}`)}
          style={{
            background: "var(--color-grey-100)",
            border: "none",
            padding: "0.6rem 1.2rem",
            borderRadius: "var(--border-radius-sm)",
            cursor: "pointer",
            fontSize: "1.2rem",
          }}
        >
          Details
        </button>
        {status === "unconfirmed" && (
          <button
            onClick={() => navigate(`/checkin/${bookingId}`)}
            style={{
              background: "var(--color-brand-600)",
              color: "white",
              border: "none",
              padding: "0.6rem 1.2rem",
              borderRadius: "var(--border-radius-sm)",
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
          >
            Check in
          </button>
        )}
        {status === "checked-in" && (
          <button
            onClick={() => checkout(bookingId)}
            disabled={isCheckingOut}
            style={{
              background: "var(--color-green-700)",
              color: "white",
              border: "none",
              padding: "0.6rem 1.2rem",
              borderRadius: "var(--border-radius-sm)",
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
          >
            Check out
          </button>
        )}
        <Modal>
          <Modal.Open opens="delete">
            <button
              style={{
                background: "var(--color-red-700)",
                color: "white",
                border: "none",
                padding: "0.6rem 1.2rem",
                borderRadius: "var(--border-radius-sm)",
                cursor: "pointer",
                fontSize: "1.2rem",
              }}
            >
              Delete
            </button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="booking"
              disabled={isDeleting}
              onConfirm={() => deleteBooking(bookingId)}
            />
          </Modal.Window>
        </Modal>
      </MobileActions>
    </MobileRow>
  );

  return (
    <>
      {renderDesktop()}
      {renderMobile()}
    </>
  );
}

export default BookingRow;
