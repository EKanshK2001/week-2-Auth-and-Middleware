## Mini Project to practice authentication using jwt and more middlewares

### Tech Stack (TypeScript, Express, jwt)


### Things to cover :
- Provide a jwt token encoded with some user information (provided at signup or something) ✅
- Send the token back in every request header that needs the auth/login (use a middleware to authenticate) ✅

- Bring in mongodb, use that to actually store user data at signup and sign it in the jwt along with username
- and when on signin, fetch user data from the id after decoding the jwt

- as for storing the user data after login, we can do that in a global state manager like recoil(?)



### Run :
- npm run dev

 // interface jwtPayLoad {
            //     username: string,
            //     email: string,
            //     userId: string,
            // } 