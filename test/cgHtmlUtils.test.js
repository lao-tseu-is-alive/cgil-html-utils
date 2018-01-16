import {isFunction}  from '../src/cgHtmlUtils';


test('cgHtmlUtils.isFunction(a => a + 1) should return true', () => {
    expect(isFunction(a => a + 1)).toBe(true)
})



