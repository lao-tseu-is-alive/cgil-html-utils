import {getEl, isFunction, dateIso2Fr, dateFr2Iso}  from '../src/cgHtmlUtils';


test('cgHtmlUtils.getEl(\'mydiv\') should return the correct div', () => {
    document.body.innerHTML = '<div id=mydiv>testing div getEl</div>'
    const myDiv = document.getElementById('mydiv')
    expect(getEl('mydiv')).toBe(myDiv)
})

test('cgHtmlUtils.isFunction(a => a + 1) should return true', () => {
    expect(isFunction(a => a + 1)).toBe(true)
})

test('cgHtmlUtils.dateIso2Fr(2018-08-21) should return 21-08-2018', () => {
    expect(dateIso2Fr('2018-08-21')).toBe('21-08-2018')
})

test('cgHtmlUtils.dateFr2Iso(21-08-2018) should return 2018-08-21', () => {
    expect(dateFr2Iso('21-08-2018')).toBe('2018-08-21')
})


