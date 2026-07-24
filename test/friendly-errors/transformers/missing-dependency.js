/*
 * This file is part of the Symfony Webpack Encore package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { describe, it, expect } from 'vitest';

import transform from '../../../lib/friendly-errors/transformers/missing-dependency.ts';

describe('transform/missing-dependency', function () {
    describe('test transform', function () {
        it('Error not typed as "module-not-found" is ignored', function () {
            const startError = {
                type: 'other-type',
                module: 'foo',
            };
            const actualError = transform(Object.assign({}, startError));

            expect(actualError).toEqual(startError);
        });

        it('Error without a module is ignored', function () {
            const startError = {
                type: 'module-not-found',
            };
            const actualError = transform(Object.assign({}, startError));

            expect(actualError).toEqual(startError);
        });

        it('Error about a relative module is left untouched', function () {
            const startError = {
                type: 'module-not-found',
                module: './missing',
            };
            const actualError = transform(Object.assign({}, startError));

            expect(actualError).toEqual(startError);
            expect(actualError.type).toBe('module-not-found');
        });

        it('Error about a Windows-style relative module is left untouched', function () {
            const startError = {
                type: 'module-not-found',
                module: '.\\missing',
            };
            const actualError = transform(Object.assign({}, startError));

            expect(actualError).toEqual(startError);
            expect(actualError.type).toBe('module-not-found');
        });

        it('Error about an installable package is re-typed', function () {
            const startError = {
                type: 'module-not-found',
                module: 'foo',
                file: './assets/app.js',
            };
            const actualError = transform(Object.assign({}, startError));

            expect(actualError.type).toBe('missing-dependency');
            expect(actualError.module).toBe('foo');
        });
    });
});
