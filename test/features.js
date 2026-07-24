/*
 * This file is part of the Symfony Webpack Encore package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import stripAnsi from 'strip-ansi';
import { vi, describe, it, expect } from 'vitest';

import features from '../lib/features.ts';
import packageHelper from '../lib/package-helper.ts';

const mockInstalledVersions = function (versions) {
    return vi
        .spyOn(packageHelper, 'getPackageVersion')
        .mockImplementation((name) => (name in versions ? versions[name] : null));
};

describe('features', function () {
    describe('ensureDevServerVersionRequirements', function () {
        it('does nothing when webpack-dev-server is not installed', function () {
            const stub = mockInstalledVersions({ webpack: '5.82.0', 'webpack-cli': '6.0.0' });

            expect(() => features.ensureDevServerVersionRequirements()).not.toThrow();
            stub.mockRestore();
        });

        it('does nothing with webpack-dev-server 5, even with old webpack/webpack-cli', function () {
            const stub = mockInstalledVersions({
                'webpack-dev-server': '5.1.0',
                webpack: '5.82.0',
                'webpack-cli': '6.0.0',
            });

            expect(() => features.ensureDevServerVersionRequirements()).not.toThrow();
            stub.mockRestore();
        });

        it('throws with webpack-dev-server 6 and a too-old webpack', function () {
            const stub = mockInstalledVersions({
                'webpack-dev-server': '6.0.0',
                webpack: '5.90.0',
                'webpack-cli': '7.0.2',
            });

            try {
                features.ensureDevServerVersionRequirements();
                throw new Error('Expected ensureDevServerVersionRequirements to throw');
            } catch (e) {
                const message = stripAnsi(String(e));
                expect(message).to.contain('webpack-dev-server 6.0.0 requires');
                expect(message).to.contain('webpack: installed 5.90.0, required ^5.102.0');
                expect(message).not.to.contain('webpack-cli: installed');
            }

            stub.mockRestore();
        });

        it('throws with webpack-dev-server 6 and a too-old webpack-cli', function () {
            const stub = mockInstalledVersions({
                'webpack-dev-server': '6.0.0',
                webpack: '5.102.0',
                'webpack-cli': '6.0.0',
            });

            try {
                features.ensureDevServerVersionRequirements();
                throw new Error('Expected ensureDevServerVersionRequirements to throw');
            } catch (e) {
                const message = stripAnsi(String(e));
                expect(message).to.contain('webpack-cli: installed 6.0.0, required ^7.0.2');
                expect(message).not.to.contain('webpack: installed');
            }

            stub.mockRestore();
        });

        it('lists both packages when both are too old', function () {
            const stub = mockInstalledVersions({
                'webpack-dev-server': '6.0.0',
                webpack: '5.90.0',
                'webpack-cli': '6.0.0',
            });

            try {
                features.ensureDevServerVersionRequirements();
                throw new Error('Expected ensureDevServerVersionRequirements to throw');
            } catch (e) {
                const message = stripAnsi(String(e));
                expect(message).to.contain('webpack: installed 5.90.0, required ^5.102.0');
                expect(message).to.contain('webpack-cli: installed 6.0.0, required ^7.0.2');
            }

            stub.mockRestore();
        });

        it('does nothing with webpack-dev-server 6 and satisfying versions', function () {
            const stub = mockInstalledVersions({
                'webpack-dev-server': '6.0.0',
                webpack: '5.102.0',
                'webpack-cli': '7.0.2',
            });

            expect(() => features.ensureDevServerVersionRequirements()).not.toThrow();
            stub.mockRestore();
        });
    });
});
