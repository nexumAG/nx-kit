import React from 'react';
import { Table } from '../src';

export default {
  title: '@nx-kit/table',
  component: Table,
};

export const Default = () => (
  <Table aria-label="Table with selection" selectionMode="multiple">
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
