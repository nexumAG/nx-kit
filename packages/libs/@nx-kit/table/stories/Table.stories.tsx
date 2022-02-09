import React from 'react';
import { Table, useAsyncList } from '../src';

export default {
  title: '@nx-kit/table',
  component: Table,
  subcomponents: {
    'Table.Cell': Table.Cell,
    'Table.Column': Table.Column,
    'Table.Row': Table.Row,
    'Table.Body': Table.Body,
    'Table.Header': Table.Header,
  },
  argTypes: {
    selectionMode: {
      options: ['multiple', 'single'],
      control: { type: 'radio' },
    },
  },
};

export const Default = () => (
  <Table aria-label="Basic data" skin="default">
    <Table.Header>
      <Table.Column>Name</Table.Column>
      <Table.Column>Type</Table.Column>
      <Table.Column>Level</Table.Column>
    </Table.Header>
    <Table.Body>
      <Table.Row key="1">
        <Table.Cell>Charizard</Table.Cell>
        <Table.Cell>Fire, Flying</Table.Cell>
        <Table.Cell>67</Table.Cell>
      </Table.Row>
      <Table.Row key="2">
        <Table.Cell>Blastoise</Table.Cell>
        <Table.Cell>Water</Table.Cell>
        <Table.Cell>56</Table.Cell>
      </Table.Row>
      <Table.Row key="3">
        <Table.Cell>Venusaur</Table.Cell>
        <Table.Cell>Grass, Poison</Table.Cell>
        <Table.Cell>83</Table.Cell>
      </Table.Row>
      <Table.Row key="4">
        <Table.Cell>Pikachu</Table.Cell>
        <Table.Cell>Electric</Table.Cell>
        <Table.Cell>100</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export const DynamicData = () => {
  const rows = [
    { id: 1, first: 'Sam', last: 'Smith', age: 36, birthday: 'May 3' },
    { id: 2, first: 'Julia', last: 'Jones', age: 24, birthday: 'February 10' },
    { id: 3, first: 'Peter', last: 'Parker', age: 28, birthday: 'September 7' },
    { id: 4, first: 'Bruce', last: 'Wayne', age: 32, birthday: 'December 18' },
  ];
  const columns = [
    { name: 'First Name', key: 'first' },
    { name: 'Last Name', key: 'last' },
    { name: 'Age', key: 'age' },
    { name: 'Birthday', key: 'birthday' },
  ];

  return (
    <Table skin="default" aria-label="Table with dynamic data" selectionMode="single">
      <Table.Header columns={columns}>
        {(column) => <Table.Column>{column.name}</Table.Column>}
      </Table.Header>
      <Table.Body items={rows}>
        {(item: any) => (
          <Table.Row>{(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}</Table.Row>
        )}
      </Table.Body>
    </Table>
  );
};

export const NestedColumn = () => {
  const rows = [
    { id: 1, first: 'Sam', last: 'Smith', age: 36, birthday: 'May 3' },
    { id: 2, first: 'Julia', last: 'Jones', age: 24, birthday: 'February 10' },
    { id: 3, first: 'Peter', last: 'Parker', age: 28, birthday: 'September 7' },
    { id: 4, first: 'Bruce', last: 'Wayne', age: 32, birthday: 'December 18' },
  ];
  const columns = [
    {
      name: 'Name',
      key: 'name',
      children: [
        { name: 'First Name', key: 'first', isRowHeader: true },
        { name: 'Last Name', key: 'last', isRowHeader: true },
      ],
    },
    {
      name: 'Information',
      key: 'info',
      children: [
        { name: 'Age', key: 'age' },
        { name: 'Birthday', key: 'birthday' },
      ],
    },
  ];

  return (
    <Table skin="default" aria-label="Table with nested columns">
      <Table.Header columns={columns}>
        {(column: any) => (
          <Table.Column isRowHeader={column.isRowHeader} childColumns={column.children}>
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={rows}>
        {(item: any) => (
          <Table.Row>{(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}</Table.Row>
        )}
      </Table.Body>
    </Table>
  );
};

export const AsyncSortTable = () => {
  const list = useAsyncList({
    async load({ signal }) {
      const res = await fetch(`https://swapi.py4e.com/api/people/?search`, {
        signal,
      });
      const json = await res.json();
      return {
        items: json.results,
      };
    },

    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a: any, b: any) => {
          const first = a[sortDescriptor.column as any];
          const second = b[sortDescriptor.column as any];
          let cmp = (parseInt(first, 10) || first) < (parseInt(second, 10) || second) ? -1 : 1;
          if (sortDescriptor.direction === 'descending') {
            cmp *= -1;
          }
          return cmp;
        }),
      };
    },
  });

  return (
    <Table
      aria-label="Table with sorting"
      sortDescriptor={list.sortDescriptor}
      onSortChange={list.sort}
      skin="default"
    >
      <Table.Header>
        <Table.Column key="name" allowsSorting>
          Name
        </Table.Column>
        <Table.Column key="height" allowsSorting>
          Height
        </Table.Column>
        <Table.Column key="mass" allowsSorting>
          Mass
        </Table.Column>
        <Table.Column key="birth_year">Birth Year</Table.Column>
      </Table.Header>
      <Table.Body items={list.items}>
        {(item: any) => (
          <Table.Row key={item.name}>
            {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
};

export const TableWithSelectionMultiple = () => (
  <Table
    aria-label="Table with selection"
    skin="default"
    selectionMode="multiple"
    disabledKeys={['3']}
  >
    <Table.Header>
      <Table.Column>Name</Table.Column>
      <Table.Column>Type</Table.Column>
      <Table.Column>Level</Table.Column>
    </Table.Header>
    <Table.Body>
      <Table.Row key="1">
        <Table.Cell>Charizard</Table.Cell>
        <Table.Cell>Fire, Flying</Table.Cell>
        <Table.Cell>67</Table.Cell>
      </Table.Row>
      <Table.Row key="2">
        <Table.Cell>Blastoise</Table.Cell>
        <Table.Cell>Water</Table.Cell>
        <Table.Cell>56</Table.Cell>
      </Table.Row>
      <Table.Row key="3">
        <Table.Cell>Venusaur</Table.Cell>
        <Table.Cell>Grass, Poison</Table.Cell>
        <Table.Cell>83</Table.Cell>
      </Table.Row>
      <Table.Row key="4">
        <Table.Cell>
          <h1>hTEST</h1>
        </Table.Cell>
        <Table.Cell>Electric</Table.Cell>
        <Table.Cell>100</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);
