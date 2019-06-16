# 😎 Cool Github banner

Get yourself a nice Github activity chart!

## ℹ️ Usage

First, clone this repo.

Then, write an ascii-art-based desired banner in [./banner](./banner). `.`=light green, `o`=green, `@`=dark green. Example:

```txt
@@@@@@@    @@@    @@@@@@  @@@@@  @@@@@@  @@@@@@@
@     @   @...@  @     @ @     @ @     @ @     @
@@@ @@@  @.....@ @ @@@@@ @ @@@ @ @ @@@ @ @ @@@@@
  @ @   @.....@  @ @     @ @ @ @ @ @ @ @ @     @
@@@ @@@  @.....@ @ @@@@@ @ @@@ @ @ @@@ @ @ @@@@@
@     @   @...@  @     @ @     @ @     @ @     @
@@@@@@@    @@@    @@@@@@  @@@@@  @@@@@@  @@@@@@@
```

Then, run `cat ./banner | ./banner-to-dates.js "<first-date>" | ./dates-to-commits.sh`. Replace `<first-date>` by the datestring of the topleft square of your target Github activity chart year. For example, for the banner to occupy the whole 2018 year, replace `<first-date>` by `2017-12-31`.

Finally, push the repo. Your personal Github page is now way cooler. 😎

## 🔗 Requirements

- [Node](https://nodejs.org/en/download/)
- [Bash](https://www.gnu.org/software/bash/)