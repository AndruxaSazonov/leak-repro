## Leak reproduction for `nuxt-link` (router-link).

Usage
1. Clone this repository
2. npm install
3. npm run build
4. npm run start

Test two pages with ab or loadtest (`npm i -g loadtest`)
- ab -n 100 -c 1 -r -k http://localhost:3000/anchors
- ab -n 100 -c 1 -r -k http://localhost:3000/links

Wait for some (short or long) time after each test and refresh page in browser. You should notice, that in anchors case the garbage is collected (memory usage drops to initial). In the links case, there isn't. Also please notice the difference in perfomance.

I guess that vue-router copies the context, but this idea needs deeper investigations.

