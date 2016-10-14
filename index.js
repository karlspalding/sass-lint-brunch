'use strict';

var lint = require('sass-lint');

class SassLint {
    constructor (brunchConfig) {
        const cfg = (brunchConfig && brunchConfig.plugins && brunchConfig.plugins.sassLint) || {};
        this.linterConfigFile = cfg.file    || '.sass-lint.yml';
        this.linterOptions    = cfg.options || {};
    }

    lint (data, path) {
        let result = lint.lintFileText({
            text: data,
            format: 'scss',
            filename: path
        }, this.linterOptions, this.linterConfigFile);

        if (result.warningCount === 0 && result.errorCount === 0) {
            return Promise.resolve();
        }

        let formattedResults = lint.format([result]);

        return Promise.reject(formattedResults);
    }
}

SassLint.prototype.brunchPlugin = true;
SassLint.prototype.type = 'stylesheet';
SassLint.prototype.extension = 'scss';

module.exports = SassLint;
