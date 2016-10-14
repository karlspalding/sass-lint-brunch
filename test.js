'use strict';

const expect = require('chai').expect;
const Plugin = require('./');

describe('Plugin', () => {
    let plugin;

    beforeEach(() => {
        plugin = new Plugin({
            plugins: {
                sassLint: {
                    output: false,
                    file: null,
                    options: {}
                }
            }
        });
    });

    it('should be an object', () => {
        expect(plugin).to.be.ok;
    });

    it('should have a #lint method', () => {
        expect(plugin).to.respondTo('lint');
    });

    describe('#lint()', () => {

        it('should return a resolved Promise on success', () => {
            const data = '.test { display: none; }\n';

            return plugin.lint(data).then(() => {
                expect(true).to.be.ok;
            }, () => {
                expect(false).to.be.ok; 
            });
        });
        
        it('should fail on errors', () => {
            const data = '.test { display: none; }';

            return plugin.lint(data).then(() => {
                expect(false).to.be.ok; 
            }, result => {
                expect(result).to.be.null;
            });
        });

    });
});
