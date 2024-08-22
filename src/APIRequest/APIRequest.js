import axios from "axios";

const BaseURL = "https://basic-blog.teamrabbil.com/api/";


export async function postCategories() {
    let response = await axios.get(BaseURL + "post-categories");
    if (response.status === 200) {
        return response.data;
    }
    else {
        return [];
    }
}

export async function postNewest() {
    let response = await axios.get(BaseURL + "post-newest");
    if (response.status === 200) {
        return response.data;
    }
    else {
        return [];
    }
}

export async function postByCategory(id) {
    let response = await axios.get(BaseURL + "post-list/" + id);
    if (response.status === 200) {
        return response.data;
    }
    else {
        return [];
    }
}

export async function postDetails(id) {
    let response = await axios.get(BaseURL + "post-details/" + id);
    if (response.status === 200) {
        return response.data;
    }
    else {
        return [];
    }
}