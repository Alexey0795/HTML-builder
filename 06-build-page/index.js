const { mkdir } = require('fs');
const { join } = require('path');
const { copyDir, resetFolder, mergeStyles } = require('..\\lib\\common.js');

async function main() {
    const flag = process.argv[2];
    if (flag === '-r') {
        await resetFolder(join(__dirname, 'project-dist'));
        return;
    }

    try {
        await resetFolder(join(__dirname, 'project-dist'));
        console.log('Result folder been reset.');

        const sourceStylesFolderPath = join(__dirname, 'styles');
        const outputFilePath = join(__dirname, 'project-dist', 'style.css');
        console.log('Styles start merging.');
        mergeStyles(sourceStylesFolderPath, outputFilePath);

        const sourceAssetsFolderPath = join(__dirname, 'assets');
        const outputAssetsFolderPath = join(__dirname, 'project-dist', 'assets');
        console.log('Assets start copying.');
        copyDir(sourceAssetsFolderPath, outputAssetsFolderPath);

    } catch (err) {
        console.error(err);
    }
}

main();