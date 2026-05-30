import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";
import styled from "styled-components";

const TableWrapper = styled.div`
  overflow-x: auto;

  @media (max-width: 768px) {
    margin: 0 -1rem;
    padding: 0 1rem;
  }
`;

const StyledTable = styled(Table)`
  @media (max-width: 1024px) {
    min-width: 800px;
  }
`;

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!cabins.length) return <Empty resourceName="cabins" />;

  const filterValue = searchParams.get("discount") || "all";

  let filteredCabins;
  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  const sortBy = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = [...filteredCabins].sort((a, b) => {
    if (typeof a[field] === "string") {
      return modifier * a[field].localeCompare(b[field]);
    }
    return (a[field] - b[field]) * modifier;
  });

  return (
    <TableWrapper>
      <Menus>
        <StyledTable columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
          <Table.Header>
            <div></div>
            <div>Cabin</div>
            <div>Capacity</div>
            <div>Price</div>
            <div>Discount</div>
            <div></div>
          </Table.Header>

          <Table.Body
            data={sortedCabins}
            render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
          />
        </StyledTable>
      </Menus>
    </TableWrapper>
  );
}

export default CabinTable;
