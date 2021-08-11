# ClassProject-1-group-of-5

# Nutrion Value

## Description

Health conscious users are often frustrated by the effort it takes to easily determine the NutriVal of their food. Our nutriVal app addresses those needs and provides quick and easy answers. With our app you can search a specific food item and get all the info you need to make a healthy choice.

Our new NutriVal app brings value to your everyday health by keeping proper records of the food you eat.  It will tell you how many calories, protein, carbs, fat, and sodium are in each meal so that you can track what you are putting into your body.A study on variety in nutrition. Whether eating a meal or a snack, it is important to be aware of the VutritiVal of the foods you consume. NutriVal makes tracking and improving your diet simple. It  integrates  to provide you with a complete picture of your nutrition intake throughout the day and over time ...



Motivation for development? - Health improvement 
User story - Always looking for sites that can tell you how much weight of a specific food would give you the ideal NutriVal you’re looking for 

# User want to see the food tyeps 
NutriVal App helps its users to get the most out of their foods.
Food is something that everyone can relate to. It gives us energy, it provides nutrients for our bodies, and tastes great! NutriVal APP helps people become more aware of how many calories are in their food and the NutriVal in each.


## Deployment

[Deployed Page](https://bjavillo1059.github.io/Nutritional-Value/)

<img src="./assets/img/Project Snippet.PNG" alt=" img of Project Snippet"/>


## Technology Used

- HTML   Brandon/Carina/Matthew
- CSS    Carina/Matthew
- JavaScript     Brandon/Carina/Matthew
- Foundation JS     Brandon/Carina/Matthew
- Nutritionix API Brandon
- Edamam API Carina

## Process

As User when NutriVal link is opened, a display will show the title "NutiVal" to the left of a Navbar and Dropdown links to the right.

- drop downlinks display the two specific subjects that link to descriptions
- all dropdown items are linked to other sites for descriptions
- these dropdown links are the subject of an article that are directly relayed for in the Types of Food and Food Groups
    - website used for these breakdowns is [yes, therapy article:](https://en.yestherapyhelps.com/the-12-types-of-nutrition-and-their-characteristics-12159)

    - Types of Food
        - Meats/Fish
        - Vegetables/Legumes/Beans
        - Fruits
        - Grains
        - Dairy

    - Food Groups 
        - Vegenism
        - Vegetarianism
        - Emotional Eating
        - Sports Nutrition
        - Healthy Eating

A User has the option of inputing a food item in the input section where it reads "item you are searching for...", when the item is annotated in the input black the User will then click the "Search for Info" button.

- this function will render multiple information from querying API's and will display specific information
- API's used for information gathering:
    - Nutrionix API
        - will aquery API for information value that is normally found on Nutrition labels in the United States
        - infromation will display within the Nutritional Values field
        - a public APP_ID is required for search query
        - a publis API_key is required for search query
        - API only allows 200 search query's daily

    - Edamam API
        - will query API for information value of 4 popular recipes found and will display with the recipe field
        - a public APP_ID is required for search query
        - a publis API_key is required for search query
        - API allows for 10,000 search query's a week

A User can choose to inspect Site Map information and contributors GitHub pages

- the home link and project repo link will link the user to the site project page on GitHub
- links under "SiteMap"

    - contributors:
        - Carina Diaz
        - Ricardo Hernandez
        - Brandon Javillo
        - Matthew Jaworski
        - Ayele Lintamo
