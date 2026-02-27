export default function Sources({sources}){

return(

<div>

<h2>
Sources Analysis
</h2>

<div className="grid">

{Object.entries(sources).map(
([name,val])=>(

<div
key={name}
className="sourceCard"
>

<h3>

{name}

</h3>

<div className="difficulty">

Difficulty {val.difficulty}/10

</div>

<div className="tags">

{val.concepts.map(c=>(

<span key={c}
className="tag"
>

{c}

</span>

))}

</div>

</div>

))

}

</div>

</div>

)
}