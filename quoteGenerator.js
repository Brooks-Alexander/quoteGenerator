//an array filled with quotes and the authors responsible
const quotes = [{quote:"A rose by any other name would smell as sweet.", author:"William Shakespeare"}, {quote:"All that glitters is not gold.", author:"William Shakespeare"},
{quote:"All the world's a stage, and all the men and women merely players.", author:"William Shakespeare"}, 
{quote:"Ask not what your country can do for you; ask what you can do for your country.", author: "John Kennedy"}, 
{quote:"Ask, and it shall be given you; seek, and you shall find.", author: "the Bible"}, {quote:"Eighty percent of success is showing up.", author: "Woody Allen"}, 
{quote:"Elementary, my dear Watson.", author: "Sherlock Holmes"}, {quote:"For those to whom much is given, much is required.", author: "the Bible"}, 
{quote:"Frankly, my dear, I don't give a damn.", author: "Rhett Butler "}, {quote:"Genius is one percent inspiration and ninety-nine percent perspiration.", 
author: "Thomas Edison"}, {quote:"Go ahead, make my day.", author: "Harry Callahan"}, {quote:"He travels the fastest who travels alone", author:"Rudyard Kipling"}, 
{quote:"Hell has no fury like a woman scorned", author:"William Congreve"}, {quote:"Hell is other people.", author:"Jean-Paul Sartre"}, 
{quote:"Here's looking at you, kid.", author: "Rick Blaine"}, {quote:"Houston, we have a problem.", author: "Jim Lovell"}, 
{quote:"I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.", 
author: "Dr. Martin Luther King Jr."}];

/*quoteGenerator will randomly output a quote from the array.
The user can input a string and if the string is the same
as one of the authors in the array, then the function
will output a quote by that author*/ 
const quoteGenerator = (writer) => {
    var result = quotes.find(item => item.author === writer);
    var randomElement = quotes[Math.floor(Math.random() * quotes.length)];
    if (writer) {
        if (result) {
            console.log(result);
        }
    } else {
        console.log(randomElement);
    }
}

quoteGenerator();



