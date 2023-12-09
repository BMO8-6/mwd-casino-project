# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).


## [0.4.1] - 2023-12-09
### Added
- Instructions to run project in the README.md file

## [0.4.0] - 2023-12-07

### Added
- Logout Function
- Checkout Ability. User can add to their balance by adding funds to their Profile via the Checkout tab
- Home Page now displays the current User's profile
- Netlify website ([link](https://mwdroulette.netlify.app/))
- Roulette Multiplayer (only works locally because of Netlify's security protocols not allowing servers to be run). Here's a link to a video proving it's working: ([link](https://drive.google.com/file/d/108Xd1CjPFcZewJS5mTB4LH7wlpM3sg1X/view?usp=drive_link))
  
### Changed
- Lots of files formatting because of addition of tsconfig.json

### Fixed
The issue I was facing was due to the clientSecret not being correctly passed to the Stripe Elements provider when trying to render the PaymentElement. I adjusted it to ensure that the clientSecret, obtained from the backend in Parse after creating a PaymentIntent, is properly set in the component's state and then passed to the Elements provider. This setup allows the Elements provider to initialize correctly with the necessary clientSecret, enabling it to render the PaymentElement for payment confirmation. Additionally, I implemented conditional rendering in the CheckoutForm component to switch between the UI for adding funds and confirming the payment based on whether the clientSecret is available.

## [0.3.0] - 2023-11-2023

### Added

- Authorization methods for the users (registering and logging in)
- Blackjack game now functional (added game logic and actual user interactions)
- Roulette game now functional (added game logic and actual user interactions)

### Changed
  
- [Casino](https://github.com/jgutier7/mwd-casino-project)


 
### Fixed
 
- [Casino](https://github.com/jgutier7/mwd-casino-project)
- Resolved the errors in the games


## [0.2.0] - 2023-10-13

### Added

- Introduced the `Profile` table in the database with a pointer to users.
- Created new service function `getAllUsersProfiles` to retrieve user profiles from the updated data structure.
- React `HomeView` now fetches and displays user profile data from the `Profile` table.

### Changed
  
- [Casino](https://github.com/jgutier7/mwd-casino-project)
- Modified React `HomeView` to adapt to the new `Profile` table structure.
- Modified folder structure of the project to better resemble a typical React App
 
### Fixed
 
- [Casino](https://github.com/jgutier7/mwd-casino-project)
- Resolved permissions error related to fetching data from the `Profile` table.
