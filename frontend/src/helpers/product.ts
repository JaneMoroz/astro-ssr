import closeModal from "./closeModal";
import showToast from "./showToast";

// Upload image to server
export const uploadImage = async (
  payload: FormData,
  originalImgId?: number
) => {
  let imgId = -1;
  // Check if user is authorised
  if (document.cookie[0] !== undefined) {
    const res = await fetch(`${import.meta.env.PUBLIC_SERVER_URL}/api/upload`, {
      method: "POST",
      body: payload,
    });
    const data = await res.json();

    // If uploading was unsuccesful get original image id
    if (originalImgId) {
      imgId = originalImgId;
    }
    // If uploading was succesful get uploaded image id
    if (!data.error) {
      imgId = data[0].id;
    }

    if (imgId === -1) {
      closeModal();
      showToast("Error", "OOPS :( Something went wrong 😬");
    }
    return imgId;
  } else {
    closeModal();
    showToast("Error", "OOPS :( Maybe you haven't SIGN IN 😬");
    return imgId;
  }
};

//////////////////////////////////////////
// Add new product to server
export const addNewProduct = async (product: {
  title: FormDataEntryValue;
  price: FormDataEntryValue;
  image: number;
}) => {
  const res = await fetch(`${import.meta.env.PUBLIC_SERVER_URL}/api/products`, {
    method: "POST",
    headers: new Headers({
      Authorization: `Bearer ${document.cookie.slice(10)}`,
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({ data: product }),
  });
  const data = await res.json();

  if (!data.error) {
    window.location.href = "/products";
  }
  if (data.error) {
    closeModal();
    showToast("Error", "OOPS :( Something went wrong.");
  }
};

//////////////////////////////////////////
// Update product on server
export const updateProduct = async (
  productId: number,
  product: {
    title: FormDataEntryValue;
    price: FormDataEntryValue;
    image: number;
  }
) => {
  const res = await fetch(
    `${import.meta.env.PUBLIC_SERVER_URL}/api/products/${productId}`,
    {
      method: "PUT",
      headers: new Headers({
        Authorization: `Bearer ${document.cookie.slice(10)}`,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ data: product }),
    }
  );
  const data = await res.json();

  if (!data.error) {
    window.location.href = "/products";
  }
  if (data.error) {
    closeModal();
    showToast("Error", "OOPS :( Something went wrong.");
  }
};

//////////////////////////////////////////
// Delete product on server
export const deleteProduct = async (productId: number) => {
  const res = await fetch(
    `${import.meta.env.PUBLIC_SERVER_URL}/api/products/${productId}`,
    {
      method: "DELETE",
      headers: new Headers({
        Authorization: `Bearer ${document.cookie.slice(10)}`,
        "Content-Type": "application/json",
      }),
    }
  );
  const data = await res.json();

  if (!data.error) {
    window.location.href = "/products";
  }
  if (data.error) {
    showToast("Error", "OOPS :( Something went wrong.");
  }
};
