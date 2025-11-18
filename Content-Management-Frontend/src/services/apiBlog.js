import api from "@/api"

export async function getBlogs(page){
    try {
        const response = await api.get(`blog_pagination?page=${page}`)
        return response.data
    }
    catch(err){
        throw new Error(err.message)
    }
}

export async function getBlog(slug){
    try {
        const response = await api.get(`blogs/${slug}`)
        return response.data
    }
    catch(err){
        throw new Error(err.message)
    }
}

export async function registerUser(data){
    try{
        const response = api.post("register/",data)
        return response.data
    }
    catch(error){
        console.log(error)
        if(error.status == 400){
            throw new Error("Username already exist")
        }
        throw new Error(error)
    }
}

export async function signin(data){

    try{
        const response = await api.post('api/token/', data)
        return response.data
    }
    catch(err){
        if (err.status === 401){
            throw new Error("Invalid credentials")
        }else{
            throw new Error(err)
        }
    }
}

export async function getUsername(){
    try{
    const response = await api.get('get_username/')
    return response.data
    }
    catch(err){
        throw new Error(err.message)
    }
}

export async function createBlog(data){
    try{
    const response = await api.post('create_blog/',data)
    return response.data
    }
    catch(err){
        throw new Error(err.message)
    }
}