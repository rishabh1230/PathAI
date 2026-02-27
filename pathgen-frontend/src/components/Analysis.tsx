export default function Analysis({analysis}){

if(!analysis) return null

return(

<div>

<h2>
AI Path Analysis
</h2>

{["easy_first","hard_first","balanced"].map(p=>{

const item=analysis[p]

if(!item) return null   // 🔥 Prevent crash

return(

<div
className="card"
key={p}
>

<h3>
{p.replace("_"," ")}
</h3>

<div className="analysis">

<div>

<h4>Pros</h4>

<ul>

{item.pros?.map(x=>(
<li key={x}>
✔ {x}
</li>
))}

</ul>

</div>

<div>

<h4>Cons</h4>

<ul>

{item.cons?.map(x=>(
<li key={x}>
✖ {x}
</li>
))}

</ul>

</div>

</div>

<div className="score">

Score {item.score}/10

</div>

</div>

)

})}

</div>

)

}