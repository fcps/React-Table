# Description
This project is a fully responsive React Table that allows for multi-column sorting and multi-column filtering.
You are free to use and modify this code as you wish.  


# Requirements
You will need npm which comes with node.js.  Currently I am running 

    a) npm version 5.6.0 

    b) node version 8.9.4

To see if you have these installed on your machine and what version run`npm --version` `node --version`. If you are missing either you can download both by downloading node.js at [https://nodejs.org/en/](https://nodejs.org/en/)

![Column Filtering And Sorting.png](https://github.com/drewbutcher/React-Table/blob/master/example-images/Column%20Filtering%20And%20Sorting.png)

# Directions
Step 1) Download the project From GitHub

Step 2) Extract Project and save somewhere on your computer

Step 3) Open terminal and change directory into the project
```cd to_directory_of/React\ Table```

Step 4) Install the dependences

```npm install```

Step 6) Edit the data file 'dataFile.json' in 'React Table/data'.  See rules for data file below.

Step 5) If you would like to run in development mode and see changes happen as you edit then type

```npm run dev```

and navigate your browser to [http://localhost:3333/](http://localhost:3333/)

Step 5) If you would like a create a production build then type

```npm run build```

Once you create the production build the data is stored in the javascript file bundle.js (which is minified).  You will only need the two files in 'React Table/build': **index.html** and **bundle.js** to upload this project to a website.  If you edit the dataFile.json at this point changes will not take effect unless you return `npm run build` 

# Rules for Data File 'dataFile.json'
1) Change the title of the table using the value of key "title".
1) Each row of the table is an element of the key "dataValues".  
2) Rows of data are dictionaries of the form:
```JSON
{
    "Header1": "Value1",
    "Header2": "Value2",
    "Header3": "Value3"
}
```
3) Values an either be strings or integers.  
4) Header do not have to all appear in the same order. 
5) In fact each row does **not** have to have the same set of header, as missing headers will create blanks in the table.
