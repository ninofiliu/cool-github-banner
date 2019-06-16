#!/usr/bin/env node
// Reads a banner from stdin, writes a list of commits dates to stdout
// Usage: ./banner-to-dates.js date
// Example: cat ./banner | ./banner-to-dates.js 2015-12-27

// @ts-nocheck
(async () => {
    const date0 = new Date(process.argv[2]);
    const stdin = await new Promise(resolve => {
        let stdin = '';
        process.stdin.on('data', data => stdin+=data);
        process.stdin.on('end', () => resolve(stdin));
    });
    const commits = new Array(7*52).fill().map(()=>0);
    for (let day=0; day<7; day++) {
        for (let week=0; week < 52; week++) {
            try {
                const char = stdin.split('\n')[day][week];
                if (char && ['.', 'o', '@'].includes(char)) {
                    commits[7*week+day] = {
                        '.': 1,
                        'o': 5,
                        '@': 10
                    }[stdin.split('\n')[day][week]];
                }
            } catch(e) { }
        }
    }
    commits.forEach((nb, day) => {
        if (nb) {
            for (let i=0; i<nb; i++) {
                process.stdout.write(new Date(+date0+1000*60*60*24*day).toISOString()+'\n')
            }
        }
    })
})();