posicon-hipchat [![Build Status](https://travis-ci.org/markhuge/posicon-hipchat.svg)](https://travis-ci.org/markhuge/posicon-hipchat)
===============
> Contextual emoticons for hipchat

## Install
`npm install posicon --save`

## (WTF is the point?)

I wanted to attach random (but contextually valid) emoticons to hubot msgs in hipchat.

**Example**:


```Coffeescript
{icon} = require('posicon')

msg.send data.response + icon(data.status) 
```

## Methods

- `icon(methodName)` - Allows you to pass in one of the below methods by name, instead of invoking them as functions. Handy for passing in status labels.
- `success()` - returns a random success icon
- `failure()` - returns a random failure icon
- `unknown()` - returns a random unknown icon

**Sugar methods**:

All of these are the same as `success()`:

- win
- good
- ok
- successful

All of these are the same as `failure()`:

- fail
- bad
- error
