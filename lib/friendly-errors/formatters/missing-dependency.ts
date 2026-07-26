/*
 * This file is part of the Symfony Webpack Encore package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import type { FriendlyError } from '@kocal/friendly-errors-webpack-plugin';

import packageHelper from '../../package-helper.js';

function formatFileList(files: string[]): string {
    if (files.length === 0) {
        return '';
    }

    const others = files.length - 2;

    return ` in ${files[0]}${files[1] ? `, ${files[1]}` : ''}${others > 0 ? ` and ${others} other${others === 1 ? '' : 's'}` : ''}`;
}

function groupByModule(errors: FriendlyError[]): Map<string, FriendlyError[]> {
    const groups = new Map<string, FriendlyError[]>();

    for (const error of errors) {
        const module = error.module!;
        if (!groups.has(module)) {
            groups.set(module, []);
        }

        groups.get(module)!.push(error);
    }

    return groups;
}

function formatErrors(errors: FriendlyError[]): string[] {
    if (errors.length === 0) {
        return [];
    }

    const groups = groupByModule(errors);
    const modules = [...groups.keys()];

    const messages = [
        modules.length === 1
            ? 'This dependency was not found:'
            : 'These dependencies were not found:',
        '',
    ];

    for (const [module, moduleErrors] of groups) {
        const files = moduleErrors
            .map((error) => error.file)
            .filter((file): file is string => Boolean(file));
        messages.push(`* ${module}${formatFileList(files)}`);
    }

    messages.push('');
    messages.push(
        `To install ${modules.length === 1 ? 'it' : 'them'}, you can run: ${packageHelper.getMissingPackagesInstallCommand(modules)}`
    );

    return messages;
}

function format(errors: FriendlyError[]): string[] {
    return formatErrors(errors.filter((e) => e.type === 'missing-dependency'));
}

export default format;
