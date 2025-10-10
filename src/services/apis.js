const BASE_URL = "https://www.mahitechnocrafts.in/api/v1"
// const BASE_URL = process.env.REACT_APP_BASE_URL


export const contactusEndpoint = {
  CONTACT_US_API: BASE_URL + "/reach/contact",
  USER_API: BASE_URL + "/user",

}

export const blogsEndpoint = {
  LIST: BASE_URL + "/blogs",
  BY_SLUG: (slug) => BASE_URL + `/blogs/slug/${slug}`,
  BY_ID: (id) => BASE_URL + `/blogs/${id}`,
  CREATE: BASE_URL + "/blogs",
  UPDATE: (id) => BASE_URL + `/blogs/${id}`,
  DELETE: (id) => BASE_URL + `/blogs/${id}`,
}

export const uploadsEndpoint = {
  IMAGE: BASE_URL + "/uploads/image",
}

