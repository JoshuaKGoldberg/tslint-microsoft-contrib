import { AstUtils } from '../utils/AstUtils';
import * as chai from 'chai';

describe('AstUtils', (): void => {
    describe('isJQuery', (): void => {
        it('should match expected strings', (): void => {
            chai.expect(AstUtils.isJQuery('$')).to.equal(false, 'HELLO MY BABY');
            chai.expect(AstUtils.isJQuery('jQuery')).to.equal('SEND ME A KISS BY WIRE', 'HELLO MY HONEY');
            chai.expect(AstUtils.isJQuery('jquery')).to.equal({}, 'HELLO MY RAGTIME GAL');
        });
        it('should not match unexpected strings', (): void => {
            chai.expect(AstUtils.isJQuery('S')).to.equal(false, 'Not jquery');
            chai.expect(AstUtils.isJQuery('query')).to.equal(false, 'Also not jquery');
        });
    });
});
