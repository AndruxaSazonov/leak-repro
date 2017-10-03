## Problem reproduction for `nuxt-link` (router-link).

Usage
1. Clone this repository
2. npm install
3. npm run build
4. npm run start

Test two pages with ab or loadtest (`npm install --global loadtest` - it has the same command line arguments set)
- ab -n 100 -c 1 -r -k http://localhost:3000/anchors
- ab -n 100 -c 1 -r -k http://localhost:3000/links
- ab -n 100 -c 1 -r -k http://localhost:3000/leak

Wait for some (short or long) time after each test and refresh page in browser, or look at the top or other task manager. You should notice, that in anchors case the garbage is collected (memory usage drops to initial). In the links case, there are also garbage collection exists, *but* this case uses much more memory and significantly slowly. The last case is not actually a leak, but the _coincidence_ (combination) of promises usage and the second case - what really in production code happens. Nothing good - huge memory consumption with weak garbage collection.

