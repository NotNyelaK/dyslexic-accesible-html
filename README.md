# dyslexic-accesible-html
For Developers: Add this code to your website projects to make them more readable for users with dyslexia or poor vision.

![https://github.com/NotNyelaK/dyslexic-accesible-html/blob/main/demo.gif]

This code consists of two simple core files: accesibilities-styles.css and reading-accessibilities.js. All relevant functions are stored in the js file, while all the default style settings are stored in the css file. 

# Web developers should be aware of some basic settings:

## .read-area: 
- Refers to the container that will stage the <p> blocks.
- By default the js functions target this and not <p> because of the "width" property which requires a higher container. 
- This container will also likely have unique styling options to suit your general design (such as padding) which should be compatible with all of the scripts. 

## .main-container:
- This is used in the example just to give reference and place things in the middle. It's not likely that your project will have the js functions target your main-container.

## <p> and the "first" class:
- You do not need to use the "first" class for things like blogs. In literature settings the first paragraph should not be indented, while following paragraphs should not. 

## Customizability: 
- The toolbar and accesibility settings can be tuned to suit your needs. The basic format is laid out so you can add additional fonts, colors schemes, and text stylings to your web elements
- By default the dyslexia font only targets <p> elements, but you can easily expand this to everything on your page by targetting <body>
- The toolbar buttons do not display a "currently active" effect because they are just basic placeholders to make sure things work. It is recommended to switch them over to buttons that match your design.

