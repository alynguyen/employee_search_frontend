// Util functions

import moment from 'moment';

export const sortAsc = (arr, key) => {
    let newArr = arr.sort((a, b) => {
        if (key === 'id') {
            return parseInt(a[key]) < parseInt(b[key]) ? -1 : 1;
        }
        if (key === 'lastName') {
            if (a[key] === b[key]) {
                return a['firstName'] < b['firstName'] ? -1 : 1;
            } else {
                return a[key] < b[key] ? -1 : 1;
            }
        }
        if (key === 'firstName') {
            if (a[key] === b[key]) {
                return a['lastName'] < b['lastName'] ? -1 : 1;
            } else {
                return a[key] < b[key] ? -1 : 1;
            }
        }
        if (key === 'dob') {
            return Date.parse(a[key]) < Date.parse(b[key]) ? -1 : 1;
        }
        return a[key] < b[key] ? -1 : 1;
    });
    return newArr;
}

export const sortDsc = (arr, key) => {
    let newArr = arr.sort((a, b) => {
        if (key === 'id') {
            return parseInt(a[key]) > parseInt(b[key]) ? -1 : 1;
        }
        if (key === 'lastName') {
            if (a[key] === b[key]) {
                return a['firstName'] > b['firstName'] ? -1 : 1;
            } else {
                return a[key] > b[key] ? -1 : 1;
            }
        }
        if (key === 'firstName') {
            if (a[key] === b[key]) {
                return a['lastName'] > b['lastName'] ? -1 : 1;
            } else {
                return a[key] > b[key] ? -1 : 1;
            }
        }
        if (key === 'dob') {
            return Date.parse(a[key]) > Date.parse(b[key]) ? -1 : 1;
        }
        return a[key] > b[key] ? -1 : 1;
    });
    return newArr;
}

export const getFilters = (data, key) => {
    let set = new Set();
    let filters = [];

    data.forEach(d => {
        set.add(d[key]);
    })
    for (let value of set) {
        let temp = {
            value: value,
            label: value
        }
        filters.push(temp);
    }
    return filters;
}

const ageRangeLabels = (age) => {
    if (age <= 24) {
        return '18 - 24'
    } else if (age <= 32) {
        return '25 - 32'
    } else if (age <= 45) {
        return '33 - 45'
    } else if (age <= 55) {
        return '46 - 55'
    } else {
        return '65+'
    }
}

const ageRange = (age) => {
    if (age <= 24) {
        return 24
    } else if (age <= 32) {
        return 32
    } else if (age <= 45) {
        return 45
    } else if (age <= 55) {
        return 55
    } else {
        return 65
    }
}

export const getAgeFilters = (data) => {
    let set = new Set();
    let filters = [];
    data.forEach(d => {
        let age = moment().diff(d.dob, 'years');
        set.add(ageRange(age))
    })
    for (let value of set) {
        let temp = {
            value: value,
            label: ageRangeLabels(value)
        }
        filters.push(temp);
    }
    return filters;
}

export const filterResults = async(data, filters, filterName) => {
    let results = [];
    data.forEach(d => {
        filters.forEach(f => {
            if (f.value === d[filterName]) {
                results.push(d)
            }
        })
    })
    return results;
}

export const filterResultsAge = async(data, filters) => {
    let results = [];
    data.forEach(d => {
        const age = moment().diff(d.dob, 'years');
        filters.forEach(f => {
            if (f.value <= age) {
                const check = results.some(r => r.id === d.id)
                if (!check) results.push(d)
            }
        })
    })
    return results;
}