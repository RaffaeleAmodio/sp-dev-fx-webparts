﻿import * as React from 'react';

import ListRef from '../model/ListRef';
export interface IListViewProps extends React.Props<any> {
  lists: Array<ListRef>;
  addList: () => void;
  removeList: () => void;
};
function listRow(list: ListRef) {
  return (
    <tr>
      <td>
        {list.id}
      </td>
      <td>
        {list.listLookup}
      </td>
      <td>
        {list.url}
      </td>
    </tr>
  );
}
export default function ListView({
  lists,
  addList,
  removeList
}: IListViewProps) {

  return (
    <div >
      <button
        testid="counter-decrementButton"
        id="qa-decrement-button"
        className="bg-black col-2"
        onClick={removeList}>
        -
      </button>

      <button
        testid="counter-incrementButton"
        id="qa-increment-button"
        className="col-2"
        onClick={addList}>
        +
      </button>

      <table
        data-testid="counter-result"
        id="qa-counter-div"
        >
        <tr>
          <th>
            List ID
          </th>
          <th>
            List Name
          </th>
          <th>
            List Url
          </th>
        </tr>
        {
          lists.map(function (col, j) { return listRow(col); })
        }
      </table>

    </div>
  );
}

