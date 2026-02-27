export async function generatePaths(files, urls){

const formData = new FormData()

files.forEach(f=>{
formData.append("files",f)
})

urls.forEach(u=>{
if(u.trim())
formData.append("urls",u)
})

const res = await fetch(
"http://127.0.0.1:8000/generate-paths/",
{
method:"POST",
body:formData
}
)

return res.json()

}