const { signIn, signOut } = require("./auth");

export const handleGithubLogin = async () => {
    await signIn("github");
}

export const handleGithubLogout = async () => {
    await signOut();
}
