# React & Node APLICATION - Full ECommerce 

# valid-audio
Valid Audio is a progressive e-commerce web application design to meet the needs of the ever tasty academia who are ever ready to study but dont have the chance/time to attend to their book. Therefore valid audio coverts any book into an audio version whereby one can easily listen to it. 

## Demo Website

👉 Demo : https://valid-audio.herokuapp.com



## Run Locally

### 1. Clone repo

```
$ git clone git@github.com:Cybergatenet/valid-audio.git
$ cd node-react-ecommerce
```

### 2. Install MongoDB

Download it from here: https://docs.mongodb.com/manual/administration/install-community/

### 3. Run Backend

```
$ npm install
$ npm start
```

### 4. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```

### 5. Create Admin User

- Run this on chrome: http://localhost:5000/api/users/createadmin
- It returns admin email and password

### 6. Login

- Run http://localhost:3000/signin
- Enter admin email and password and click signin

### 7. Create Products

- Run http://localhost:3000/products
- Click create product and enter product info


### FEATURES OF THE APPLICATION #####################

### Order Details Screen

It shows all details about an order includeing shipping, payments and order items. Also it is possible for admin to manage orders like set them as delivered.

### Connect to PayPal

This parts create PaypalButton component to show paypal payment button on the screen.
when users click on it, they will be redirected to paypal website to make the payment.
after payment users will be redirected to details page of the order.

### Manage Order Screen

This is an admin page to manage list of orders. Admin can delete an order or set it as delivered.

### User Profile Screen

When user click on thier name on the header menu, this page appears. It consists of two sections. First an profile update form and second order history.

### Filter and Sort Products

In the home page, right after header, there is a filter bar to filter products based on their name and description. also it is possible to sort product based on prices and arrivals.

### Deploy Website on Heroku

This section explains all steps to publish the ecommerce website on heroku. first you need to create a cloud mongodb and the make an account on heroku.

### Rate and Review Products

This part shows list of reviews by users for each products. also it provides a form to enter rating and review for every single product. also it update the avg rating of each product by user ratings.

