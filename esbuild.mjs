import { build } from 'esbuild';
import { readFileSync } from 'fs';

try {
    let options = {
        bundle: true,
        platform: 'node',
        target: ['node16.14'],
        format: 'esm', // switch esbuild output to ESM
        mainFields: [ 'module', 'main' ], // force switch AWS SDK to module mode
    };

    const entryPoint = process.argv[2];
    if (entryPoint) {
        options = {
            ...options,
            entryPoints: [ entryPoint ],
        };
    } else {
        options = {
            ...options,
            stdin: { contents: readFileSync(0, 'utf-8'), loader: 'js' },
        };
    }

    const outfile = process.argv[3];
    if (outfile) {
        options = {
            ...options,
            outfile,
        };
    }

    const result = await build(options);
}
catch (err) {
    console.error(err);
    process.exit(1);
}
