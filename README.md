# cyberpedia
semi-interactive reference to cyberpunk media; vue.js prototype 

Wanted to learn vue.js framework, best way to learn is to do
Also been compiling a comprehensive list of cyberpunk movies with notes in evernote and wanted a sortable, public version to share
Hence I've hacked out this SPA

It is curently a very impomplete prototype. I wil lcontinue to develop it until i don't

Currently has no external depenacies 
(not counting cdn link to vue library & google font link)
Data is in an object within the js file
bound to html through vue conventions
styling is plain css, non-reactive

Technical Goals:
reload detail on index click with that tiles insormation
allow sorting index by rate, alpha and year
externalize data object 
add into page
add appendix
hotlink dir name to imdb page
hotlink tomato score to rotten tomatoes page
add preprocessing configurations, proabbly via webpack

Content Goals
add summaries, reviews, images & quotes, links to imdb, wiki and rotten tomatoes

Style Goals
make rating icons of stars  for rating, and mirroshade for cyberpunk index and smiles for fun index.
work into leaderboard
add media queries
move into scss (or possibly into vue type formating)


