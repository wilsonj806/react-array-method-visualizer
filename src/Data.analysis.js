// need to make an array using this otherwise the current array won't have access to the stuff

function showMapReact(component, key, arr, callback) {
  var T, A, k;
  console.log(component.state);
  if (component === null) {
    throw new TypeError('this is null or not defined');
  }
  if (!component.state) {
    throw new TypeError('this is not a React component');
  }
  var O = Object(arr);
  var len = O.length >>> 0;


  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  if (arguments.length > 1) {
    T = arguments[1];
  }

  A = new Array(len);

  k = 0;

  while (k < len) {

    var kValue, mappedValue;

    if (k in O) {
      kValue = O[k];

      mappedValue = callback.call(T, kValue, k, O);
      A[k] = mappedValue;
    }
    k++;
    component.setState({key:[...A]});
  }

  return A;
}

function showNum(num) { console.log(num); }


function showForEach(key,arr, callback) { console.log('hi'); }

export { showMapReact , showForEach, showNum };