# CVWO 2024 Assignment - Forum App (Frontend)
## About this project
This project is an assignment for NUS Computing for Voluntary Welfare Organisations (CVWO) for 2024.

* Name         : Soumyadip Saha

*

## Table of contents

* Running the app

* User manual


## Running the app

1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository) this repo.
2. [Clone](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository) **your** forked repo.
3. Open your terminal and navigate to the directory containing your cloned project.
4. Install dependencies for the project by entering this command:

```bash
yarn install
```

5. Run the app in development mode by entering this command:

```bash
yarn start
```

6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## User manual
### Getting started
When the app starts, you will be brought to the login page. If you are a new user, click on the "Don't have an account? Sign up" link and follow the 'signup guide'. If you are an existing user, please follow the sign in guide.

### Sign up
* You will be prompted to enter a username and password. There are no restrictions on the length of the password.
* Once you enter your username and password, you can click on the "Sign up" button below them. If successful, you will be redirected to the "Sign In" page. Otherwise, there will be an error notification. An error could occur due to problems with your browser or if an identical username is already registered.
  
### Sign in
* You will be prompted to enter your username and password.
* Once you enter your username and password, you can click on the "Sign in" button below them. If successful, you will be redirected to the "All posts" page. Otherwise, there will be an error notification. An error could occur due to problems with your browser or if the username or password is incorrect.
  
### Navigation Bar
* The navigation bar is on top of the page. If you are not signed in, there will be two buttons on the top-right corner of the page: the "Sign In" button and the "Sign Up" button, which will redirect you to the "Sign In" page and the "Sign Out" page respectively. If you are signed in, there will be a "Create New" button to create a new thread and a "Sign Out" button to sign out of your account and redirect you to the "Sign In" page.
* On the left there is a menu button that will open a list of categories. You can click on any of the categories to filter the posts by the category you have selected. To return to 'All Posts', click on 'All Posts' in the menu.

### Add thread
* You can click on the 'Create New' button on the navigation barr to create a new thread.
* You will be prompted by a modal overlay to enter the category of the thread, the title of the thread and the contents of the thread.
* Once you are done, you can click on the 'create' button to add the thread. If you want to cancel, you can click on the 'cancel' button or you can click outside the modal.

### Edit thread
* You can click on the 'Edit' button on the thread card of the thread you wnat to edit.
* You will be prompted by a modal overlay, where you can edit the thread details. If you decided not to edit the thread, you can click the "Cancel" button on the bottom of the modal overlay.
* You can click on the "Update" button on the bottom of the modal overlay to save the changes made to the thread.

### Delete thread
* You can click on the 'Delete' button on the thread card of the thread you want to delete.
* You will be prompted with an alert dialog. If you decided not to delete the task, you can click the "Cancel" button on the alert dialog.
* You can click on the "Ok" button on the alert dialog to delete the task. Note that there is no way to undo this action.
