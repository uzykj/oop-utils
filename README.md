# oop-utils
Object oriented related tool classes

## Install
```shell script
npm i @uzykj/oop-utils
```

## Used
### API
#### Objects
```typescript
import {Objects} from '@uzykj/oop-utils'

//equals
Objects.equals(1, 1);

//hashCode
Objects.hashCode(['1', '2']);
```
#### Hashes
```typescript
import {Hashes} from '@uzykj/oop-utils'

Hashes.hashCode('hello') //number
Hashes.hashString({type: 'demo', name: 'Demo'}) //string
Hashes.hashBuffer(new Object('a')) //Buffer
```

## LICENSE
Apache-2.0
