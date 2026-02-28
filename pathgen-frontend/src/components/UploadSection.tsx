export default function UploadSection({
files,
setFiles,
urls,
setUrls,
submit
}){

return(

<div className="card">

<h2>
Generate Learning Paths
</h2>

<div className="uploadBox">

<label className="uploadLabel">

<input
type="file"
multiple
onChange={(e)=>
setFiles(Array.from(e.target.files || []))
}
className="fileInput"
/>

<div className="uploadContent">

<div className="uploadIcon">
⬆
</div>

<div className="uploadText">
Upload learning materials (.txt)
</div>

<div className="uploadSub">
Drag and drop or click to browse
</div>

</div>

</label>

{files.length > 0 && (
<div className="fileCount">
{files.length} files selected
</div>
)}

</div>

<h3>URL Input</h3>

{urls.map((u,i)=>(
<input
key={i}
value={u}
onChange={(e)=>{
const copy=[...urls]
copy[i]=e.target.value
setUrls(copy)
}}
className="input"
placeholder="Enter URL..."
/>
))}

<button
onClick={()=>setUrls([...urls,""])}
className="btn-small"
>
Add URL
</button>

<button
onClick={submit}
className="btn-main"
>
Generate Paths
</button>

</div>

)
}