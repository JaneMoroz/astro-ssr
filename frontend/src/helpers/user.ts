import showToast from "./showToast";

// Authenticate user
export const authUser = async (payload: FormData, actionName: string) => {
  // Get url according to action
  const url =
    actionName === "sign_in"
      ? `${import.meta.env.PUBLIC_SERVER_URL}/api/auth/local`
      : `${import.meta.env.PUBLIC_SERVER_URL}/api/auth/local/register`;

  const response = await fetch(url, {
    method: "POST",
    body: payload,
  });

  const data = await response.json();

  // Check for jwt token
  if (data.jwt) {
    // Success! Save jwt token to cookie using 'cookie' endpoint
    fetch(`${import.meta.env.PUBLIC_CLIENT_URL}/cookie`, {
      method: "POST",
      headers: { Authorization: `${data.jwt}` },
    }).then((res) => {
      // Redirect
      window.location.href = "/products";
    });
  } else {
    showToast("Error", "Something went wrong. Try again!");
  }
};

export const signOut = () => {
  fetch(`${import.meta.env.PUBLIC_CLIENT_URL}/cookie`)
    .then((res) => {
      // Redirect
      window.location.href = "/auth/signin";
    })
    .catch((err) => showToast("Error", "Something went wrong :("));
};
