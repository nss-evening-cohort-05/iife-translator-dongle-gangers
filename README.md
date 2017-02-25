# NSS Language Translator 
## Group Exercise

### Project Description 
This project created an IIFE Javascript object that translates an English phrase, <em>my very elegant mother just served us noodles</em> into another language: <em>French</em>, <em>Korean</em>, <em>Spanish</em>, or <em>Wookie</em>. Each member of the team built a JavaScript IIFE module that converted the text into one of the translation languages.

The user interface is minimally styled css. 
<!-- ![Language Translator Screengrab](https ... ) -->

1. Created a single Github repository that team members collaborated on.
2. Created this [trello](https://trello.com/b/f5y8hPXe/translator) that was used for team planning.
3. Each team member chose a language.
4. Wrote one HTML file, `index.html`, that has 
- a textarea
- a select element (radio buttons) with an option for each language
- a Translate button (labeled `Make it so!`)
- and an empty DOM element into which the translated text will be inserted
5. Chose a single variable name, `DongleTranslator`, that holds all of the logic for the application. 
6. Each team member created one JavaScript file that contains one IIFE, each of which is an augmentor to `dongleTranslator.js` and to all the others. 
7. The lexicon utilizes private variables that cannot be accessed by any other team member's module except through an accessor method.
8. Each IIFE exposes, in its public interface, a method named `translateToXXX(Language)` that accepts a single argument. The method returns the translated text.
9. The team created an extra JavaScript file, `DOMhandler.js`, that handles interacting with the form elements and determines which method will be called to perform the selected translation.


### Technologies Used
- html
- css
- javascript


### How To View The Language Translator Application
#### (Node must be installed on your machine):
```
git clone https://github.com/nss-evening-cohort-05/iife-translator-dongle-gangers.git
cd iife-translator-dongle-gangers
npm install http-server -g
http-server -p 8080
```

This will show in your browser at: `http://localhost:8080`

### Contributors
[Mitchell Blom](https://github.com/mitchellblom)
[Sharon Smith](https://github.com/SMITHsharon)
[Heather Thacker](https://github.com/hhthacker)
[Craig Wilkosz](https://github.com/cwilkosz)


