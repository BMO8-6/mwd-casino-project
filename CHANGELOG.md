# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).
 
## [0.2.1] - 2023-10-13

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
