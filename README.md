# Kenyon Review Email Base
This is a bootstrapped project directory for the *Kenyon Review*'s Reading Series announcement emails. Gulp tasks build a compiled HTML email from the source Sass and HTML files. After the CSS is compiled, Gulp inlines the CSS in preparation for emailing.

## Usage
Clone the repo from GitHub.
```bash
git clone https://github.com/CMessinides/kr-email-base.git
```
Change into the newly cloned directory and install the required packages from `package.json`.
```bash
npm install
```
Lastly, run `gulp watch`. This task watches for changes in the `src/` directory, then compiles and inlines the CSS and updates the email in the browser to display those changes.
```bash
gulp watch
```
Open `src/index.html` and replace the comments with the desired details. Add `.scss` files in the `src/_sass` dir and put styles in those files. To make sure these styles get included in the compiled CSS, import them into `src/_sass/main.scss`.

## Issues
Report a bug or suggest a feature at  [https://github.com/CMessinides/kr-email-base](https://github.com/CMessinides/kr-email-base).

## License
The *Kenyon Review* name and logo are copyright of the *Kenyon Review*. All other materials are released under the MIT License.
