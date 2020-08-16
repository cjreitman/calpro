import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import useLogs from './components/hooks/useLogs';
import Table from './components/presentational/Table/Table';

const PageWrapper = styled('div')`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const TableWrapper = styled('div')`
  display: flex;
  justify-content: center;
  width:80%;
`;

const TodaysLogs = () => {
  const {
    currentUser,
    todaysLogs,
    handleFetchTodaysLogs,
  } = useLogs();

  console.log(todaysLogs)

  useEffect(() => {
    if (currentUser) {
      handleFetchTodaysLogs(currentUser.id)
    }
  }, []);

  const columns = [
    {
      name: 'Food',
      selector: 'type',
      sortable: true,
      cell: (row) => {
        return row.type
      },
    },
    {
      name: 'Cals',
      selector: 'totalCals',
      sortable: true,
      cell: (row) => {
        return row.totalCals
      },
      center: true
    },
    {
      name: 'Protein',
      selector: 'totalProtein',
      sortable: true,
      cell: (row) => {
        return row.totalProtein
      },
      center: true
    },
    {
      name: 'Grams',
      selector: 'grams',
      sortable: true,
      cell: (row) => {
        return row.grams
      },
      center: true
    },
  ];

  return (
    <PageWrapper>
      <TableWrapper>
      <Table
        columns={columns}
        data={todaysLogs}
        highlightOnHover
        pointerOnHover
        onRowClicked={row => console.log(row)}
        noHeader
      />
      </TableWrapper>
    </PageWrapper>
  );
};

export default TodaysLogs;