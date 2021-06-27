# Move to Canada 

## ⚙️ Features
- built with [Gatsby](https://www.gatsbyjs.com/) (a [React.js](https://reactjs.org/) framework)
- styled with [SCSS](https://sass-lang.com/documentation/syntax)
- set up for continuous deployment with [Netlify](netlify.com)

## 🚀 Run Locally

Clone the project

```bash
  git clone https://github.com/movetocan/move-to-canada
```

Go to the project directory

```bash
  cd move-to-canada
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Creating Pages Dynamically
---
## Team Pages
### Step 1: Adding images...

To add images, 
<br>
1. Save your image something easy, like `firstName.jpg`. We will need to reference this in the Markdown file to get the image to be passed in!
2. [Click here](https://github.com/movetocan/move-to-canada/tree/main/src/images/headshots) to go to the project's `headshots` folder.
3. Click `Add File`.
![Add File](https://i.ibb.co/G0gYnB9/Screen-Shot-2021-06-27-at-7-14-48-PM.png)
Simply click `Add File`, and `create new file` to get started!
4. Click `Upload File`.
5. Choose a file to upload.
6. Fill out the form to make a commit:
 ![Adding Commit](https://i.ibb.co/sHZVKsN/Screen-Shot-2021-06-27-at-7-24-25-PM.png)
 - First input field: A brief message. `Add image for ____`
 - ensure `Commit directly to the main branch` is selected.
 - click `Commit Changes`
7. Now let's move on to filling out the template!


### Adding Markdown File To Pass in Data
1. You can create pages dynamically by simply adding a Markdown file titled `firstName-lastName.md` to [this folder](https://github.com/movetocan/move-to-canada/tree/main/src/pages/our-team)
2. Click `Add File`, and `create new file` to get started! ![Add File](https://i.ibb.co/G0gYnB9/Screen-Shot-2021-06-27-at-7-14-48-PM.png)

3. Write your file name. This should ALWAYS be `firstName-lastName.md`. e.g. `nick-zarlenga.md` will create a page accessible at **movetocanada.com/nick-zarlenga**
![File Name](https://i.ibb.co/DzFVKb2/Screen-Shot-2021-06-27-at-7-17-16-PM.png)

4. Paste below template, and edit fields according to the team member.
<br>

 **Please** copy template exactly as you see it, or it will not work.


```
---
date: 2021-01-16
pageType: "team"
name: "Nick Zarlenga"
jobTitle: "Real Estate Broker"
location: "Toronto, ON"
featuredImage: '../../images/headshots/nick.jpeg'
tags: ['Nick Zarlenga', 'Nick Zarlenga Real Estate', 'Real Estate Toronto', 'Toronto Realtors', 'Ontario Realtors']
---

   Nick Zarlenga is a Toronto Real Estate Broker, with over 8 years managing the Ontario
    Government real estate portfolio, and working with CBRE on numerous multinational
    corporate real estate requirements including offices, warehouses and hotels.  He is also
    the founder of The Move to Canada Team, specializing in assisting international buyers
    acquire Canadian real estate, and acquire Canadian Permanent Residencies and
    citizenships.
    <br/>
    <br/>
    Nick Zarlenga holds a Bachelor of Commerce with Honours, and a Bachelor of
    Administrative Studies with Honours, from York University, and is a registered Real
    Estate Broker in Ontario.
```

### Editing the template:

Be mindful not to delete any ---'s or "s in the template! They are very important. The website will break if you delete them.

`date:` Today's date, in YYYY-MM-DD format.
<br>
`pageType:` leave as 'team'
<br>
`name:` 'First Last'
<br>
`jobTitle:` 'Job Title Here'
<br>
`location:` 'Location, HR'
<br>
`featuredImage:` 
'../../images/headshots/**change-this-to-image-path.jpg**'
<br>
scroll to see how to add images...
<br>
`tags:` ['ideal for SEO', 'can be a few words long', 'must be separated by commas', 'and between square brackets']
<br>
Your paragraphs go here!
<br>
<br>
Your paragraphs should be separated by the two `<br/> <br/>` This ensures all spacing on the web page will be the same throughout.

Finally, fill out the form to make a commit:
 ![Adding Commit](https://i.ibb.co/sHZVKsN/Screen-Shot-2021-06-27-at-7-24-25-PM.png)
 - First input field: A brief message. `Add team bio for ____`
 - ensure `Commit directly to the main branch` is selected.
 - click `Commit Changes`

Once you commit changes, they are sent to Netlify to deploy automatically. The changes should be visible within a few minutes. You can always sign in to Netlify using the credentials I gave you to see the status of the build!
