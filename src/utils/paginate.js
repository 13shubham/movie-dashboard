import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    // we need to slice the array and pick using take method
    //_(items): this will wrap the array using lodash but we need a regular array value so we use value at the endreturn 
    return _(items)
        .slice(startIndex)
        .take(pageSize)
        .value()
}