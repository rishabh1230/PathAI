import {useState} from "react"
import {generatePaths} from "./api"

import UploadSection from "./components/UploadSection"
import Sources from "./components/Sources"
import Paths from "./components/Paths"
import Analysis from "./components/Analysis"
import Recommended from "./components/Recommended"

import "./styles/main.css"

export default function App(){

const [files,setFiles]=useState([])
const [urls,setUrls]=useState([""])
const [data,setData]=useState(null)

const submit = async ()=>{

const result = await generatePaths(files,urls)

setData(result)

}

return(

<div className="container">

<h1 className="title">
PathGen AI
</h1>

<UploadSection
files={files}
setFiles={setFiles}
urls={urls}
setUrls={setUrls}
submit={submit}
/>

{data && <Sources sources={data.sources}/>}

{data && <Paths paths={data.paths}/>}

{data && <Analysis analysis={data.analysis}/>}

{data && <Recommended
paths={data.paths}
analysis={data.analysis}
/>}

</div>

)

}