# dp-slider



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description | Type      | Default       |
| ----------------- | ------------------- | ----------- | --------- | ------------- |
| `autoPlay`        | `auto-play`         |             | `boolean` | `false`       |
| `autoPlayTimer`   | `auto-play-timer`   |             | `number`  | `3000`        |
| `childsClassName` | `childs-class-name` |             | `string`  | `'.dp-slide'` |
| `dir`             | `dir`               |             | `string`  | `'ltr'`       |
| `infinite`        | `infinite`          |             | `boolean` | `false`       |
| `itemsPerSlide`   | `items-per-slide`   |             | `number`  | `1`           |
| `showButtons`     | `show-buttons`      |             | `boolean` | `false`       |
| `showPointers`    | `show-pointers`     |             | `boolean` | `true`        |
| `showThumbnails`  | `show-thumbnails`   |             | `boolean` | `false`       |
| `threshold`       | `threshold`         |             | `number`  | `10`          |
| `timing`          | `timing`            |             | `number`  | `400`         |


## Events

| Event            | Description | Type               |
| ---------------- | ----------- | ------------------ |
| `afterSlimInit`  |             | `CustomEvent<any>` |
| `afterSlimSlide` |             | `CustomEvent<any>` |


## Methods

### `goToNext(e?: any) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `goToPrevious(e?: any) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `setPan(enabled: boolean) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `slideTo(n: number) => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
