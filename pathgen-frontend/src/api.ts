const API_URL = "http://localhost:8000/generate-paths/"

export async function generatePaths(files, urls){

const formData = new FormData()

// Add files
files.forEach(file=>{
formData.append("files",file)
})

// Add URLs
urls.forEach(url=>{
if(url.trim() !== ""){
formData.append("urls",url)
}
})

const res = await fetch(API_URL,{
method:"POST",
body:formData
})

if(!res.ok){
throw new Error("Server error")
}

return await res.json()

}