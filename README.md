# Seed Planner

This responsive website is designed to be viewed on a variety of screen sizes. Its purpose is to inform the user which vegetable and flowers seeds can be planted in given months throughout the year, and when they can be harvested.

![Am I Responsive Screenshot](assets/images/readme/)

Live website on GitHub Pages: [Seed Planner](https://simonhw.github.io/seed-planner/)

![GitHub last commit](https://img.shields.io/github/last-commit/simonhw/seed-planner) 

## Contents
- [User Experience](#User-Experience)
    - [Initial Discussion](#Initial-Discussion)
    - [User Stories](#User-Stories)
- [Design](#Design)
    - [Colour Scheme](#Colour-Scheme)
    - [Typography](#Typography)
    - [Wireframes](#Wireframes)
    - [Responsiveness](#Responsiveness)
- [Features](#Features)
    - [Information Section](#Information-Section)
    - [Results Section](#Results-Section)
    - [Javascript](#Javscript)
- [Bugs](#Bugs)
- [Credits](#Credits)

## User Experience
### Initial Discussion
The purpose of the web application is offer users with medium to large sized gardens a way to preview or prepare for the planting of vegetable crops in a way that best utilises space for maximum harvest yield.

### User Stories
#### First-time Visitor Goals
* To understand the purpose of the web application.
* To interact with the input fields without confusion as to their purpose.
* To customise the outputs for their specific needs.
#### Returning Visitor Goals
* To be able to reproduce previous results
* To reference specific planting information for certain vegetables.
#### Frequent Visitor Goals
* To check for updates and improvements to the web application.

## Design
### Colour Scheme
A colour scheme was chosen to reflect tones seen in the garden and the make the user feel excited about working with the earth under a clear blue sky.

![Coolors Palette](assets/images/readme/colour-palette.png)

### Typography
Two imported Google Fonts were used for this web application: 

- Diphylleia for headings and button text

![Diphylleia font 400 weight](assets/images/readme/diphylleia-400.png)

- Alegreys Sans for paragraph and list content.

![Alegreya Sans font 400 weight](assets/images/readme/alegreya-sans-400.png)
![Alegreya Sans font 700 weight](assets/images/readme/alegreya-sans-700.png)

Diphylleia was chosen as it evoked thoughts of nature and calming emotions due to its gentle design.
Alegreya Sans was used for the main text content of the web applicaiton as it proved to be more readable when compared to Diphylleia. 

### Imagery
The images used for the web application have perspectives low to the ground, at the level of the plants being planted and grown. These images were chosen as they reflect the desire of the user who wishes to plan their vegetable bed and get down to work in the soil themselves.

### Wireframes
Wireframes were created for this website for mobile, tablet and desktop screen sizes. The original idea was a set of four interactive areas for the user to supply information about their garden and preferred vegetables, and for the application to provide guidance on planting of bulbs. The concept was simplified after a discussion with my CI Mentor and revised to deal with one type of vegetable at a time.

<details><summary>Balsamiq Wireframe for Mobile</summary>

![Balsamiq Wireframe for Mobile](assets/images/readme/wireframe-mobile.png)

</details>

<details><summary>Balsamiq Wireframe for Tablet</summary>

![Balsamiq Wireframe for Tablet](assets/images/readme/wireframe-tablet.png)

</details>

<details><summary>Balsamiq Wireframe for Desktop</summary>

![Balsamiq Wireframe 1 for Desktop](assets/images/readme/wireframe-desktop-1.png)
![Balsamiq Wireframe 2 for Desktop](assets/images/readme/wireframe-desktop-2.png)

</details>

### Responsiveness
Content is presented from top to bottom as the user views the application on mobile screens. On wider screens, a blurred background image is inserted to break up the extra white space and push the user's attention to the input fields in the centre of the page. To utilise the extra horizontal space, the Vegetable Bed Size input fields are presented in a row, and images of vegetables replace the simple radio buttons in the Vegetable Picker div. 
Likewise, the image of the chosen vegetable is presented side-by-side with the planting details in the Results section. 

<details><summary>Input Fields on mobile screens and larger sizes</summary>

![Input Fields on mobile screens](assets/images/readme/input-fields-mobile.png)
![Input Fields on tablet screens](assets/images/readme/input-fields-tablet.png)

</details>

<details><summary>Vegetable Card Div on mobile screen and larger sizes</summary>

![Vegetable Card on mobile screens](assets/images/readme/vegetable-card-mobile.png)
![Vegetable Card on tablet screens](assets/images/readme/vegetable-card-tablet.png)

</details>

## Features
This web application is made up of a single HTML page with a Javascript file and CSS stylesheet.

A favicon of a seedling is used for the HTML page:

![Favicon of a Seedling](assets/images/readme/favicon.png)

Only one of two sections is displayed to the user at any given time: the information gathering section or the results section. When a user first visits or reloads the page, they are presented with the information section only.

### Information Section
Three input options are required of a user:
- the vegetable bed length
- the vegetable bed width
- a choice of one of four vegetables to plant

#### Vegetable Bed Size
The bed size inputs are displayed in a div with a background image of a gardener planting young leafy vegetables. This makes good use of what would otherwise be empty white space for two simple inputs. The use of this image evokes positive thoughts in the user as they identify with the person in the photo and think about their future work in the garden.

![Vegetable Bed Size div](assets/images/readme/bed-size-div.png)

A transparent black color is utilised between the image and the white text to aid in contrast. The heading "Vegetable Bed Size" has been given a text shadow to further contrast it from the backround image and add a subtle style to the already attractive font.

A minimium and maximum size of 1 metre and 20 metres respectively was set for these input fields via Javascript as the web application is designed for users with medium to large sized gardens.

CSS code was found and utilised from a post on Stack Overflow to remove the up and down arrows from these number input fields for aesthetic reasons and is [credited below](#Credits).

#### Vegetable Picker
The third option presented to the user is which vegetable to plant. On mobile screens this is a simple horizontal list of radio buttons with labels above. 

![Vegetable Picker radios](assets/images/readme/vegetable-picker-radios.png)

On tablet-sized screens and larger I added images of the vegetables and hid the radio buttons. This makes the web application look more professional on larger screen sizes and also helps the user best choose what they want to plant by making them visualise the final result.

![Vegetable Picker Images](assets/images/readme/vegetable-picker-div.png)

Javascript code was written that highlights the image with a green border when that particular vegetable is tapped or clicked. This clearly shows the user what option they have chosen before moving forward to view the results.

#### Calculate and Clear Form Buttons
A large "Calculate" button is the next thing presented to the user after the input fields have been filled out. It uses a gradient of the two green colours chosen for the site as its background colour. The text itself uses the yellow with a text shadow of brown. The colour green is synonymous with progression and affirmation and so is a perfect choice for a button the brings the user to the results page using the data they have provided.

![Information Section Buttons](assets/images/readme/information-buttons.png)

The Clear Form button is smaller and placed a distance away from its sibling to avoid accidental selection by the user. It uses a yellow background with brown text to further distinguish itself as a different type of button. 

### Results Section
#### Planting Suggestions
Under a heading of "Suggested Planting" to make clear to the user what they are describing, paragraphs list properties of the type of vegetable bed the user has specified in the previous section. In the below image, text in red changes based on the user inputs thanks to Javascript functions written to push the correct information for different types of vegetables and bed sizes.

![Suggested Planting paragraphs with red text highlights](assets/images/readme/suggested-planting.png)

#### Vegetable Card
A neatly-contained div is presented next to the user, summarising the important information needed to plant the user's chosen vegetable. A heading and large image clearly denote the vegetable and the instructions given to the user change depending on their choice.

![Vegetable Card](assets/images/readme/vegetable-card.png)

#### Recalculate Button
A button to send to user back to the previous application state is presented at the bottom of the section. This "Recalculate" button has a similar style to the "Calculate" button, however the font is white with a brown text shadow, and the background gradient moves in the opposite direction.

![Recalculate Button](assets/images/readme/results-buttons.png)

When returning the user to the information section, this button does not clear the input fields because of the possibility that the user may want to use the same bed size to get results for a different type of vegetable.

### Javascript
#### Validation
The web application uses custom validation to more specifically guide the user when they either forget to provide inputs or to try to use invalid inputs. The `validationCheck();` function returns an alert and/or a boolean to either permit the user to move to the results section or not.
- If all fields are left blank, the user is given clear instructions on how to proceed correctly: 

![Alert when all fields are left blank](assets/images/readme/alert-one.png)

- If the user tries to use length or width values that are less than 1 or greater than 20, they are reminded of the limits. The input fields are also cleared using `clearSizeInputs();` when this alert is dismissed to make it easier for the user to put in new values:

![Alert when invalid sizes inputted](assets/images/readme/alert-two.png)

- If the user does not select any vegetable, they are reminded that this is a required input before proceeding:

![Alert when the user does not select a vegetable](assets/images/readme/alert-three.png)

#### Vegetable Picker
Event listeners added to the four radio buttons use `setGreenBorder();` to add or remove a green border around the vegetable clicked by the user.

![Gif demonstrating the Vegetable Picker green borders](assets/images/readme/vegetable-picker.gif)

#### Calculate Button
When the user clicks the Calculate button, an event listener runs `validationCheck();` and if the inputs are correct, various functions described [below](#Suggested-Planting-Paragraphs) are executed to calculate the appropriate details before running `showResultsPage();` which adds a `display:none` style to the information section and adds `display: flex` to the results section.

![Gif demonstrating the Calcualte button being used](assets/images/readme/calculate-button.gif)

#### Clear Form Button
An event listener for the Clear Form button runs the `clearSizeInputs();` and `clearRadioButtons();` functions when clicked. These actions were split into two functions so that one could be used in the validation check as explained above.

![Gif demonstrating the Clear Form button being used](assets/images/readme/clear-form.gif)

#### Suggested Planting Paragraphs
Using a number of functions, namely `checkVegetable();` `calculateArea();` `getVegetableValues();` `calculateRows();` and `calculateBulbsInRow();`, various parts of the paragraphs under "Suggested Planting" will be updated based on the user inputs: 
- the area of the vegetable bed
- the name of the vegetable
- the number of rows and how many vegetables per row
- the spacing between bulbs in the same row
- the depth at which the vegetables should be planted
- the spacing between rows
- how many bulbs or seeds will be needed

(In the below gif image, the fields that change are shown in red just for the purposes of the README)

![Gif of text changing in the Suggested Planting paragraphs](assets/images/readme/suggested-planting.gif)

#### Vegetable Card
Similarly, using `function();` and `insertImage();`, the details in the vegetable card change based on the user's selection:

![Gif of the vegetable card details changing](assets/images/readme/vegetable-card.gif)

#### Seeds or Bulbs?
Depending on the vegetable chosen, the user will be given details for the planting of seeds or bulbs. To change these words in the web application, spans with classes and ids were used and the javascript function `bulbsOrSeeds();` called by the Calculate button event listener inserted the correct words using the `.innerText` property.

(In the below gif image, the fields that change are shown in red just for the purposes of the README)

![Gif of different words being inserted depending on the choice of vegetable](assets/images/readme/bulbs-or-seeds.gif)

#### Recalculate Button
The event listener for the Recalcualte button simply calls the `showInformationPage();` function when it is clicked. This function removes the `display:none` style from the information section and removes the same style from the results section.

![Gif of the Recalculate button being used](assets/images/readme/recalculate-button.gif)

## Bugs
rowGap for turnip sometimes didn't work?

## Credits
https://stackoverflow.com/questions/58864049/how-to-get-the-value-of-input-field-in-one-page-and-print-it-in-another-page

https://stackoverflow.com/questions/19159977/inner-border-over-images-with-css 

https://stackoverflow.com/questions/3790935/can-i-hide-the-html5-number-input-s-spin-box

Custom input field validation was written in order to avoid the submit button refreshing the page as preventDefault didn't work fully as expected.

The recalculate button does not clear the input fields as the user may wish to simply change the vegetable, not the size of the vegetable bed.


footer ??

check validators

optimise vegetable values function