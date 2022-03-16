import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '../../styling';
import { theme } from '../../theme-default';
import { Table } from '../src';

describe('Table component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <Table aria-label="Basic data">
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
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
