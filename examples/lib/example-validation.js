import { range } from 'lodash';
import { TextEditor } from 'slickgrid2';
function validateRequiredField(value) {
    if (value == null || value === undefined || value.length === 0) {
        return {
            valid: false,
            msg: 'This is a required field'
        };
    }
    return {
        valid: true,
        msg: null
    };
}
var columns = [
    {
        id: 'title',
        name: 'Title',
        field: 'title',
        width: 200,
        editor: TextEditor,
        validator: validateRequiredField
    },
    {
        id: 'priority',
        name: 'Priority',
        field: 'priority',
        width: 80
    }
];
var data = range(0, 100).map(function (i) { return ({
    title: "Task " + i,
    priority: 'Medium'
}); });
// CKTODO
// const grid = new SlickGrid('#myGrid', data, columns, {
//   rowHeight: 30
// })
