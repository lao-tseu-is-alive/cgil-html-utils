import {
    getEl,
    isFunction,
    functionExist,
    isNullOrUndefined,
    isEmptyField,
    addClass,
    delClass,
    dateIso2Fr,
    dateFr2Iso }  from '../src/cgHtmlUtils';


test('cgHtmlUtils.getEl(\'mydiv\') should return the correct div', () => {
    document.body.innerHTML = '<div id=mydiv>testing div getEl</div>';
    const myDiv = document.getElementById('mydiv');
    expect(getEl('mydiv')).toBe(myDiv);
})

test('cgHtmlUtils.isFunction(a => a + 1) should return true', () => {
    expect(isFunction(a => a + 1)).toBe(true);
})

test('cgHtmlUtils.functionExist(myFunctionName) should return true', () => {
    const myFunctionName = (v)=> v+1;
    expect(functionExist(myFunctionName)).toBe(true)
})

test('cgHtmlUtils.isNullOrUndefined(null) should return true', () => {
    expect(isNullOrUndefined(null)).toBe(true)
})

test('cgHtmlUtils.isEmptyField(myemptyinput) should return true if input as no value', () => {
    document.body.innerHTML = '<input id=myinput value="myvalue"/><input id=myemptyinput />';
    expect(isEmptyField('myinput')).toBe(false);
    expect(isEmptyField('myemptyinput')).toBe(true);
})

test('cgHtmlUtils.addClass(\'mydiv\', red) should add the class red to the div', () => {
    document.body.innerHTML = '<div id=mydiv>testing div getEl</div>';
    const myDiv = document.getElementById('mydiv');
    addClass('mydiv', 'red')
    expect(myDiv.className.includes('red')).toBe(true);
})

test('cgHtmlUtils.delClass(\'mydiv\', red) should remove the class red from the div', () => {
    document.body.innerHTML = '<div id=mydiv class="red blue">testing div getEl</div>';
    const myDiv = document.getElementById('mydiv');
    delClass('mydiv', 'red')
    expect(myDiv.className.includes('red')).toBe(false);
    // but should let other class in place
    expect(myDiv.className.includes('blue')).toBe(true);
})



test('cgHtmlUtils.dateIso2Fr(2018-08-21) should return 21-08-2018', () => {
    expect(dateIso2Fr('2018-08-21')).toBe('21-08-2018')
})

test('cgHtmlUtils.dateFr2Iso(21-08-2018) should return 2018-08-21', () => {
    expect(dateFr2Iso('21-08-2018')).toBe('2018-08-21')
})


