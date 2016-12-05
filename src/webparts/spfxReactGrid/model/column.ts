﻿import GridRowStatus from "./GridRowStatus";
export default class ColumnRef {
    public constructor(
        public guid: string,
        public name: string,
        public editable: boolean = true,
        public gridRowStatus: GridRowStatus = GridRowStatus.new)
    { }
}
