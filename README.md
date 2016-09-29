[![Build Status](https://travis-ci.org/karlspalding/sass-lint-brunch.svg?branch=master)](https://travis-ci.org/karlspalding/sass-lint-brunch)

sass-lint-brunch
===================

Adds [sass-lint](https://github.com/sasstools/sass-lint) support to [brunch](http://brunch.io).

## Install
	npm install --save-dev sass-lint-brunch

## Usage

The plugin will run automatically. Note that by default brunch
ignores file names starting with an underscore.

## Configuration

The following defaults can be overridden in `brunch-config.js`:


```javascript
{
  ...
  plugins: {
    sassLint: {
      file: '.sass-lint.yml',
      options: {
        ...
      }
    }
  }
  ... 
}
```

The `file` field can be used to specify an alternative YAML configuration for
`sass-lint`.

The `options` field is passed through unchanged to `sass-lint`.
