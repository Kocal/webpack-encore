/*
 * This file is part of the Symfony Webpack Encore package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import path from 'path';
import process from 'process';

import stripAnsi from 'strip-ansi';
import { describe, it, expect, afterAll } from 'vitest';

import formatter from '../../../lib/friendly-errors/formatters/missing-dependency.ts';

describe('formatters/missing-dependency', function () {
    const baseCwd = process.cwd();

    // force a deterministic package manager (npm) for the install command
    afterAll(function () {
        process.chdir(baseCwd);
    });

    function useNpm() {
        process.chdir(path.join(import.meta.dirname, '../../../fixtures/package-helper/empty'));
    }

    it('works with no errors', function () {
        useNpm();
        const actualErrors = formatter([]);
        expect(actualErrors).to.be.empty;
    });

    it('filters errors that dont have the correct type', function () {
        useNpm();
        const errors = [
            { type: 'missing-dependency', module: 'foo', file: 'app.js' },
            { type: 'other-type', module: 'bar', file: 'other.js' },
        ];

        const actualErrors = formatter(errors);
        expect(JSON.stringify(actualErrors)).toContain('foo');
        expect(JSON.stringify(actualErrors)).not.toContain('bar');
    });

    it('recommends an install command matching the package manager', function () {
        useNpm();
        const errors = [{ type: 'missing-dependency', module: 'foo', file: './assets/app.js' }];

        const actualErrors = formatter(errors).map(stripAnsi);
        expect(actualErrors).toContain('This dependency was not found:');
        expect(actualErrors).toContain('* foo in ./assets/app.js');
        expect(actualErrors).toContain('To install it, you can run: npm install foo');
    });

    it('groups several missing dependencies together', function () {
        useNpm();
        const errors = [
            { type: 'missing-dependency', module: 'foo', file: './assets/app.js' },
            { type: 'missing-dependency', module: 'bar', file: './assets/app.js' },
        ];

        const actualErrors = formatter(errors).map(stripAnsi);
        expect(actualErrors).toContain('These dependencies were not found:');
        expect(actualErrors).toContain('To install them, you can run: npm install foo bar');
    });
});
