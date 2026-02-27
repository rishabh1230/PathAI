export default function Paths({paths}){

return(

<div>

<h2>
Learning Paths
</h2>

<div className="grid">

{Object.entries(paths).map(
([name,path])=>(

<div
key={name}
className="card"
>

<h3>

{name}

</h3>

<ol>

{path.map((p,i)=>(
<li key={p}>
{i+1}. {p}
</li>
))}

</ol>

</div>

))

}

</div>

</div>

)
}