'use strict';

var lint = require('sass-lint');

class SassLint {
    constructor (config) {
        this.config = config && config.plugins && config.plugins.sassLint || {
            file: '.sass-lint.yml',
            options: {}
        };
    }

    lint (data, path) {
        let result = lint.lintFileText({
            text: data,
            format: 'scss',
            filename: path
        }, this.config.options, this.config.file);

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
