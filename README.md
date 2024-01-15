# Seed Planner

This responsive website is designed to be viewed on a variety of screen sizes. Its purpose is to aid the user in planning for the planting of various vegetables in their garden beds, and provide detailed information on how to plant them and when they should plant and harvest them.

![Am I Responsive Screenshot](assets/images/readme/amiresponsive-seed-planner.png)

Live website on GitHub Pages: [Seed Planner](https://simonhw.github.io/seed-planner/)

![GitHub last commit](https://img.shields.io/github/last-commit/simonhw/seed-planner) ![W3C Validation](https://img.shields.io/w3c-validation/default?targetUrl=https%3A%2F%2Fsimonhw.github.io%2Fseed-planner%2F&label=HTML&labelColor=%23e34c26)
![W3C Validation](https://img.shields.io/w3c-validation/default?targetUrl=https%3A%2F%2Fsimonhw.github.io%2Fseed-planner%2Fassets%2Fcss%2Fstyle.css&label=CSS&labelColor=%23264de4%20)
 ![Static Badge](https://img.shields.io/badge/validated-brightgreen?label=JS&labelColor=%23f0db4f)
![GitHub top language](https://img.shields.io/github/languages/top/simonhw/seed-planner)

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
* To learn important information about the vegetables they wish to plant.
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
- The majority of content is presented from top to bottom as the user views the application on mobile screens. 
- On mobile screens only, a blue background gradient is applied to the H1 heading to add some extra colour to the application.
- On wider screens, a blurred background image is inserted to break up the extra white space and also to focus the user's attention on the input fields in the centre of the page. The blue gradient is removed from the H1 heading.
- To utilise the extra horizontal space, the Vegetable Bed Size input fields are reoriented into a row, and images of vegetables replace the simple radio buttons in the Vegetable Picker div. 
- Likewise in the Results section, the image of the chosen vegetable is no longer underneath the planting details but is presented alongside that content.

<details><summary>The web application viewed on the Galaxy Fold</summary>

![A gif showing the web application viewed on the Galaxy Fold](assets/images/readme/mobile-screen.gif)

</details>

<details><summary>The web application viewed on wider screens</summary>

![A gif showing the web application viewed on wider screens](assets/images/readme/tablet-screen.gif)

</details>

<details><summary>Differences between input fields on mobile screens and larger sizes</summary>

![Input Fields on mobile screens](assets/images/readme/input-fields-mobile.png)
![Input Fields on tablet screens](assets/images/readme/input-fields-tablet.png)

</details>

<details><summary>Differences in the Vegetable Card div on mobile screens and larger sizes</summary>

![Vegetable Card on mobile screens](assets/images/readme/vegetable-card-mobile.png)
![Vegetable Card on tablet screens](assets/images/readme/vegetable-card-tablet.png)

</details>

## Features
This web application is made up of a single HTML page with a Javascript file and CSS stylesheet.

The use of a header and nav bar was initially considered for this project; however, seeing as the web application was being designed all on one HTML page, and the aim was to make the user feel like they are using a slick and professional web app, it was decided to omit these types of features from this first version of the project. 

A favicon of a seedling is used for the HTML page:

![Favicon of a Seedling](assets/images/readme/favicon.png)

Only one of two sections is displayed to the user at any given time: the information gathering section or the results section. When a user first visits or reloads the page, they are presented with the information section only.

### Information Section
In the first set of paragraphs the purpose of the website is presented to the user. Instructions follow on how to properly use the application features and the current limits of the calculations are listed.

![Instruction Paragraphs](assets/images/readme/instructions.png)

Three input options are required of the user:
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

#### Footer
A simple footer was included at the bottom of each section with a link inviting the user to contact the site owners with any questions or suggestions. This footer was styled minimally so that it did not draw too much attention from the main content of the web application.

![Footer on mobile screen](assets/images/readme/footer.png)

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
On wider screens, event listeners added to the four radio buttons use `setGreenBorder();` to add or remove a green border around the vegetable clicked by the user.

![Gif demonstrating the Vegetable Picker green borders](assets/images/readme/vegetable-picker.gif)

#### Calculate Button
When the user clicks the Calculate button, an event listener runs `validationCheck();` and if the inputs are correct, various functions described [below](#Suggested-Planting-Paragraphs) are executed to calculate the appropriate details before running `showResultsPage();` which adds a `display:none` style to the information section and adds `display: flex` to the results section.

![Gif demonstrating the Calcualte button being used](assets/images/readme/calculate-button.gif)

#### Clear Form Button
An event listener for the Clear Form button runs the `clearSizeInputs();` and `clearRadioButtons();` functions when clicked. These actions were split into two functions so that one could be used in the validation check as explained above.

![Gif demonstrating the Clear Form button being used](assets/images/readme/clear-form.gif)

#### Suggested Planting Paragraphs
Using a number of functions, namely `insertAreaValues();`, `insertVegetableNames();`, `insertRowDetails();`, and `insertVegetableProperties();`, various parts of the paragraphs under "Suggested Planting" will be updated based on the user inputs: 
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
Similarly, using `insertVegetableNames();`, `insertVegetableProperties();`, and `insertImage();`, the details in the vegetable card change based on the user's selection:

![Gif of the vegetable card details changing](assets/images/readme/vegetable-card.gif)

#### Seeds or Bulbs?
Depending on the vegetable chosen, the user will be given details for the planting of seeds or bulbs. To change these words in the web application, spans with classes and ids were used and the javascript function `bulbsOrSeeds();` called by the Calculate button event listener inserted the correct words using the `.innerText` property.

(In the below gif image, the fields that change are shown in red just for the purposes of the README)

![Gif of different words being inserted depending on the choice of vegetable](assets/images/readme/bulbs-or-seeds.gif)

#### Recalculate Button
The event listener for the Recalcualte button simply calls the `showInformationPage();` function when it is clicked. This function removes the `display:none` style from the information section and sets the same style to the results section. It also scrolls the user to the top of the window using `window.scrollTo(0,0);`.

![Gif of the Recalculate button being used](assets/images/readme/recalculate-button.gif)

### Features to be Implemented
This web application has great potential to be improved upon and to be able offer users more complicated customisation of inputs for garden planning.
- Use template literals to insert different vegetable options for the user when they select a given month of the year. The `vegetables` object literal can be used to store the blocks of HTML used for the radio buttons to achieve this.
- Allow users to convert the vegetable details card to an image and download to their device or share to other users.
- Allow the user the option to select multiple vegetables for the same plot and customise how much space is dedicated to each type of bulb or seed. This could be achieved using custom Javascript functions.
- Add HTML pages dedicated to the seedling growing phase in greenhouses before planting in vegetable beds.
- Add a header with a nav bar once the application has more than one HTML page intended for the user to view.
- Store the `vegetables` object in its own .js or .json file as it grows in size so that main script.js file will be kept neat and tidy.

### Accessibility
Accessibilty was kept in mind when building this web application by:
- Using semantic HTML elements where appropriate.
- Using contrasting colours that clearly stand out from the background.
- Including clear and descriptive alt attributes for all `<img/>` elements.
- Using aria labels to describe the actions that will be taken when interacting with links. This is shown in the email address links in the footer in index.html.

## Technologies Used
### Languages
HTML, CSS, and Javascript.

### Frameworks, Libraries, and Programs
Balsamiq - To create the initial wireframes.

Chrome Developer Tools - To visualise and test changes to the HTML and CSS code.

Visual Studio Code - The IDE used to write my code.

Git - For version control.

GitHub - To save and store files online.

Google Fonts - For imported fonts used on the website.

[W3Schools.com](https://www.w3schools.com/) - For reasearching and learning about Javascript methods and syntax.

[Favicon.io](https://favicon.io/) - To source the favicon used.

[Pexels.com](https://www.pexels.com/) - To source images used on the website.

[ScreenToGif](https://www.screentogif.com/) - To create gif files for this README.

[TinyPNG](https://tinypng.com/) - To compress images.

Shutter Encoder  - To convert images to .webp format.

GitHub Pages - To host the live version of the website.

[Am I Responsive?](https://ui.dev/amiresponsive) - To showcase the website on different screen sizes for this README.

[Shields.io](https://shields.io/) - To add badges to this README.

[Coolors](https://coolors.co/) - To showcase the colour palette of the website.

## Deployment

The live version of the web application was deployed on GitHub Pages as follows:
  1. Log in or sign up to GitHub.
  2. Navigate to the repository for [Seed Planner](https://github.com/simonhw/seed-planner).
  3. Click the Settings link near the top of the page.
  4. Click on the Pages link on the left-hand side under Code and Automation.
  5. Under Build and Deployment click the dropdown menu for Branches and select 'main'. For the Folder dropdown menu, select 'root'.
  6. Click Save to deploy the website on GitHub Pages.

### Local Deployment
To deploy this project locally on your device, follow the below steps:
#### Forking 
1. Log in or sign up to GitHub.
2. Navigate to the repository for [Seed Planner](https://github.com/simonhw/seed-planner).
3. Click the Fork button located in the top right part of the webpage.
#### Cloning
1. Log in or sign up to GitHub.
2. Navigate to the repository for [Seed Planner](https://github.com/simonhw/seed-planner).
3. Click on the green Code button and select your preferred option of HTTPS, SSH, or GitHub CLI and copy the relevant link.
4. Open the terminal in your IDE and navigate to your directory of choice for this new clone.
5. Type `git clone` into the terminal and paste in your copied link. Press enter.

## Testing
### Manual Testing
| User Stories | Achieved By: | Supporting Images |
| --- | --- | --- |
| **First-time Visitor Goals** |||
| To understand the purpose of the web application. | The main heading of "Seed Planner" immediately infers to the user that they are about to use an interactive web application. The introductory paragraphs are kept short and to-the-point to inform the user about the web application's purpose and how to correctly use it. A large green "Calculate" button infers that there is more content to see once the user provides some personalised details.| [1. Instructions Paragraphs Image](assets/images/readme/instructions.png) [2. Calculate Button Image](assets/images/readme/information-buttons.png) |
| To interact with the input fields without confusion as to their purpose. | The input fields are presented clearly to the user, without any major distraction. It is clear that the user should fill in two length values in the Vegetable Bed Size div, and the heading of "Vegetable **Picker**" tell the user that they need to interact with the radio buttons or vegetable images before proceeding. | [1. Input Fields on Mobile Screens Image](assets/images/readme/input-fields-mobile.png) [2. Input Fields on Wider Screens Image](assets/images/readme/input-fields-tablet.png) |
| To learn important information about the vegetables they wish to plant. | The user is presented with customised information about their chosen vegetable in the results section. Any novice gardeners will be able to use the application to plant the vegetable without being overwhelmed with too many details. | [Suggested Planting Paragaphs Image](assets/images/readme/suggested-planting-black.png) |
| **Returning Visitor Goals** |||
| To be able to reproduce previous results | With just three inputs required of the user, there is no risk that they will not be able to reproduce previous results, as long as they remember what vegetable bed size they chose. This goal is also achieved in the same user session by not clearing the input fields when the recalculate button is pressed.  |[Input Fields Image](assets/images/readme/input-fields-mobile.png) |
| To reference specific planting information for certain vegetables. | A brightly-coloured vegetable card is presented to the user which succinctly lists the important planting factors, including a large image of the vegetable. This is a positive experience for the returning user who may not wish to read through the Suggested Planting paragraphs again. | [Vegetable Card Image](assets/images/readme/vegetable-card.png) |
| **Frequent Visitor Goals** |||
| To check for updates and improvements to the web application. | The straightforward layout of the web application allows frequent users to easily notice if major changes or updates have been made. The use of informative headings means that any new input fields required of the user would not be easily overlooked. The footer provides a link for the user to get in touch and ask questions or even make suggestions. | [Footer Link Image](assets/images/readme/footer.png)|

### Full Testing
The web application was tested on a Windows 10 desktop with a 26" monitor and on a One Plus 9 Pro mobile phone. Other types of devices were testing using Chrome Developer Tools.

The site was testing on Google Chrome, Mozilla Firefox, and Edge on desktop, and Google Chrome and DuckDuckGo on mobile.

| Feature | Expected Outcome | Test Used | Result | Test Status |
| --- | --- | --- | --- | --- |
| Length Input Field | When clicked, the user can enter data using the keyboard. | Field clicked | Cursor appears in the field | Pass |
| Length Input Field | When selected, the user can only enter numbers. | Entry of letters, symbols, and spaces attempted. | None of these characters appeared in the field. | Pass |
| Length Input Field | When selected, the user can use the up and down arrow keys on the keyboard to increase or decrease the values between 1 and 20 in steps of 0.1. | Up and down arrow keys pressed. | The values increase and decrease in steps of 0.1 with a minimim value of 1 and a maximum value of 20. | Pass |
| Width Input Field | When clicked, the user can enter data using the keyboard. | Field clicked | Cursor appears in the field | Pass |
| Width Input Field | When selected, the user can only enter numbers. | Entry of letters, symbols, and spaces attempted. | None of these characters appeared in the field. | Pass |
| Width Input Field | When selected, the user can use the up and down arrow keys on the keyboard to increase or decrease the values between 1 and 20 in steps of 0.1. | Up and down arrow keys pressed. | The values increase and decrease in steps of 0.1 with a minimim value of 1 and a maximum value of 20. | Pass |
Vegetable Radio Buttons | When clicked, the radio button is selected and any previously selected radio button is unchecked. | Each radio button clicked in turn. | Only one radio button was able to be selected at any given time. | Pass |
Vegetable Radio Buttons | On wider screens, when a vegetable image was clicked, a green border appeared around the image. Any green border on a previously selected image was removed in the same instance. | Each vegetable image clicked in turn. | Only one image was shown with a green border at any given time. | Pass |
| Calculate Button | When the user clicks the button without completing any of the three input options, an alert is displayed reminding them of the intructions for using the web application and the user is not directed to the results section. | Button clicked with no input fields completed. | An alert is displayed reminding the user of the instructions for using the web application. The user is not directed to the results section. | Pass |
| Calculate Button | When the user clicks the button after completing just one of the two size input fields, an alert is displayed reminding them of the instructions for using the web application and the user is not directed to the results section. | Button clicked with only one size input field completed. | An alert is displayed reminding the user of the instructions for using the web application. The user is not directed to the results section. | Pass |
| Calculate Button | When the user enters a value less than 1 or greater than 20 into the size input fields, an alert will display reminding them of the value limits and clear the input fields when dismissed. The user will not be directed to the results section. | Button clicked with values less than 1 and/or greater than 20 entered into the size input field. | An alert displays reminding the user of the value limits and clears the input fields when dismissed. The user is not directed to the results section. | Pass |
| Calculate Button | When the user correctly fills in the size input fields but does not select a vegetable, an alert is displayed reminding them to choose a vegetable and the user is not directed to the results section. | Button clicked with size input fields filled out correctly but no vegetable selected. | An alert displays reminding the user to choose a vegetable. The user is not directed to the results section. | Pass |
Calculate Button | When the user correctly fills out the size input fields and selects a vegetable, the information section is hidden and the results section is displayed. | Button clicked with input fields filled out correctly and a vegetable radio button checked. | The information section is hidden and the results section is displayed. | Pass |
| Clear Form Button | When the user clicks the button, any value in the size input fields are cleared and the radio button are unchecked. Any green borders around the vegetable images on wider screen are removed. | Button clicked when values are present in the size input fields and a vegetable is selected. | The size input fields are cleared and the vegetable radio buttons or green borders are unchecked/removed. | Pass |
| Clear Form Button | When the user clicks the Clear Form button when no values are present in the size input fields and no vegetable radio button is selected, no changes are observed on the site. | Button clicked when no values are present in the size input fields and no vegetable radio button is selected. | No changes observed. | Pass |
| Contact Us Link #1 | When clicked, the user is redirected to an email app with the email address populated in the To field | Link clicked | Email app opened with email in To field | Pass |
| Recalculate Button | When clicked, the results section is hidden and the information section displayed, with the user's previous inputs still present in their respective fields. | Button clicked. | The results section is hidden and the information section displayed again with the user's previous inputs still present in their respective fields. | Pass |
| Contact Us Link #2 | When clicked, the user is redirected to an email app with the email address populated in the To field | Link clicked | Email app opened with email in To field | Pass |

### Automated Testing
[W3C](https://validator.w3.org/) was used to validate the HTML and CSS files. [JSHint](https://jshint.com/) was used to validate the Javascript file.
- [index.html](assets/images/readme/w3c-index.png) - Passed. Five info messages are shown for the `<img/>` elements: "Trailing slash on void elements has no effect and interacts badly with unquoted attribute values."
- [style.css](assets/images/readme/w3c-style.png) - Passed with four [warnings](assets/images/readme/w3c-style-warnings.png) about vendor elements. These are included to remove the up and down arrows in the number input fields in the information section. 
- [script.js](assets/images/readme/jshint-metrics.png) - Passed with no warnings.

### Lighthouse Testing
The Lighthouse feature in Chrome Developer Tools was used to test the performance, accessibility, best practices, and search engine optmisation qualities of the web application.

#### Desktop Tests
All tests in dekstop mode were satisfactory with scores between 90 and 100.

Index page:

![Lighthouse Test - Desktop index.html](assets/images/readme/testing/lighthouse-desktop-index.png)

404 page:

![Lighthouse Test - Desktop 404.html]()

#### Mobile Tests
All tests in mobile mode were satisfactory with scores between 90 and 100.

Index page:

![Lighthouse Test - Mobile index.html](assets/images/readme/testing/lighthouse-mobile-index.png)

404 page:

![Lighthouse Test - Mobile 404.html]()

### Accessibility Testing
[Wave](https://wave.webaim.org/) was used to check the web application for errors and issues associated with accessibility.
The results for each page are shown below.

#### Index.html
![Results of Wave test for index.html](assets/images/readme/testing/wave-test.png)

- There is one alert for a redundant link. This is the email link in the second footer. There are two links and two footers due to the different layout of the content on mobile screens and larger screens.

    ![Wave alerts for redundant link](assets/images/readme/testing/redundant-link.png)

- There are ten alerts for justified paragraph text. The paragraphs look more presentable when using this text alignment style, and the negative impat on readability that can sometimes be associated with this stlye ("varying word/letter spacing and 'rivers of white' that flow through the text") were not observed in the web application.

    ![Wave alerts for justified text](assets/images/readme/testing/justified-text.png)

- There was initially an alert for a missing fieldset around the group of radio buttons. It was determined that the purpose of the radio buttons was explained by the heading of "Vegetable Picker", so the fieldset was omitted. To satisfy accessibility requirements, the parent div was given the attributes `role="radiogroup"` and `aria-label="Vegetable Picker` to aid screen reader users. The alert no longer appears for the current version of the web application.

    ![Wave alert for missing fieldset](assets/images/readme/testing/missing-fieldset.png)

- To improve accessibilty and not sacrifice the existing code structure, the use of `aria-labelledby` was utilised for each radio button to make sure users of screen readers would know which button they were interacting with. 

#### 404.html
![Results of Wave test for 404.html]()

## Bugs
### Known Bugs
Note: Not all known bugs are present in the final version of the website.
| # | Bug | Image | Plan to Solve |
| --- | --- | --- | --- |
| 1 | On the first page load or after a cache refresh, text wrapped in `<b>` tags is shown in a default font for ~32 milliseconds. (Note: the frames showing the default text have had time added to them just for the purposes of showing the effect in this gif file)| ![Strong tags bug](assets/images/bugs/b-bug.gif) | This issue can be elimitated by removing the `<b>` tags around the text. It seems to be an issue with the browser loading the bold version of the Alegreya Sans font. I tried directly adding the font weight via CSS stlying but the issue persisted. It was decided that the bold style did not add enough value to the web appliction compared to the delay in the font loading which did detract from the user experience. The `<b>` tags were therefore removed from the final version of the site.|

### Solved Bugs
| # | Bug | Image | Solution |
| --- | --- | --- | --- |
| 1 | When small mobile devices were rotated, the blue background gradient of the H1 heading did not fill the new screen width. | ![Blue gradient bug](assets/images/bugs/galaxy-fold-bug.png) | The h1 width style was changed from `width: 100%;` to `width: 100vw;` to solve this issue. |
| 2a | When large mobile devices and tablets were rotated, the background image did not fill the full length of the device. | ![Background image bug on large mobiles](assets/images/bugs/large-mobile-bug.png) | The removal of `background-size: cover` fixed this bug. |
| 2b | On large tablets, the fix for Bug 2a caused the background image to not fill the full length of the device, where before it did. | ![Background image bug on large tablets](assets/images/bugs/large-tablet-bug.png) | The reinsertion of `background-size: cover` combined with the addition of `background-attachment: fixed;` fixed both bug 2a and 2b. |
| 3 | On screens where the user has to scroll down to click the calculate button, the results section wass loaded with the content already scrolled down. | ![Mobile scrolling bug](assets/images/bugs/scrolling-bug.gif) | The method `window.scrollTo(0,0);` was added to the code for the Calculate and Recalculate buttons after research [on Stack Overflow](#Credits). |
| 4 | On the Mozila Firefox browser, the vegetable radio buttons were still partly visible even with their CSS styles of `width: 0px;` and `height: 0px`. | ![Mozilla Firefox radio buttons](assets/images/bugs/mozilla-buttons.png) | A solution [was found](#Credits) on StackOverflow to add `opacity: 0;` to the elements which resolved the issue and did not cause any new issues on other browsers. |  

## Credits
### Code Used
The HTML code used to redirect the 404 page back to index.html was taken from my first portfolio project.
- [GitHub - West Cork Beekeeping, thank-you.html](https://github.com/simonhw/beekeeping/blob/main/thank-you.html)

CSS code to solve Bugs 2a and 2b were found on a Stack Overflow post.
- [Background Cover not working on Mobile Devices](https://stackoverflow.com/questions/36854417/background-cover-not-working-on-mobile-devices)

CSS code to add the inner green border over the images in the vegetable picker radio group was found on a Stack Overflow post.
- [Stack Overflow - Inner border over images with CSS](https://stackoverflow.com/questions/19159977/inner-border-over-images-with-css) 

CSS code to remove the up and down arrows in the size input fields was found on a Stack Overflow post.
- [Stack Overflow - Can I hide the HTML5 number input's spin box](https://stackoverflow.com/questions/3790935/can-i-hide-the-html5-number-input-s-spin-box)

The Javascript method `window.scrollTo();` used to scroll the window to specified x,y coordinates was found on Stack Overflow.
- [Stack Overflow - Scroll to the top of a page using Javascript](https://stackoverflow.com/questions/1144805/scroll-to-the-top-of-the-page-using-javascript)

CSS code to hide radio buttons without disabling them completely was found on Stack Overflow.
- [Stack Overflow - Hide check radio buttons with CSS](https://stackoverflow.com/questions/18078871/hide-check-radio-button-with-css)

HTML code to ensure accessibility of the radio buttons while having an `<img/>` element instead of text as the child of the input's `<label>` was found on a Stack Overflow post.
- [Stack Overflow - Accessibility: How to use multiple LABEL elements for one INPUT item correctly (via ARIA, etc.)?](https://stackoverflow.com/questions/60240404/accessibility-how-to-use-multiple-label-elements-for-one-input-item-correctly)

HTML code to ensure accessibility of the radio button group as a whole without using a fieldset and legend was found on Stack Overflow.
- [Stack Overflow - How to group form inputs accessibly without a fieldset?](https://stackoverflow.com/questions/48265742/how-to-group-form-inputs-accessibly-without-a-fieldset )

### Content
All code content was written by Simon Henleywillis unless otherwise specified above.

Text content was written by Simon Henleywillis and specific details about planting the different vegetables was sourced from the [Royal Horticultural Society](https://www.rhs.org.uk/) website.

### Media
All images used were foind on [Pexels](https://www.pexels.com/) and [Unsplash](https://unsplash.com/license). The Pexels website states that "*All photos and videos on Pexels can be downloaded and used for free*" and Unsplash states "*Unsplash photos are made to be used freely. Our license reflects that.*"

- Vegetable Bed Size Image: [Anonymous farmer planting seedlings into soil](https://www.pexels.com/photo/anonymous-farmer-planting-seedlings-into-soil-7728082/)
- Vegetable Card Image: [Close up photo of plants](https://www.pexels.com/photo/close-up-photo-of-plants-2284170/)
- Seedling Background Image: [Green leafed plant](https://www.pexels.com/photo/green-leafed-plant-bokeh-photography-767240/)
- Onion Image: [Bowl with raw onion bulbs on marble surface](https://www.pexels.com/photo/bowl-with-raw-onion-bulbs-on-marble-surface-4197444/)
- Garlic Image: [Photography of garlic on wooden table](https://www.pexels.com/photo/photography-of-garlic-on-wooden-table-630766/)
- Parsnips Image: [A pile of freshly dug up turnips sitting next to each other](https://unsplash.com/photos/a-pile-of-freshly-dug-up-turnips-sitting-next-to-each-other-4kgiiENVABI)
- Turnips Image: [White turnips](https://unsplash.com/photos/white-turnips-jzqyx7vfmpI)

## Acknowledgements
I would like to acknowledge the following people:
- My CI Mentor [Graeme Taylor](https://github.com/G-Taylor) who was a fantastic support throughout my second portfolio project.
- [Creating Your First README - Kera Cudmore](https://github.com/kera-cudmore/readme-examples)
- Robin Hublard for his proof-reading and encouragement. 

### To Do list and notes

404 with redirect, credit previous project

lighthouse tests

wave tests for new pages

table of contents

spell check all files