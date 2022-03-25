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

#### Optional
```typescript
import {Optional} from '@uzykj/oop-utils'

Optional.absent();
Optional.fromNullable('A').orNull();
Optional.fromUndefinedable(null).isPresent();
Optional.of(Object).get();

// Out:
// { [Function: Absent] INSTANCE: [Circular] }
// A
// false
// OptionalException: Optional item must be present.
```

#### Preconditions
```typescript
import {Preconditions} from '@uzykj/oop-utils'
// 检查参数
Preconditions.checkArgument(false, 'Object Error', {size: 10234});
// 检查元素的索引
Preconditions.checkElementIndex(1, 10);
// 检查非空
Preconditions.checkNotNull(null, 'Error', true);
// 检查位置索引
Preconditions.checkPositionIndex(1, 0);
// 检查位置索引
Preconditions.checkPositionIndexes(1, 10, 1);
// 检查状态
Preconditions.checkState(false, 'Error', true);
```

## LICENSE
Apache-2.0
