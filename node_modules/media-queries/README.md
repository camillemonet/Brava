[url]: http://rinaldi.io
[zurb-foundation]: https://foundation.zurb.com
[cssnext]: http://cssnext.io
[myth]: http://www.myth.io
[spec]: https://drafts.csswg.org/mediaqueries/#mq-ranges

# media-queries [![Build Status](https://semaphoreci.com/api/v1/rafaelrinaldi/media-queries/branches/master/badge.svg)](https://semaphoreci.com/rafaelrinaldi/media-queries)

> CSS media queries based on [Zurb's Foundation][zurb-foundation] breakpoints

## Install

```sh
$ npm install media-queries --save
```

## Usage

```css
/* Import the library */
@import 'media-queries';

/* Then you can use available breakpoints */
@media (--large-up) {
  /* ... */
}
```

## Values

| Alias | Value |
|--- |--- |
| `small-up` | `0` |
| `small-only` | `0` → `39.9375em` |
| `medium-up` | `40em` |
| `medium-only` | `40em` → `63.9375em`
| `large-up` | `64em` |
| `large-only` | `64em` → `74.9375em` |
| `xlarge-up` | `75em` |
| `xlarge-only` | `75em` → `89.9375em` |
| `xxlarge-up` | `90em` |

## Notes

Values are exported as [media queries ranges][spec], using `@custom-media`. That's a future specification so you'll probably need a `/p(re|ost)\s?\-?processor/i`. Both [cssnext][cssnext] and [myth][myth] are really great options.

## License

MIT © [Rafael Rinaldi][url]
