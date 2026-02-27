export default function Recommended({
paths,
analysis
}){

const best = analysis?.best_path || "easy_first"

return(

<div>

<h2>

Recommended Learning Path

</h2>

<div className="card">

<h3>

Best Path: {best}

</h3>

<p>

<p>{analysis?.reason}</p>

</p>

<ol>

{paths[best].map((p,i)=>(
<li key={p}>
{i+1}. {p}
</li>
))}

</ol>

</div>

</div>

)
}