![Cool ](https://github.com/Bijan-K/NextJS-Vocabulary-Trainer/assets/80640045/17c4f406-f905-4c44-b7ea-e1de8da036f9)

## intruduction

a simplistic web app that allows the users to train on the set of vocabulary words they may want.

this app shuffles the set of words in the pages/api/data.json directory each time it reloads. there is also a Python script for turning words stored in a .txt file into a JSON file(removing duplicates and striping the words of the empty space on both ends). it's a very simple script but should be read before use.

you can use the "?" button to automatically open a new tab with the "define <word>" being searched into Google for you, so that you may see the definition quickly.

you could also click on the word itself to use this functionality.

there is also a listing functionality on the left that shows the words you have already seen and words you couldn't define, the words in the lists also have the "clicking" functionality.

the data will not be saved tho, and on each reload you have to start over.


```bash
npm i
# then
npm run dev
```
