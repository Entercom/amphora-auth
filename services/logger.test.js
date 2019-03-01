'use strict';

const _startCase = require('lodash/startCase'),
  filename = __filename.split('/').pop().split('.').shift(),
  lib = require(`./${filename}`),
  clayLog = require('clay-log');

describe(_startCase(filename), function () {
  let fakeLog;

  beforeEach(function () {
    fakeLog = jest.fn();
    jest.mock(clayLog);
  });

  describe('init', function () {
    const fn = lib[this.description];

    it('returns if a log instance is set', function () {
      lib.setLogger(fakeLog);
      fn();
      expect(clayLog.init).not.toBeCalled();
    });
  });
});