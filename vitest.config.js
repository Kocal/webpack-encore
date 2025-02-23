// vitest.config.js
import {defineConfig} from 'vitest/config';

export default defineConfig({
    test: {
        include: ['test/**/*.test.js'],
        // Re-define "forceRerunTriggers" to exclude `test_tmp/**/package.json` to prevent infinite watch loop
        forceRerunTriggers: ['./package.json', './vitest.config.js'],
    },
});
