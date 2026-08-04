# JavaScript Advanced Array Methods

## Table of Contents

1.  forEach()
2.  map()
3.  filter()
4.  find()
5.  findIndex()
6.  some()
7.  every()
8.  reduce()

------------------------------------------------------------------------

# 1. forEach()

## Definition

`forEach()` array ke har element par callback function execute karta
hai. Ye sirf action perform karta hai aur **new array return nahi
karta**.

## Syntax

``` js
array.forEach(callbackFn, thisArg)
```

### Parameters

-   callbackFn (required)
-   thisArg (optional)

### Callback Parameters

``` js
(value, index, array)
```

  Parameter   Meaning           Required
  ----------- ----------------- -------------------
  value       Current element   Yes (mostly used)
  index       Current index     Optional
  array       Original array    Optional

### Example

``` js
const nums=[1,2,3];
nums.forEach((value)=>{
  console.log(value);
});
```

### Returns

`undefined`

### Use Cases

-   Printing data
-   Updating DOM
-   Logging
-   Side effects

------------------------------------------------------------------------

# 2. map()

## Definition

`map()` har element ko transform karke **new array** return karta hai.

## Syntax

``` js
array.map(callbackFn, thisArg)
```

### Callback Parameters

``` js
(value,index,array)
```

### Example

``` js
const nums=[1,2,3];
const result=nums.map(v=>v*2);
console.log(result);
```

Output

``` js
[2,4,6]
```

### Returns

New Array

### Use Cases

-   Transform data
-   Formatting
-   Creating new arrays

------------------------------------------------------------------------

# 3. filter()

## Definition

`filter()` sirf un elements ko select karta hai jo condition satisfy
karein aur new array return karta hai.

## Example

``` js
const nums=[1,2,3,4,5,6];
const even=nums.filter(n=>n%2===0);
console.log(even);
```

Output

``` js
[2,4,6]
```

### Returns

New Array

------------------------------------------------------------------------

# 4. find()

## Definition

Pehla matching element return karta hai. Agar match na mile to
`undefined`.

``` js
const nums=[10,20,30];
const result=nums.find(n=>n>15);
console.log(result);
```

Output

``` js
20
```

Returns: Element / undefined

------------------------------------------------------------------------

# 5. findIndex()

## Definition

Pehle matching element ka index return karta hai. Agar na mile to `-1`.

``` js
const nums=[10,20,30];
const index=nums.findIndex(n=>n>15);
console.log(index);
```

Output

``` js
1
```

Returns: Index / -1

------------------------------------------------------------------------

# 6. some()

## Definition

Check karta hai ke **kam az kam ek** element condition satisfy karta hai
ya nahi.

``` js
const nums=[10,20,30];
console.log(nums.some(n=>n>25));
```

Output

``` js
true
```

Returns: true / false

------------------------------------------------------------------------

# 7. every()

## Definition

Check karta hai ke **saare** elements condition satisfy karte hain ya
nahi.

``` js
const nums=[10,20,30];
console.log(nums.every(n=>n>5));
```

Output

``` js
true
```

Returns: true / false

------------------------------------------------------------------------

# 8. reduce()

## Definition

Array ke tamam elements ko reduce karke **ek single final value** return
karta hai.

## Syntax

``` js
array.reduce(callbackFn, initialValue)
```

### Callback Parameters

``` js
(accumulator,currentValue,index,array)
```

  Parameter      Meaning
  -------------- -----------------
  accumulator    Previous result
  currentValue   Current element
  index          Current index
  array          Original array

### Example

``` js
const nums=[10,20,30];
const total=nums.reduce((acc,current)=>{
 return acc+current;
},0);

console.log(total);
```

Output

``` js
60
```

### Step by Step

    accumulator   currentValue   Result
  ------------- -------------- --------
              0             10       10
             10             20       30
             30             30       60

Returns: Single Value

------------------------------------------------------------------------

# Quick Comparison

  Method      Returns        Main Purpose
  ----------- -------------- ----------------------
  forEach     undefined      Action
  map         New Array      Transform
  filter      New Array      Select
  find        Element        First match
  findIndex   Index          First matching index
  some        true/false     At least one
  every       true/false     All elements
  reduce      Single value   Sum/Aggregation

## Golden Interview Lines

-   forEach → Action only.
-   map → Transform + New Array.
-   filter → Select matching elements.
-   find → First matching element.
-   findIndex → First matching index.
-   some → At least one match.
-   every → All must match.
-   reduce → Single final value.
