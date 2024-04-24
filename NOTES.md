## Task 1

I'm afraid I am not much of a DBA, if it's required for the role I am more than happy to learn new things.

But at a quick glance and some research:

There is no relation between the bookings and the `parcs` table and the `booking` table.
The column `parcs` in table `bookings` references GUID whereas the `id` column in the `parcs` table is an ID (string uid vs int uid), 
based off the research from: [https://blog.codinghorror.com/primary-keys-ids-versus-guids/](https://blog.codinghorror.com/primary-keys-ids-versus-guids/), 
I would choose the GUID approach based off its scalability to be distributed across multiple instances, unless dealing with high volumes then that case ID.

Given as bookings would likely be queried a lot against the `date` column it would be potentially be worth indexing as well as converting to a date datatype.

Everything also appears to be varchar which I found odd from the `comments` column from the `bookings` table as I thought this should have been a `text` datatype and from reading: [https://www.postgresql.org/docs/current/datatype-character.html](https://www.postgresql.org/docs/current/datatype-character.html) `text` seems to be the preferred datatype for most text related data.

As for caching if this was in AWS I would recommend adding in a caching layer using ElastiCache, there is a good video here: [https://www.youtube.com/watch?v=xAAmMWvK_3g](https://www.youtube.com/watch?v=xAAmMWvK_3g)



## Task 2

[Server actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) in Nextjs 14 are very exciting, its like we have gone full circle back to the PHP days, [Nextjs caching solution](https://nextjs.org/docs/app/building-your-application/caching) just got more exciting with the ability to invalidate cache routes from an [API call](https://nextjs.org/docs/app/building-your-application/caching#invalidation).


The [react compiler](https://react.dev/blog/2024/02/15/react-labs-what-we-have-been-working-on-february-2024) is something I am looking forward to, I first found this out by watching FireShips [video](https://www.youtube.com/watch?v=4k6Xgjqkad4&t=112s).

I believe any web application should be benchmarked against using: [Pagespeed Insights (lighthouse)](https://pagespeed.web.dev/).

For unit tests I generally use [jest](https://jestjs.io/), along with [react testing library](https://testing-library.com/docs/react-testing-library/intro/) and for end-to-end testing I prefer [cypress](https://www.cypress.io/) to [playwright](https://playwright.dev/).

I am also very passionate about accessibility on websites and that all end-to-end tests should include a level of accessibility, I can recommend [cypress-axe](https://www.npmjs.com/package/cypress-axe).

I am a huge fan of [renovate](https://docs.renovatebot.com/) as well as [SonarQube](https://www.sonarsource.com/products/sonarqube/) for automation of maintainability for a project.

For components, I am a big fan of [Material-UI](https://mui.com/).

I also try to limit the number of packages imported into a project, to avoid creating bloatware although most third party scripts in NPM have gotten better at tree shaking.


## Task 3

Please see `/frontend`
