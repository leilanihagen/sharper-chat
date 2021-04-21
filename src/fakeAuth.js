
export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100) // fake async
      },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };