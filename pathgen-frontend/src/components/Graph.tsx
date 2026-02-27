export default function Graph({graph}){

return(

<div>

<h2>

Dependency Graph

</h2>

<div className="card">

{Object.keys(graph).map(node=>(

<div key={node} className="graphRow">

<div className="node">

{node}

</div>

<div className="arrow">

→

</div>

<div className="targets">

{graph[node].length===0
?
<span className="none">
None
</span>
:
graph[node].map(t=>(
<span
key={t}
className="nodeSmall"
>

{t}

</span>
))
}

</div>

</div>

))}

</div>

</div>

)
}