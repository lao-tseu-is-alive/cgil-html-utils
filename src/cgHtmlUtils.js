/* eslint-disable no-unexpected-multiline,no-sequences,no-undef */
/**
 * Created by cgil on 2/1/17.
 */
const DEV = process.env.NODE_ENV === 'development';
export const getEl = (elemntId) => (document.getElementById(elemntId))
export const isFunction = (f) => (typeof f === 'function')
export const functionExist = (functionName) => ((typeof (functionName) !== 'undefined') && (functionName !== null))
export const isNullOrUndefined = (variable) => ((typeof (variable) === 'undefined') || (variable === null))
export const isEmpty = (variable) => ((typeof (variable) === 'undefined') || (variable === null) || (variable === ''))
export const isEmptyField = function (fieldId) {
  const fieldValue = document.getElementById(fieldId).value
  return (typeof (fieldValue) === 'undefined') || (fieldValue === null) || (fieldValue === '')
}

export const addClass = function (elementId, cssClass) {
  getEl(elementId).className += ' ' + cssClass
}
export const delClass = function (elementId, cssClass) {
  getEl(elementId).className = getEl(elementId).className.replace(cssClass, '').trim()
}

export const eventFire = function (el, etype) {
  if (el.fireEvent) {
    el.fireEvent('on' + etype)
  } else {
    let evObj = document.createEvent('Events')
    evObj.initEvent(etype, true, false)
    el.dispatchEvent(evObj)
  }
}
export const dateIso2Fr = function (strIsoDate) {
  if (isEmpty(strIsoDate)) {
    return null
  } else {
    let y = null
    let m = null
    let d = null;
    [y, m, d] = strIsoDate.split('-')
    return [d, m, y].join('-')
  }
}

export const dateFr2Iso = function (strddmmyyyy) {
  if (isEmpty(strddmmyyyy)) {
    return null
  } else {
    let y = null
    let m = null
    let d = null;
    [d, m, y] = strddmmyyyy.split('-')
    return [y, m, d].join('-')
  }
}

export const unescapeHtml = function (safe) {
  if (isNullOrUndefined(safe)) {
    return safe
  } else {
    return safe.replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#39;/g, "'")
  }
}

export const getArrObjectsProperties = function (objectName) {
  let arr = []
  for (let prop in objectName) {
    if (objectName.hasOwnProperty(prop)) {
      // (DEV) ? console.log(prop) : ''
      arr.push(prop)
    }
  }
  return arr
}

export const dumpObject2String = function (objectName) {
  let objDump = ''
  const arrProp = getArrObjectsProperties(objectName)
  objDump = arrProp.reduce((a, b) => (`${a}\n ${b}: ${objectName[b]}`))
  return objDump
}

export const addImg = function (image, height, width, idElement) {
  const elem = document.createElement('img')
  elem.setAttribute('src', image)
  elem.setAttribute('height', height)
  elem.setAttribute('width', width)
  elem.setAttribute('alt', 'logo')
  document.getElementById(idElement).appendChild(elem)
}

// https://css-tricks.com/debouncing-throttling-explained-examples/
// you can also use lodash https://lodash.com/docs/4.17.4#debounce
export const debounce = function (fn, delay) {
  var timer = null
  if (DEV) console.log('## In debounce FUNCTION ')
  return function () {
    let context = this
    let args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

export const throttle = function (fn, threshhold, scope) {
  threshhold || (threshhold = 250)
  let last
  let deferTimer
  if (DEV) console.log('## In throttle FUNCTION ')
  return function () {
    var context = scope || this
    var now = +new Date()
    let args = arguments
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer)
      deferTimer = setTimeout(function () {
        last = now
        fn.apply(context, args)
      }, threshhold)
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}

export const findByKeyValue = function (arrToSearch, keyName, keyValue) {
  if (DEV) console.log(`## IN findByKeyValue searching : ${keyName}:${keyValue}`);
  if (isNullOrUndefined(keyName) || isNullOrUndefined(keyValue)) {
    console.error(`## ERROR in findByKeyValue the parameters keyName, keyValue should not be null or undefined ! ${keyName}:${keyValue}`);
    return null;
  }
  for (let i = 0; i < arrToSearch.length; i++) {
    if (arrToSearch[i][keyName] === keyValue) return arrToSearch[i];
  }
  return null;
}

/**
 * Get the URL parameters
 * source: https://css-tricks.com/snippets/javascript/get-url-variables/
 * @param  {String} url The URL
 * @return {Object}     The URL parameters
 */
export const getParams = function (url) {
	let params = {};
	let parser = document.createElement('a');
	parser.href = url;
	const query = parser.search.substring(1);
	const vars = query.split('&');
	for (let i = 0; i < vars.length; i++) {
		const pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
};
