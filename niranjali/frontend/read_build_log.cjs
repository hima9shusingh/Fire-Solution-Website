const { exec } = require('child_process');

console.log('Starting build process...');
exec('npm run build', { encoding: 'utf8', maxBuffer: 1024 * 1024 * 10 }, (error, stdout, stderr) => {
    if (error) {
        console.error(`Build failed with error code: ${error.code}`);
        console.error(`Error message: ${error.message}`);
    }

    if (stderr) {
        console.log('\n--- STDERR ---');
        console.log(stderr);
    }

    if (stdout) {
        console.log('\n--- STDOUT (Last 50 lines) ---');
        const lines = stdout.split('\n');
        console.log(lines.slice(-50).join('\n'));
    }
});
